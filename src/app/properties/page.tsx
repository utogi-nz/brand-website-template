"use client";

import { useState } from "react";
import { PropertyCard } from "@/components/property-card";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";

const filters = ["All", "House", "Condo", "Townhouse", "Apartment"] as const;
const statuses = ["All", "For Sale", "For Rent", "Sold"] as const;

export default function PropertiesPage() {
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filtered = properties.filter((p) => {
    if (typeFilter !== "All" && p.type !== typeFilter) return false;
    if (statusFilter !== "All" && p.status !== statusFilter) return false;
    return true;
  });

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
      <SectionHeading
        title="Properties"
        subtitle="Browse our curated selection of homes, condos, townhouses, and apartments."
      />

      {/* Filters */}
      <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-sm font-medium text-muted-foreground">Type:</span>
          {filters.map((f) => (
            <Button
              key={f}
              size="sm"
              variant={typeFilter === f ? "default" : "outline"}
              onClick={() => setTypeFilter(f)}
              className="cursor-pointer"
            >
              {f}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-sm font-medium text-muted-foreground">Status:</span>
          {statuses.map((s) => (
            <Button
              key={s}
              size="sm"
              variant={statusFilter === s ? "default" : "outline"}
              onClick={() => setStatusFilter(s)}
              className="cursor-pointer"
            >
              {s}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <p className="py-20 text-center text-muted-foreground">
          No properties match your filters.
        </p>
      )}
    </main>
  );
}
