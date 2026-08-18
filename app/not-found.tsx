import Link from "next/link";

export default function NotFound() {
  return (
    <section className="hazel-section min-h-[70vh]">
      <div className="hazel-shell flex min-h-[60vh] flex-col items-start justify-center">
        <p className="hazel-kicker text-[color:var(--hazel-soft-gold)]">404</p>
        <h1 className="mt-4 text-4xl leading-tight md:text-6xl">That page is not in the Hazel archive.</h1>
        <p className="mt-5 max-w-2xl text-sm text-white/70 md:text-base">
          Use the navigation above to return to Hazel’s verified pages, or head back to the home page and continue
          exploring the salon.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="hazel-button-primary" href="/">
            Back Home
          </Link>
          <Link className="hazel-button-secondary" href="/services">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

