import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { events, site } from "@/lib/site-data";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      type: "article",
      images: [{ url: site.defaultOgImage, width: 800, height: 600, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.ogTitle,
      description: post.ogDescription,
      images: [site.defaultOgImage],
    },
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = post.relatedEventSlugs
    ? events.filter((e) => post.relatedEventSlugs?.includes(e.slug))
    : events;

  return (
    <article className="px-5 py-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          datePublished: post.datePublished,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name, url: `${site.url}/` },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
      <div className="mx-auto max-w-2xl">
        <p className="text-xs text-muted">
          <Link href="/blog" className="hover:text-accent">
            Blog
          </Link>
        </p>
        <h1 className="font-display mt-3 text-4xl sm:text-5xl">
          {post.title.split(" | ")[0]}
        </h1>
        <p className="mt-6 text-base text-muted">{post.excerpt}</p>

        {post.sections?.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="font-display text-2xl sm:text-3xl">{section.heading}</h2>
            {section.paragraphs.map((para) => (
              <p key={para.slice(0, 40)} className="mt-4 text-base text-muted">
                {para}
              </p>
            ))}
          </section>
        ))}

        <div className="mt-10 rounded-xl border border-white/10 bg-surface/30 p-5">
          <p className="text-sm font-bold uppercase tracking-wide text-accent">
            Explore the events mentioned in this guide
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {related.map((e) => (
              <li key={e.slug}>
                <Link href={`/events/${e.slug}`} className="hover:text-accent">
                  {e.name} — {e.dateLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
