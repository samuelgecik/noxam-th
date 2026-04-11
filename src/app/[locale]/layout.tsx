import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import SchemaMarkup from "@/components/SchemaMarkup";

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "home" });

	return {
		metadataBase: new URL("https://nextgenfloors.co.th"),
		title: t("meta_title"),
		description: t("meta_description"),
		alternates: {
			canonical: `/${locale}`,
			languages: {
				en: "/en",
				th: "/th",
				"x-default": "/th",
			},
		},
	};
}

export default async function LocaleLayout({ children, params }: Props) {
	const { locale } = await params;

	if (!routing.locales.includes(locale as "en" | "th")) {
		notFound();
	}

	return (
		<html lang={locale}>
			<head>
				<link rel="icon" href="/favicon.png" type="image/png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className="bg-background-light text-accent font-display antialiased">
				<SchemaMarkup
					data={{
						"@context": "https://schema.org",
						"@type": "WebSite",
						"@id": "https://nextgenfloors.co.th/#website",
						name: "NextGen Floor Solutions Thailand",
						url: "https://nextgenfloors.co.th",
						inLanguage: ["th", "en"],
						description:
							"Premium floor restoration services in Thailand. German technology, expertise from Finland.",
						publisher: {
							"@id": "https://nextgenfloors.co.th/#organization",
						},
					}}
				/>
				<SchemaMarkup
					data={{
						"@context": "https://schema.org",
						"@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
						"@id": "https://nextgenfloors.co.th/#localbusiness",
						name: "NextGen Floor Solutions Thailand",
						description:
							"Premium floor restoration services in Thailand. PU Floor Coating, Terrazzo Polishing, and Functional Additives for industrial and commercial environments.",
						url: "https://nextgenfloors.co.th",
						telephone: "+66957200812",
						email: "sales@nextgenfloors.co.th",
						logo: "https://nextgenfloors.co.th/logo.png",
						image: "https://nextgenfloors.co.th/logo.png",
						address: {
							"@type": "PostalAddress",
							streetAddress: "999/4 Moo 12",
							addressLocality: "Nong Prue, BangLamung",
							addressRegion: "Chonburi",
							postalCode: "20150",
							addressCountry: "TH",
						},
						geo: {
							"@type": "GeoCoordinates",
							latitude: 12.9378,
							longitude: 100.8841,
						},
						openingHoursSpecification: [
							{
								"@type": "OpeningHoursSpecification",
								dayOfWeek: [
									"Monday",
									"Tuesday",
									"Wednesday",
									"Thursday",
									"Friday",
								],
								opens: "08:00",
								closes: "18:00",
							},
							{
								"@type": "OpeningHoursSpecification",
								dayOfWeek: ["Saturday"],
								opens: "09:00",
								closes: "15:00",
							},
						],
						contactPoint: {
							"@type": "ContactPoint",
							telephone: "+66957200812",
							contactType: "sales",
							email: "sales@nextgenfloors.co.th",
							availableLanguage: ["Thai", "English"],
						},
						areaServed: {
							"@type": "Country",
							name: "Thailand",
						},
						sameAs: [
							"https://wa.me/66957200812",
							"https://line.me/R/ti/p/@nextgenfloors",
						],
					}}
				/>
				<NextIntlClientProvider>
					<Header />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
