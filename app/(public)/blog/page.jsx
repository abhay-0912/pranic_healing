"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHero from "@/components/page-hero";
import { blogPosts } from "@/lib/site-data";

const tags = ["All", "Pranic Healing", "Meditation", "Chakras", "Health", "Spirituality"];

function Section({ children, className = "" }) {
  return (
    <section className={`px-6 py-[130px] sm:px-10 lg:px-[60px] ${className}`.trim()}>
      <div className="mx-auto max-w-[1280px]">{children}</div>
    </section>
  );
}

export default function BlogPage() {
  const [tag, setTag] = useState("All");
  const posts = useMemo(() => {
    if (tag === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === tag);
  }, [tag]);

  const featured = posts[0] || blogPosts[0];
  const gridPosts = posts.slice(1);

  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Insights on Energy, Healing & Consciousness"
        subtitle="Articles, guides, and teachings from our healers and practitioners."
        breadcrumb="Home / Blog"
      />

      <Section>
        <article className="grid gap-6 border border-white/10 bg-ink-900 p-6 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[16/10] bg-[linear-gradient(180deg,rgba(201,169,110,0.18),rgba(10,12,16,0.92))]" />
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-200">{featured.category} · {featured.readTime}</p>
            <h2 className="mt-4 font-display text-5xl font-light text-white">{featured.title}</h2>
            <p className="mt-4 text-sm leading-7 text-ink-500">{featured.excerpt}</p>
            <Link href={`/blog/${featured.slug}`} className="mt-5 inline-block text-sm uppercase tracking-[0.3em] text-gold-200">Read Article →</Link>
          </div>
        </article>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setTag(item)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.3em] ${tag === item ? "border-gold-300 bg-gold-300 text-ink-950" : "border-white/20 text-ink-300"}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post) => (
            <article key={post.slug} className="border border-white/10 bg-ink-900 p-5">
              <div className="aspect-[4/3] bg-[linear-gradient(180deg,rgba(201,169,110,0.16),rgba(10,12,16,0.92))]" />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gold-200">{post.category}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-ink-500">{post.date} · {post.readTime}</p>
              <h3 className="mt-3 font-display text-4xl font-light text-white">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-500">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm uppercase tracking-[0.3em] text-gold-200">Read More →</Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
