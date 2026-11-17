import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        404
      </p>
      <h1 className="mt-6 text-[clamp(2rem,6vw,4rem)] leading-[1] font-medium tracking-[-0.03em]">
        This page never shipped.
      </h1>
      <Link
        href="/"
        className="mt-10 w-fit border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
      >
        Back home
      </Link>
    </main>
  );
}
