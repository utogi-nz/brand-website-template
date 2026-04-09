"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Maximize } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { type Property, formatPrice } from "@/lib/data";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/properties/${property.slug}`}>
        <Card className="group cursor-pointer overflow-hidden border-border/50 transition-shadow duration-200 hover:shadow-lg">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <Badge
              className="absolute left-3 top-3"
              variant={property.status === "Sold" ? "secondary" : "default"}
            >
              {property.status}
            </Badge>
          </div>
          <CardContent className="p-4">
            <p className="text-lg font-bold">
              {formatPrice(property.price, property.status)}
            </p>
            <h3 className="mt-1 font-semibold leading-tight">{property.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {property.address}, {property.city}, {property.state}
            </p>
            <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <BedDouble className="h-4 w-4" /> {property.beds}
              </span>
              <span className="flex items-center gap-1">
                <Bath className="h-4 w-4" /> {property.baths}
              </span>
              <span className="flex items-center gap-1">
                <Maximize className="h-4 w-4" /> {property.sqft.toLocaleString()} sqft
              </span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
