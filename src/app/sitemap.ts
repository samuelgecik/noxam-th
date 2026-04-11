import type { MetadataRoute } from "next";

const BASE_URL = "https://nextgenfloors.co.th";

const pages = [
	{ path: "", priority: 1.0, changeFrequency: "weekly" as const },
	{ path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
	{ path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
	{ path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
	{ path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
	return pages.flatMap((page) => [
		{
			url: `${BASE_URL}/th${page.path}`,
			lastModified: new Date(),
			changeFrequency: page.changeFrequency,
			priority: page.priority,
			alternates: {
				languages: {
					th: `${BASE_URL}/th${page.path}`,
					en: `${BASE_URL}/en${page.path}`,
				},
			},
		},
		{
			url: `${BASE_URL}/en${page.path}`,
			lastModified: new Date(),
			changeFrequency: page.changeFrequency,
			priority: page.priority,
			alternates: {
				languages: {
					th: `${BASE_URL}/th${page.path}`,
					en: `${BASE_URL}/en${page.path}`,
				},
			},
		},
	]);
}
