"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getBlogPostBySlug } from "@/lib/data";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-8 sm:py-10">
      <Link href="/blog" className={buttonVariants({ variant: "ghost", size: "sm", className: "mb-6" })}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Badge variant="secondary">{post.category}</Badge>

        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>

        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span className="hidden sm:inline">&middot;</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span className="hidden sm:inline">&middot;</span>
          <span>{post.readTime}</span>
        </p>

        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>

        <Separator className="my-8" />

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-3 mt-8 text-xl font-semibold">
                  {block.replace("## ", "")}
                </h2>
              );
            }
            if (block.startsWith("### ")) {
              return (
                <h3 key={i} className="mb-2 mt-6 text-lg font-semibold">
                  {block.replace("### ", "")}
                </h3>
              );
            }
            return (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                {block}
              </p>
            );
          })}
        </div>
      </motion.article>
    </main>
  );
}
