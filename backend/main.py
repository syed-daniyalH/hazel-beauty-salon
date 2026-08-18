from __future__ import annotations

import json
import os
import sqlite3
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from threading import Lock
from typing import Generator, Literal

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


BASE_DIR = Path(__file__).resolve().parent
DATABASE_PATH = BASE_DIR / "hazel_submissions.sqlite3"
LOCK = Lock()


def configured_origins() -> list[str]:
    site_url = os.environ.get("NEXT_PUBLIC_SITE_URL", "http://localhost:3000").rstrip("/")
    return sorted(
        {
            site_url,
            "http://localhost:3000",
            "http://127.0.0.1:3000",
        }
    )


@contextmanager
def get_connection() -> Generator[sqlite3.Connection, None, None]:
    connection = sqlite3.connect(DATABASE_PATH)
    try:
        connection.row_factory = sqlite3.Row
        yield connection
        connection.commit()
    finally:
        connection.close()


def initialize_database() -> None:
    DATABASE_PATH.parent.mkdir(parents=True, exist_ok=True)
    with get_connection() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS submissions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                kind TEXT NOT NULL,
                created_at TEXT NOT NULL,
                payload_json TEXT NOT NULL
            )
            """
        )


def store_submission(kind: str, payload: dict[str, object]) -> int:
    created_at = datetime.now(timezone.utc).isoformat()
    with LOCK:
        with get_connection() as connection:
            cursor = connection.execute(
                "INSERT INTO submissions (kind, created_at, payload_json) VALUES (?, ?, ?)",
                (kind, created_at, json.dumps(payload, ensure_ascii=False)),
            )
            return int(cursor.lastrowid)


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: str | None = Field(default=None, max_length=254)
    phone: str = Field(min_length=6, max_length=40)
    subject: str | None = Field(default=None, max_length=160)
    message: str = Field(min_length=5, max_length=4000)


class AppointmentRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=40)
    email: str | None = Field(default=None, max_length=254)
    serviceInterest: str = Field(min_length=2, max_length=200)
    preferredDate: str | None = Field(default=None, max_length=40)
    preferredTime: str | None = Field(default=None, max_length=40)
    notes: str | None = Field(default=None, max_length=4000)


class BridalConsultationRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=40)
    email: str | None = Field(default=None, max_length=254)
    eventType: str = Field(min_length=2, max_length=80)
    eventDate: str | None = Field(default=None, max_length=40)
    venue: str | None = Field(default=None, max_length=200)
    look: str | None = Field(default=None, max_length=200)
    notes: str | None = Field(default=None, max_length=4000)


class PackageEnquiryRequest(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=6, max_length=40)
    email: str | None = Field(default=None, max_length=254)
    package: str = Field(min_length=2, max_length=200)
    eventDate: str | None = Field(default=None, max_length=40)
    notes: str | None = Field(default=None, max_length=4000)


class SubmissionResponse(BaseModel):
    message: str
    submissionId: int


app = FastAPI(title="Hazel Beauty Salon API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=configured_origins(),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


initialize_database()


@app.on_event("startup")
def on_startup() -> None:
    initialize_database()


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/contact", response_model=SubmissionResponse)
def submit_contact(request: ContactRequest) -> SubmissionResponse:
    submission_id = store_submission("contact", request.model_dump())
    return SubmissionResponse(
        message="Your message has been received. Hazel will contact you shortly.",
        submissionId=submission_id,
    )


@app.post("/api/appointment-requests", response_model=SubmissionResponse)
def submit_appointment_request(request: AppointmentRequest) -> SubmissionResponse:
    submission_id = store_submission("appointment-request", request.model_dump())
    return SubmissionResponse(
        message="Your appointment request has been received. Hazel will contact you to confirm availability.",
        submissionId=submission_id,
    )


@app.post("/api/bridal-consultations", response_model=SubmissionResponse)
def submit_bridal_consultation(request: BridalConsultationRequest) -> SubmissionResponse:
    submission_id = store_submission("bridal-consultation", request.model_dump())
    return SubmissionResponse(
        message="Your bridal consultation request has been received. Hazel will contact you to confirm availability.",
        submissionId=submission_id,
    )


@app.post("/api/package-enquiries", response_model=SubmissionResponse)
def submit_package_enquiry(request: PackageEnquiryRequest) -> SubmissionResponse:
    submission_id = store_submission("package-enquiry", request.model_dump())
    return SubmissionResponse(
        message="Your package enquiry has been received. Hazel will contact you to confirm availability.",
        submissionId=submission_id,
    )


@app.get("/api/submissions")
def list_submissions(limit: int = 20) -> list[dict[str, object]]:
    if limit < 1 or limit > 100:
        raise HTTPException(status_code=400, detail="limit must be between 1 and 100")

    with LOCK:
        with get_connection() as connection:
            rows = connection.execute(
                """
                SELECT id, kind, created_at, payload_json
                FROM submissions
                ORDER BY id DESC
                LIMIT ?
                """,
                (limit,),
            ).fetchall()

    return [
        {
            "id": row["id"],
            "kind": row["kind"],
            "createdAt": row["created_at"],
            "payload": json.loads(row["payload_json"]),
        }
        for row in rows
    ]
