import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blogs";
import { BlogList } from "@/components/blog/BlogList";

export const metadata: Metadata = {
   title: "Engineering Blog — Anand Dubey | Software, Systems, Web & AI",
   description:
      "Practical engineering articles across programming languages, backend systems, frontend architecture, databases, DevOps, AI, and developer tooling.",
   keywords: [
      "Anand Dubey Blog",
      "software engineering blog",
      "systems programming",
      "backend engineering",
      "frontend engineering",
      "database internals",
      "DevOps",
      "AI engineering",
      "Rust programming",
      "Next.js",
      "Go",
      "Python",
      "TypeScript",
   ],
   alternates: { canonical: "https://ananddub.dev/blog" },
   openGraph: {
      type: "website",
      url: "https://ananddub.dev/blog",
      title: "Blog — Anand Dubey",
      description:
         "Detailed, practical writing about software architecture, systems, web engineering, databases, AI, and developer tools.",
      siteName: "Anand Dubey Portfolio",
      images: [
         { url: "https://ananddub.dev/logo.png", width: 1200, height: 630 },
      ],
   },
   twitter: {
      card: "summary_large_image",
      site: "@ananddub",
      creator: "@ananddub",
      title: "Blog — Anand Dubey",
      description:
         "Detailed, practical writing about software architecture, systems, web engineering, databases, AI, and developer tools.",
   },
};

const structuredData = {
   "@context": "https://schema.org",
   "@type": "Blog",
   "@id": "https://ananddub.dev/blog#blog",
   name: "Anand Dubey's Blog",
   description:
      "A growing library of practical software engineering articles across languages, platforms, and technical disciplines.",
   url: "https://ananddub.dev/blog",
   author: {
      "@type": "Person",
      name: "Anand Dubey",
      url: "https://ananddub.dev",
   },
};

export default function BlogPage() {
   const blogs = getAllBlogs();

   return (
      <>
         <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
         />
         <main className="min-h-screen bg-[var(--background)] px-4 py-24 sm:px-8">
            <div className="mx-auto max-w-4xl">
               <div className="mb-10 space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--primary)]">
                     Engineering notes & deep dives
                  </p>
                  <h1 className="text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
                     Learn how software works beneath the surface.
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-[var(--muted-foreground)]">
                     A growing collection of implementation-focused articles
                     about systems, backend and frontend architecture,
                     databases, distributed software, AI, DevOps, and developer
                     tooling. Posts may use Rust, Go, Python, TypeScript,
                     JavaScript, or whichever language best explains the
                     problem.
                  </p>
               </div>

               <BlogList blogs={blogs} />
            </div>
         </main>
      </>
   );
}
