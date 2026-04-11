import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "privacy" });
	return {
		title: t("meta_title"),
		description: t("meta_description"),
		alternates: {
			languages: { en: "/en/privacy", th: "/th/privacy", "x-default": "/th/privacy" },
		},
	};
}

export default function PrivacyPage() {
	const t = useTranslations("privacy");
	return (
		<>
			<SchemaMarkup
				data={{
					"@context": "https://schema.org",
					"@type": "BreadcrumbList",
					itemListElement: [
						{
							"@type": "ListItem",
							position: 1,
							name: "Home",
							item: "https://nextgenfloors.co.th",
						},
						{
							"@type": "ListItem",
							position: 2,
							name: "Privacy Policy",
							item: "https://nextgenfloors.co.th/en/privacy",
						},
					],
				}}
			/>

			{/* Hero */}
			<section className="relative bg-gradient-to-br from-primary to-blue-900 py-20 flex items-center justify-center">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
						{t("hero_title")}
					</h1>
					<p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
						{t("hero_description")}
					</p>
				</div>
			</section>

			{/* Content */}
			<section className="py-16 bg-white">
				<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
					<p className="text-sm text-gray-500 mb-2">{t("effective_date")}</p>
					<p className="text-gray-700 mb-8 leading-relaxed">{t("intro")}</p>

					{/* Section 1 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section1_title")}</h2>
					<p className="text-gray-700 mb-4">{t("section1_content")}</p>
					<div className="bg-gray-50 rounded-lg p-4 mb-4 text-sm text-gray-700 space-y-1">
						<p>{t("section1_address")}</p>
						<p>{t("section1_email")}</p>
						<p>{t("section1_phone")}</p>
					</div>

					{/* Section 2 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section2_title")}</h2>
					<p className="text-gray-700 mb-3">{t("section2_intro")}</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
						<li>{t("section2_item1")}</li>
						<li>{t("section2_item2")}</li>
						<li>{t("section2_item3")}</li>
					</ul>
					<p className="text-gray-700 font-medium mb-2">{t("section2_types_title")}</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
						<li>{t("section2_type1")}</li>
						<li>{t("section2_type2")}</li>
						<li>{t("section2_type3")}</li>
						<li>{t("section2_type4")}</li>
						<li>{t("section2_type5")}</li>
					</ul>

					{/* Section 3 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section3_title")}</h2>
					<p className="text-gray-700 mb-3">{t("section3_intro")}</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
						<li>{t("section3_item1")}</li>
						<li>{t("section3_item2")}</li>
						<li>{t("section3_item3")}</li>
						<li>{t("section3_item4")}</li>
						<li>{t("section3_item5")}</li>
					</ul>
					<p className="text-gray-600 text-sm italic">{t("section3_basis")}</p>

					{/* Section 4 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section4_title")}</h2>
					<p className="text-gray-700 mb-3">{t("section4_intro")}</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-1 mb-4">
						<li>{t("section4_item1")}</li>
						<li>{t("section4_item2")}</li>
						<li>{t("section4_item3")}</li>
					</ul>
					<p className="text-gray-700">{t("section4_transfer")}</p>

					{/* Section 5 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section5_title")}</h2>
					<p className="text-gray-700">{t("section5_content")}</p>

					{/* Section 6 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section6_title")}</h2>
					<p className="text-gray-700 mb-3">{t("section6_intro")}</p>
					<ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
						<li>{t("section6_right1")}</li>
						<li>{t("section6_right2")}</li>
						<li>{t("section6_right3")}</li>
						<li>{t("section6_right4")}</li>
						<li>{t("section6_right5")}</li>
						<li>{t("section6_right6")}</li>
						<li>{t("section6_right7")}</li>
					</ul>
					<p className="text-gray-700">{t("section6_exercise")}</p>

					{/* Section 7 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section7_title")}</h2>
					<p className="text-gray-700">{t("section7_content")}</p>

					{/* Section 8 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section8_title")}</h2>
					<p className="text-gray-700">{t("section8_content")}</p>

					{/* Section 9 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section9_title")}</h2>
					<p className="text-gray-700">{t("section9_content")}</p>

					{/* Section 10 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section10_title")}</h2>
					<p className="text-gray-700">{t("section10_content")}</p>

					{/* Section 11 */}
					<h2 className="text-xl font-bold text-gray-900 mt-10 mb-4">{t("section11_title")}</h2>
					<p className="text-gray-700 mb-4">{t("section11_content")}</p>
					<div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700 space-y-1">
						<p>{t("section1_address")}</p>
						<p>{t("section1_email")}</p>
						<p>{t("section1_phone")}</p>
					</div>

					<p className="text-sm text-gray-500 mt-10 pt-6 border-t border-gray-200">{t("last_updated")}</p>
				</div>
			</section>

			<Footer />
		</>
	);
}
