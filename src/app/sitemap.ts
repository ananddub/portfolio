import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
	const blogs = getAllBlogs();

	const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
		url: `https://ananddub.dev/blog/${blog.slug}`,
		lastModified: new Date(blog.updated ?? blog.date),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [
		{
			url: "https://ananddub.dev",
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: "https://ananddub.dev/projects",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: "https://ananddub.dev/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		...blogEntries,
	];
}
