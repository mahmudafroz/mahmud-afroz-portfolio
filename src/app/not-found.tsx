import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-y px-4 text-center sm:px-6 lg:px-8">
      <div className="mx-auto max-w-reading">
        <h1 className="text-4xl font-bold tracking-normal text-foreground md:text-6xl">
          Page Not Found
        </h1>
        <p className="mt-5 text-base leading-7 text-muted-foreground">
          The page you are looking for is not available in this portfolio.
        </p>
        <div className="mt-8">
          <Link className="button button-primary" href="/">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
