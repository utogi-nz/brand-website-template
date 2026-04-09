"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeading } from "@/components/section-heading";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
      <SectionHeading
        title="Get in Touch"
        subtitle="Ready to buy, sell, or just have questions? Reach out and let's start a conversation."
      />

      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex items-start gap-4">
            <MapPin className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold">Office</h3>
              <p className="text-sm text-muted-foreground">
                123 Main Street, Austin, TX 73301
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm text-muted-foreground">(512) 555-0123</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-1 h-5 w-5 text-primary" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">hello@estateagent.com</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 rounded-xl border border-border/50 p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="First name" aria-label="First name" />
            <Input placeholder="Last name" aria-label="Last name" />
          </div>
          <Input type="email" placeholder="Email address" aria-label="Email address" />
          <Input type="tel" placeholder="Phone number" aria-label="Phone number" />
          <textarea
            placeholder="Tell me about what you're looking for..."
            aria-label="Message"
            className="w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 min-h-[120px] resize-y transition-colors"
          />
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>
    </main>
  );
}
