import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "solutions" });
	return {
		title: t("meta_title"),
		description: t("meta_description"),
		alternates: {
			languages: { en: "/en/solutions", th: "/th/solutions" },
		},
	};
}

export default function SolutionsPage() {
	const t = useTranslations("solutions");
	return (
		<>
			<SchemaMarkup
				data={[
					{
						"@context": "https://schema.org",
						"@type": "Service",
						"@id": "https://nextgenfloors.co.th/#service-pu-coating",
						name: "PU Floor Coating",
						description:
							"Heavy-duty polyurethane floor protection for hospitals, factories, and high-traffic areas. Chemical resistant, anti-slip R10/R11 certified, Dr. Schutz certified application. Up to 6-year durability, walkable within 12 hours.",
						provider: {
							"@id": "https://nextgenfloors.co.th/#localbusiness",
						},
						areaServed: { "@type": "Country", name: "Thailand" },
						serviceType: "Floor Coating",
					},
					{
						"@context": "https://schema.org",
						"@type": "Service",
						"@id": "https://nextgenfloors.co.th/#service-terrazzo",
						name: "Terrazzo Floor Polishing",
						description:
							"Sustainable diamond polishing to restore natural stone terrazzo floors to a mirror finish without waxes. Zero-wax maintenance after treatment.",
						provider: {
							"@id": "https://nextgenfloors.co.th/#localbusiness",
						},
						areaServed: { "@type": "Country", name: "Thailand" },
						serviceType: "Floor Polishing",
					},
					{
						"@context": "https://schema.org",
						"@type": "Service",
						"@id": "https://nextgenfloors.co.th/#service-additives",
						name: "Functional Floor Additives",
						description:
							"Specialized protective additives including antimicrobial (VIR-O-BAC), anti-slip (SLIPNOMORE), and ESD electrostatic discharge protection for floor coatings.",
						provider: {
							"@id": "https://nextgenfloors.co.th/#localbusiness",
						},
						areaServed: { "@type": "Country", name: "Thailand" },
						serviceType: "Floor Treatment",
					},
				]}
			/>
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
							name: "Solutions",
							item: "https://nextgenfloors.co.th/en/solutions",
						},
					],
				}}
			/>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-background-dark min-h-[400px] max-h-[400px] flex items-center justify-center">
				<div className="absolute inset-0 z-0 opacity-40">
					<img
						alt="Industrial floor background"
						className="h-full w-full object-cover grayscale mix-blend-multiply"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwIwgIqSTJuvb6bJWRE_kyg3Qsdy1pLPXVptjpOzmwcn2XPDqwn2JO7EYIaELNTHed8Z9-cr_cIUs1ijUUHNRDpoOUKybJXNIzty7p_4Tz04qZE8mP8SRY6k1hOIUqu00HkEM-wbo4cR728WDbi6GmPuwYFjQ0-UfifG7su78zKIBKMebiFQBDnKCylfY4Pq0_Jtg3MJJQi7HcVQq-apL_PxcvCYvmKrPZ95cpsfJnwlGrctwwomiIn-amhLxXk7ZmTom455OX9vg"
						width={1920}
						height={400}
					/>
				</div>
				<div className="absolute inset-0 z-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent"></div>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
					<div className="max-w-3xl mx-auto">
						<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
							{t("hero_title_1")} <span className="text-primary">{t("hero_title_2")}</span>
						</h1>
						<p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
							{t("hero_description")}
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Link
								className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
								href="/contact"
							>
								{t("hero_cta")}
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section className="py-20 bg-background-off-white" id="services">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-12 text-center max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							{t("services_title")}
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							{t("services_description")}
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						{/* PU Floor Coating */}
						<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
							<div className="h-48 w-full overflow-hidden">
								<img
									alt="PU Floor Coating"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuoKtT9cadsdpweOC0hlZx8fSq9-dmk9pi1f7QH3p6Eq5Uwr7EhZcwXofrDa4kAuFuvQe51HNO9AShwudvrt7ecqLWYHKp80M014UKPB0BlZFbRZN6FiM3yWXAWsVhEcnOugpH6gLPS-r_iDsK_lo_Tuyj2OWBra_QDma2_UY5ZECqHvRt_PI5YxCA2b2qoysuXWdYUaP4n414nh_LNtcXX3yNlxJ3x87q2UFu7x-zZaMN1bcnnDSZKqYNY8hjIeN31Um7_MDsSLIz"
									width={600}
									height={300}
									loading="lazy"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-blue-50 rounded-lg text-primary">
										<span className="material-symbols-outlined">format_paint</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900">{t("pu_title")}</h3>
								</div>
								<p className="text-gray-600 text-sm mb-6">{t("pu_description")}</p>
								<div className="space-y-3 mb-6">
									<div className="flex items-start gap-2 text-sm text-gray-700">
										<span className="material-symbols-outlined text-green-500 text-base mt-0.5">verified_user</span>
										<span>{t("pu_cert")}</span>
									</div>
									<div className="flex items-start gap-2 text-sm text-gray-700">
										<span className="material-symbols-outlined text-primary text-base mt-0.5">autorenew</span>
										<span>{t("pu_lifecycle")}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Terrazzo Polishing */}
						<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
							<div className="absolute top-4 right-4 z-10">
								<span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
									<span className="material-symbols-outlined text-sm mr-1">schedule</span>
									{t("terrazzo_coming_soon")}
								</span>
							</div>
							<div className="h-48 w-full overflow-hidden">
								<img
									alt="Terrazzo Polishing"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1p_a2U286cXBwg9SnmBrv-rki1APEUWUFx-lBgz6bTUuGsG2wcLY86JAlgRp_O3ANC2qEnc5S6SEAjfxSfl2rRIyaxSUSNNPfb64HyEjQoALIsLOXnq-lp12Abs0eqiwU9Wfjy709xFYFcWf2J1YPTaFsW9cJnPsPR5HOwclU1BquO7QR_FcslAo5KAgZM0IpHwsPWhHfEPab-yJB_WJ7ulVCHofhD87_mliWF0PhpfCNM2Tz_1NWSWSTbqHUWwCuv3XsmWXQLh8"
									width={600}
									height={300}
									loading="lazy"
								/>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-blue-50 rounded-lg text-primary">
										<span className="material-symbols-outlined">auto_awesome</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900">{t("terrazzo_title")}</h3>
								</div>
								<p className="text-gray-600 text-sm mb-6">{t("terrazzo_description")}</p>
								<div className="space-y-3 mb-6">
									<div className="flex items-start gap-2 text-sm text-gray-700">
										<span className="material-symbols-outlined text-primary text-base mt-0.5">shutter_speed</span>
										<span>{t("terrazzo_mirror")}</span>
									</div>
									<div className="flex items-start gap-2 text-sm text-gray-700">
										<span className="material-symbols-outlined text-green-500 text-base mt-0.5">block</span>
										<span>{t("terrazzo_no_wax")}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Functional Additives */}
						<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
							<div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center relative">
								<img
									alt="Laboratory science"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKxVYHHq5vXkTrP9pANX-nFvNFY8no4YynNiO1btJP8iBEFOaNC0joo8nbkk6WsJhQv5SYe_gvK5uVaGlKNt4PuH8STCN7iLcdUHjLoOurFWgqZd0b3YZSH6GGfLRwJX_5t0MEmi0QJ7ajPQO2ggMjJhgotHYEiXEmfr8xDQt7FGUNN8rz10Fo2ipqBe9z6sCXq6ZH6U1fAsWI_fTy5mHajzHS8MNesYUEJSL2QQKS8G4_Q_kU0qirW4QZScOa4hYFEtyGIQwtZtH"
									width={600}
									height={300}
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-primary/10"></div>
							</div>
							<div className="p-6">
								<div className="flex items-center gap-3 mb-4">
									<div className="p-2 bg-blue-50 rounded-lg text-primary">
										<span className="material-symbols-outlined">science</span>
									</div>
									<h3 className="text-xl font-bold text-gray-900">{t("additives_title")}</h3>
								</div>
								<p className="text-gray-600 text-sm mb-4">{t("additives_description")}</p>
								<div className="grid grid-cols-1 gap-2">
									<div className="flex items-center gap-2 p-2 rounded bg-gray-50">
										<span className="material-symbols-outlined text-primary text-sm">sanitizer</span>
										<span className="text-xs font-bold text-gray-800">{t("additive_antimicrobial")}</span>
									</div>
									<div className="flex items-center gap-2 p-2 rounded bg-gray-50">
										<span className="material-symbols-outlined text-primary text-sm">directions_walk</span>
										<span className="text-xs font-bold text-gray-800">{t("additive_antislip")}</span>
									</div>
									<div className="flex items-center gap-2 p-2 rounded bg-gray-50">
										<span className="material-symbols-outlined text-primary text-sm">electrical_services</span>
										<span className="text-xs font-bold text-gray-800">{t("additive_esd")}</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why PU Technology */}
			<section className="py-20 bg-white" id="technology">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<div className="mb-8">
								<span className="text-primary font-bold tracking-wider text-sm uppercase">
									{t("technology_label")}
								</span>
								<h2 className="text-3xl font-bold tracking-tight text-gray-900 mt-2">
									{t("technology_title")}
								</h2>
								<p className="mt-4 text-gray-600">
									{t("technology_description")}
								</p>
							</div>
							<div className="space-y-6">
								{([
									{ key: "flexibility", icon: "architecture" },
									{ key: "uv", icon: "wb_sunny" },
									{ key: "curing", icon: "timer" },
								] as const).map((item) => (
									<div key={item.key} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
										<div className="flex-shrink-0 mt-1">
											<div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-primary">
												<span className="material-symbols-outlined">{item.icon}</span>
											</div>
										</div>
										<div>
											<h4 className="text-lg font-bold text-gray-900">
												{t(`tech_${item.key}_title`)}
											</h4>
											<p className="text-sm text-gray-600 mt-1">
												<strong className="text-primary">{t(`tech_${item.key}_pu`).split(":")[0]}:</strong>{t(`tech_${item.key}_pu`).substring(t(`tech_${item.key}_pu`).indexOf(":") + 1)}
											</p>
											<p className="text-sm text-gray-500 mt-1">
												<span className="line-through">{t(`tech_${item.key}_epoxy`).split(":")[0]}:</span>{t(`tech_${item.key}_epoxy`).substring(t(`tech_${item.key}_epoxy`).indexOf(":") + 1)}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="bg-primary rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center h-full min-h-[400px]">
							<div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 z-0"></div>
							<div
								className="absolute inset-0 opacity-10"
								style={{
									backgroundImage:
										"url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
								}}
							></div>
							<div className="relative z-10">
								<div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6 ring-2 ring-white/30">
									<span className="material-symbols-outlined text-6xl">water_drop</span>
								</div>
								<h3 className="text-4xl md:text-5xl font-extrabold mb-4">{t("water_savings")}</h3>
								<p className="text-xl md:text-2xl font-medium mb-6">{t("water_savings_title")}</p>
								<p className="text-blue-100 max-w-sm mx-auto leading-relaxed">
									{t("water_savings_desc")}
								</p>
								<div className="mt-8 pt-8 border-t border-white/20 w-full">
									<div className="flex justify-center gap-6 text-sm font-semibold opacity-90">
										<span className="flex items-center gap-1">
											<span className="material-symbols-outlined text-lg">eco</span>{" "}
											{t("low_voc")}
										</span>
										<span className="flex items-center gap-1">
											<span className="material-symbols-outlined text-lg">recycling</span>{" "}
											{t("no_landfill")}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Sectors Section */}
			<section className="py-20 bg-background-off-white" id="sectors">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							{t("sectors_title")}
						</h2>
						<p className="mt-2 text-lg text-gray-600">
							{t("sectors_description")}
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{([
							{
								key: "industrial",
								icon: "factory",
								img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4q-zWO56bEUhBNKljCVrGBV-7A9bmBYOdsN5Qko_VKlYnJwz4EJnwF9aOZiOEx5oXL-FUHdz6Sl1vXZsQUWPTk2OO5qO2QWbnPUljG2Qfm_E2aYGSWCGu1bQx80-ncTC0G6ZEggrH5zKxMEEwgrxxJCysHYlSrVbzVsrtEc-o8s3UJwTwYBZLNlYYqI-CCQOQqMG8L20p5gb85C6c52-aAT1Rsh26h5lufYzuT2kv_s9Ho9TOQA94NooNMSsWoMAK1UXNB7soa8Wz",
							},
							{
								key: "healthcare",
								icon: "medical_services",
								img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmZsc5-4iJkcUtlqsRsFEzC1STz8AoxUPtXK2lDrVPt9QQ_B0e6vLr6F4QvjCHXt4IeX5zjni8CutU9kWGYFUOPkApteKJtQpgWOs7VeBCkF1Jzw662yCE7kjSyWQWt1RSld6dd-tLN_U2S7YKfYlprE-m8r7EJ2zu1b6sHiIFmXcHckXXeAJn1N3i66kj0-uhsS1y5-ySJEmLW5OQOTOheto5SiZgJmDNELEv8jxngHSLhlSYQCTB9Avx1hnNzLqSIPWid83c6OTy",
							},
							{
								key: "commercial",
								icon: "storefront",
								img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqJmRxFDfHDcVubMXjjEeISjHNSp5iHGcglgvO5L0-ZPMX_MGm7N1vwUhGAJvxAr22b88psk1E01JhM2E070UyP1X_TE6S8sAQxL339IZCJnmYG7bImR5MdboT1zKQAMpUIh8YCXMvgX_zssRCtkVdsnc4XPifinEa5x7O5fKGPZ__c082QEWPqRvC5Gu0MUEpgc0IqtTsSWb8_ySESpjXASXJtq9WtxmIa2BVBUN0iP5bUeYvuBzbjplXxOGS19RRP_JV8viXblOw",
							},
						] as const).map((sector) => (
							<div key={sector.key} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
								<img
									alt={t(`sector_${sector.key}_title`)}
									className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
									src={sector.img}
									width={600}
									height={400}
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
								<div className="absolute bottom-0 left-0 p-8 w-full">
									<div className="flex items-center gap-2 text-secondary mb-2">
										<span className="material-symbols-outlined">{sector.icon}</span>
										<span className="text-sm font-bold uppercase tracking-wider">
											{t(`sector_${sector.key}`)}
										</span>
									</div>
									<h3 className="text-2xl font-bold text-white mb-2">
										{t(`sector_${sector.key}_title`)}
									</h3>
									<p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
										{t(`sector_${sector.key}_desc`)}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
