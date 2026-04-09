"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { PropertyCard } from "@/components/property-card";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { properties, blogPosts } from "@/lib/data";

const stats = [
  { icon: Home, value: "200+", label: "Properties Sold" },
  { icon: Users, value: "150+", label: "Happy Clients" },
  { icon: TrendingUp, value: "15+", label: "Years Experience" },
];

export default function HomePage() {
  const featured = properties.filter((p) => p.status !== "Sold").slice(0, 3);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden sm:min-h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
          alt="Beautiful home"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-7xl"
          >
            Find Your Dream Home
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-5 max-w-xl text-base font-light tracking-wide text-white/90 sm:mt-6 sm:text-xl"
          >
            Discover exceptional properties with a trusted local agent who puts
            your needs first.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Link href="/properties" className={buttonVariants({ size: "lg" })}>
              Browse Properties <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className={buttonVariants({ size: "lg", variant: "outline", className: "border-white/30 bg-white/10 text-white hover:bg-white/20" })}>
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border/40 bg-muted/30 py-10 sm:py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4 px-6 sm:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <SectionHeading
          title="Featured Properties"
          subtitle="Hand-picked listings that represent the best value and opportunity on the market right now."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/properties" className={buttonVariants({ variant: "outline" })}>
            View All Properties <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About / CTA */}
      <section className="bg-muted/30 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 sm:gap-12 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Your Trusted Real Estate Partner
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              With over 15 years of experience in the Austin market, I bring
              deep local knowledge, strong negotiation skills, and a genuine
              commitment to helping you achieve your real estate goals — whether
              you&apos;re buying your first home or selling a luxury estate.
            </p>
            <Link href="/contact" className={buttonVariants({ className: "mt-6" })}>
              Work With Me
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[3/2] overflow-hidden rounded-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
              alt="Real estate agent"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <SectionHeading
          title="Latest Insights"
          subtitle="Tips, market updates, and expert advice to help you make informed real estate decisions."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
