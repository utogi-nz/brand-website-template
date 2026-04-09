import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
      <SectionHeading
        title="Blog"
        subtitle="Expert advice, market updates, and tips to help you navigate the real estate landscape."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
