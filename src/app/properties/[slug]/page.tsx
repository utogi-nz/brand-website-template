"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Calendar,
  Car,
  LandPlot,
  Maximize,
} from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getPropertyBySlug, formatPrice } from "@/lib/data";

export default function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  const details = [
    { icon: BedDouble, label: "Bedrooms", value: property.beds },
    { icon: Bath, label: "Bathrooms", value: property.baths },
    { icon: Maximize, label: "Sq Ft", value: property.sqft.toLocaleString() },
    { icon: Calendar, label: "Year Built", value: property.yearBuilt },
    { icon: LandPlot, label: "Lot Size", value: property.lot },
    { icon: Car, label: "Garage", value: `${property.garage}-car` },
  ];

  return (
    <main className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
      <Link href="/properties" className={buttonVariants({ variant: "ghost", size: "sm", className: "mb-6" })}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Properties
      </Link>

      {/* Image gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid gap-2 sm:grid-cols-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:grid-rows-2">
          {property.images.slice(1, 3).map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <Image
                src={img}
                alt={`${property.title} ${i + 2}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={property.status === "Sold" ? "secondary" : "default"}>
              {property.status}
            </Badge>
            <Badge variant="outline">{property.type}</Badge>
          </div>

          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {property.title}
          </h1>
          <p className="mt-1 text-muted-foreground">
            {property.address}, {property.city}, {property.state} {property.zip}
          </p>

          <p className="mt-2 text-3xl font-bold">
            {formatPrice(property.price, property.status)}
          </p>

          <Separator className="my-6" />

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {details.map((d) => (
              <div key={d.label} className="flex items-center gap-2 rounded-lg border border-border/50 p-2.5 sm:gap-3 sm:p-3">
                <d.icon className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">{d.label}</p>
                  <p className="font-semibold">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-6" />

          <h2 className="text-xl font-semibold">Description</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {property.description}
          </p>

          <Separator className="my-6" />

          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground sm:grid-cols-3">
            {property.features.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-border/50 p-6 h-fit lg:sticky lg:top-20"
        >
          <h3 className="text-lg font-semibold">Interested in this property?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Listed by <span className="font-medium text-foreground">{property.agent}</span>
          </p>
          <Link href="/contact" className={buttonVariants({ className: "mt-4 w-full" })}>
            Schedule a Tour
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "outline", className: "mt-2 w-full" })}>
            Ask a Question
          </Link>
        </motion.aside>
      </div>
    </main>
  );
}
