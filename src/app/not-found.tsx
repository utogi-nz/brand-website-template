import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="font-heading text-6xl font-bold tracking-tight sm:text-8xl">
        404
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className={buttonVariants({ className: "mt-8" })}>
        Back to Home
      </Link>
    </main>
  );
}
