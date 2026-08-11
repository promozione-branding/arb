import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

// Fetch blog
async function getBlog(slug) {
  // Guard: if slug is not provided, avoid making the fetch (prevents GROQ param error)
  if (!slug) return null;

  // Support cases where `slug` may be an object like { current: 'my-slug' }
  const slugValue = typeof slug === "string" ? slug : slug?.current;
  if (!slugValue) return null;

  // debug
  console.log('[getBlog] input slug:', slug);

  // 1) Try exact match
  let blog = await client.fetch(
    groq`*[_type=="blog" && slug.current==$slug][0]{
      title,
      date,
      excerpt,
      "imageUrl": image.asset->url,
      content,
      metaTitle,
      metaDescription
    }`,
    { slug: slugValue },
  );
  console.log('[getBlog] exact match found:', !!blog);
  if (blog) return blog;

  // 2) Try decodeURIComponent in case the URL was encoded
  try {
    const decoded = decodeURIComponent(slugValue);
    if (decoded && decoded !== slugValue) {
      blog = await client.fetch(
        groq`*[_type=="blog" && slug.current==$slug][0]{
          title,
          date,
          excerpt,
          "imageUrl": image.asset->url,
          content,
          metaTitle,
          metaDescription
        }`,
        { slug: decoded },
      );
      console.log('[getBlog] decoded match found:', !!blog);
      if (blog) return blog;
    }
  } catch (e) {
    // ignore decode errors
  }

  // 3) Fallback: wildcard match (useful if stored slug differs slightly)
  const pattern = `${slugValue}*`;
  blog = await client.fetch(
    groq`*[_type=="blog" && slug.current match $pattern][0]{
      title,
      date,
      excerpt,
      "imageUrl": image.asset->url,
      content,
      metaTitle,
      metaDescription
    }`,
    { pattern },
  );

  console.log('[getBlog] wildcard match found:', !!blog);

  return blog || null;
}

// ✅ SEO
export async function generateMetadata(ctx) {
  const params = await ctx.params;
  const blog = await getBlog(params?.slug);

  return {
    title: blog?.metaTitle || blog?.title || "Blog |  Studio",
    description:
      blog?.metaDescription ||
      blog?.excerpt ||
      "Read the latest insights and updates from Studio.",
  };
}

const components = {
  types: {},
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6">{children}</ol>,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-700 mb-2">{children}</h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-600 mb-2">{children}</h4>
    ),

    h5: ({ children }) => (
      <h5 className="text-base font-semibold text-gray-500 mb-2">{children}</h5>
    ),
    normal: ({ children }) => (
      <p className="text-black leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ value, children }) => (
      <a
        href={value?.href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    color: ({ value, children }) => {
      const colorHex = value?.hex || "inherit";
      return <span style={{ color: colorHex }}>{children}</span>;
    },
  },
};

export default async function BlogDetail(ctx) {
  const params = await ctx.params;
  const blog = await getBlog(params?.slug);

  if (!blog) return <p>Blog not found</p>;

  return (
    <>
      <section
        style={{ backgroundImage: "url('/ctabg.jfif')" }}
        className="relative h-[50vh] md:h-[80vh] bg-center bg-cover overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/40 z-[1]"></div>

        <div className="relative  z-10 flex h-full items-center justify-center max-w-6xl mx-auto px-6">
          <div className="text-blue-900 max-w-2xl bg-white p-2 rounded">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-5">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {blog.imageUrl && (
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={800}
            height={400}
            className="rounded my-6"
          />
        )}

        <p className="text-sm text-red-500 mb-3">
          published on:{" "}
          {blog.date
            ? new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "No date"}
        </p>

        <PortableText value={blog.content} components={components} />
      </div>
    </>
  );
}
