import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-heading text-lg font-bold tracking-tight">
              Estate<span className="text-primary">Agent</span>
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your trusted partner in finding the perfect property. Serving the
              Austin metro area with integrity and expertise.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/properties" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Properties</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors duration-200 cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Property Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Houses</li>
              <li>Condos</li>
              <li>Townhouses</li>
              <li>Apartments</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>123 Main Street, Austin, TX</li>
              <li>(512) 555-0123</li>
              <li>hello@estateagent.com</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} EstateAgent. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
