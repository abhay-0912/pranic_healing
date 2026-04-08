import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/button";
import { blogPosts } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <section className="px-6 py-[130px] sm:px-10 lg:px-[60px]">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.68fr,0.32fr]">
        <article className="mx-auto w-full max-w-[720px]">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-200">{post.category} · {post.date} · {post.readTime}</p>
          <h1 className="mt-4 font-display text-6xl font-light text-white">{post.title}</h1>
          <div className="mt-6 aspect-[16/8] border border-white/10 bg-[linear-gradient(180deg,rgba(201,169,110,0.16),rgba(10,12,16,0.95))]" />

          <div className="mt-8 space-y-6 leading-8 text-ink-300">
            {post.content.map((paragraph, index) => (
              <p key={`${post.slug}-${index}`}>{paragraph}</p>
            ))}
            <blockquote className="border-l-2 border-gold-300 pl-4 font-display text-3xl italic text-gold-100">Energy follows thought. Where awareness flows, healing can begin.</blockquote>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.35em] text-ink-500">Share</p>
            <div className="mt-4 flex gap-3 text-sm text-gold-200">
              <Link href="#">WhatsApp</Link>
              <Link href="#">Facebook</Link>
              <Link href="#">Copy Link</Link>
            </div>
          </div>
        </article>

        <aside className="h-fit space-y-5 lg:sticky lg:top-28">
          <div className="border border-white/10 bg-ink-900 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-200">Table of Contents</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-500">
              <li>Introduction</li>
              <li>Key Principles</li>
              <li>Practical Application</li>
              <li>Integration</li>
            </ul>
          </div>

          <div className="border border-white/10 bg-ink-900 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-200">Related Posts</p>
            <div className="mt-3 space-y-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="block border border-white/10 p-3 text-sm text-ink-300 hover:border-gold-300/40">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="border border-white/10 bg-ink-900 p-5">
            <p className="text-sm text-ink-500">Want personal guidance?</p>
            <Button href="/booking" className="mt-4 w-full">Book a Session</Button>
          </div>
        </aside>
      </div>
    </section>
  );
}
