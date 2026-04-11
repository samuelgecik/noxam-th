import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
			{
				userAgent: [
					"CCBot",
					"Bytespider",
					"meta-externalagent",
				],
				disallow: "/",
			},
		],
		sitemap: "https://nextgenfloors.co.th/sitemap.xml",
	};
}
