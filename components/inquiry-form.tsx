"use client";

import { useEffect, useMemo, useState } from "react";

import { CheckCircle2, Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { postJson } from "@/lib/api";
import { cn } from "@/lib/utils";

export type InquiryFieldType = "text" | "email" | "tel" | "date" | "time" | "textarea" | "select";

export interface InquiryField {
  name: string;
  label: string;
  type: InquiryFieldType;
  placeholder?: string;
  helper?: string;
  options?: string[];
  rows?: number;
  span?: 1 | 2;
  required?: boolean;
}

export function InquiryForm({
  title,
  summary,
  endpoint,
  submitLabel,
  successMessage,
  fields,
  initialValues,
  queryPrefill,
  note,
}: {
  title: string;
  summary: string;
  endpoint: string;
  submitLabel: string;
  successMessage: string;
  fields: InquiryField[];
  initialValues?: Record<string, string>;
  queryPrefill?: Array<{ param: string; field: string }>;
  note?: string;
}) {
  const searchParams = useSearchParams();
  const resolvedInitialValues = useMemo(() => {
    const nextValues = fields.reduce<Record<string, string>>((acc, field) => {
      acc[field.name] = initialValues?.[field.name] ?? "";
      return acc;
    }, {});

    queryPrefill?.forEach(({ param, field }) => {
      const value = searchParams.get(param);
      if (value) {
        nextValues[field] = value;
      }
    });

    return nextValues;
  }, [fields, initialValues, queryPrefill, searchParams]);

  const [values, setValues] = useState<Record<string, string>>(resolvedInitialValues);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setValues(resolvedInitialValues);
  }, [resolvedInitialValues]);

  const payload = useMemo(
    () => ({
      ...values,
    }),
    [values],
  );

  const handleChange = (name: string, nextValue: string) => {
    setValues((current) => ({
      ...current,
      [name]: nextValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      await postJson(endpoint, payload);
      setSuccess(successMessage);
      setValues(
        fields.reduce<Record<string, string>>((acc, field) => {
          acc[field.name] = initialValues?.[field.name] ?? "";
          return acc;
        }, {}),
      );
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="hazel-card p-6 md:p-8">
      <div className="max-w-2xl">
        <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">{title}</p>
        <p className="mt-4 text-sm text-white/70 md:text-base">{summary}</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {fields.map((field) => {
          const spanClass = field.span === 2 ? "md:col-span-2" : "";
          const baseWrapper = cn("space-y-2", spanClass);
          const commonProps = {
            id: field.name,
            name: field.name,
            required: field.required ?? true,
            placeholder: field.placeholder,
            value: values[field.name] ?? "",
            onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
              handleChange(field.name, event.target.value),
          };

          return (
            <label key={field.name} className={baseWrapper}>
              <span className="hazel-label">{field.label}</span>
              {field.type === "textarea" ? (
                <textarea
                  {...commonProps}
                  rows={field.rows ?? 5}
                  className="hazel-input min-h-[8rem] resize-y border-x-0 border-t-0 px-0 py-3"
                />
              ) : field.type === "select" ? (
                <select
                  {...commonProps}
                  className="hazel-input appearance-none border-x-0 border-t-0 px-0 py-3"
                >
                  <option value="">{field.placeholder ?? "Select one"}</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option} className="bg-[color:var(--hazel-bg)]">
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...commonProps}
                  type={field.type}
                  className="hazel-input border-x-0 border-t-0 px-0 py-3"
                />
              )}
              {field.helper ? <p className="text-xs text-white/45">{field.helper}</p> : null}
            </label>
          );
        })}
      </div>

      {note ? <p className="mt-6 text-xs uppercase tracking-[0.16em] text-white/45">{note}</p> : null}

      {success ? (
        <div className="mt-6 flex items-start gap-3 border border-[color:rgba(225,187,98,0.2)] bg-[color:rgba(201,154,56,0.08)] p-4 text-sm text-[color:var(--hazel-ivory)]">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--hazel-soft-gold)]" strokeWidth={1.5} />
          <p>{success}</p>
        </div>
      ) : null}

      {error ? (
        <div className="mt-6 border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100">{error}</div>
      ) : null}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={submitting} className="hazel-button-primary disabled:cursor-not-allowed disabled:opacity-60">
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} /> : null}
          {submitLabel}
        </button>
        <p className="text-xs uppercase tracking-[0.16em] text-white/42">
          Your details are used only for Hazel to respond to your request.
        </p>
      </div>
    </form>
  );
}
