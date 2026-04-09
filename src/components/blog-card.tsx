"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogPost } from "@/lib/data";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <Card className="group cursor-pointer overflow-hidden border-border/50 transition-shadow duration-200 hover:shadow-lg">
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{post.category}</Badge>
              <span className="text-xs text-muted-foreground">{post.readTime}</span>
            </div>
            <h3 className="mt-2 font-semibold leading-tight transition-colors duration-200 group-hover:text-primary">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
              {post.excerpt}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              {post.author} &middot;{" "}
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
