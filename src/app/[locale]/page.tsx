import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Footer from "@/components/Footer";
import ImageComparisonSlider from "@/components/ImageComparisonSlider";
import BeforeAfterCarousel from "@/components/BeforeAfterCarousel";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "home" });
	return {
		title: t("meta_title"),
		description: t("meta_description"),
		alternates: {
			languages: { en: "/en", th: "/th" },
		},
	};
}

export default function Home() {
	const t = useTranslations("home");
	return (
		<>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-background-off-white pt-16 pb-20 lg:pt-32 lg:pb-28">
				<div
					className="absolute inset-0 z-0 opacity-10"
					style={{
						backgroundImage:
							"radial-gradient(#006ec2 1px, transparent 1px)",
						backgroundSize: "32px 32px",
					}}
				></div>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
						<div className="flex flex-col gap-6 max-w-2xl">
							<div className="flex flex-wrap gap-2 mb-2">
								<div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-primary w-fit">
									<span className="flex size-2 rounded-full bg-primary mr-2"></span>{" "}
									{t("hero_badge_available")}
								</div>
								<div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 w-fit">
									<span className="material-symbols-outlined text-sm mr-1">
										wb_sunny
									</span>{" "}
									{t("hero_badge_tropical")}
								</div>
							</div>
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
								{t("hero_title_line1")}{" "}
								<br className="hidden lg:block" />
								<span className="text-primary">{t("hero_title_line2")}</span>
							</h1>
							<p className="text-lg text-gray-600 max-w-lg leading-relaxed">
								{t("hero_description")}
							</p>
							<div className="flex flex-wrap gap-4 pt-2">
								<Link
									className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
									href="/contact"
								>
									{t("hero_cta_quote")}
								</Link>
								<Link
									className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all"
									href="/solutions"
								>
									{t("hero_cta_solutions")}
								</Link>
							</div>
							<div className="flex items-center gap-4 pt-4 text-sm text-gray-500">
								<div className="flex items-center gap-1">
									<span className="material-symbols-outlined text-green-600 text-[20px]">
										check_circle
									</span>
									<span>{t("hero_cert_schutz")}</span>
								</div>
								<div className="flex items-center gap-1">
									<span className="material-symbols-outlined text-green-600 text-[20px]">
										check_circle
									</span>
									<span>{t("hero_cert_iso")}</span>
								</div>
							</div>
						</div>

						{/* Hero Image - Before/After Comparison Slider */}
						<div className="relative lg:h-[500px] h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
							<ImageComparisonSlider
								beforeImage="/renovations/warehouse_before.jpeg"
								afterImage="/renovations/warehouse_after.jpeg"
								beforeLabel={t("hero_before")}
								afterLabel={t("hero_after")}
								dragLabel={t("drag_to_compare")}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Problem/Solution Section */}
			<section className="py-20 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							{t("problem_title")}
						</h2>
						<p className="mt-4 text-lg text-gray-600">
							{t("problem_description")}
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary mb-6">
								<span className="material-symbols-outlined text-3xl">
									savings
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{t("problem_cost_title")}
							</h3>
							<p className="text-gray-600">
								{t("problem_cost_desc")}
							</p>
						</div>
						<div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary mb-6">
								<span className="material-symbols-outlined text-3xl">
									timer
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{t("problem_time_title")}
							</h3>
							<p className="text-gray-600">
								{t("problem_time_desc")}
							</p>
						</div>
						<div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary mb-6">
								<span className="material-symbols-outlined text-3xl">eco</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{t("problem_eco_title")}
							</h3>
							<p className="text-gray-600">
								{t("problem_eco_desc")}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Project Gallery Section */}
			<section className="py-20 bg-background-off-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							{t("gallery_title")}
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
							{t("gallery_description")}
						</p>
					</div>
					<BeforeAfterCarousel />
				</div>
			</section>

			{/* Core Solutions Section */}
			<section
				className="py-20 bg-white"
				id="solutions"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900">
							{t("solutions_title")}
						</h2>
						<p className="mt-2 text-lg text-gray-600">
							{t("solutions_description")}
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{/* Card 1 */}
						<div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow">
							<div className="aspect-video w-full overflow-hidden">
								<img
									alt="Shiny light grey polyurethane coated floor in a clean laboratory setting"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuoKtT9cadsdpweOC0hlZx8fSq9-dmk9pi1f7QH3p6Eq5Uwr7EhZcwXofrDa4kAuFuvQe51HNO9AShwudvrt7ecqLWYHKp80M014UKPB0BlZFbRZN6FiM3yWXAWsVhEcnOugpH6gLPS-r_iDsK_lo_Tuyj2OWBra_QDma2_UY5ZECqHvRt_PI5YxCA2b2qoysuXWdYUaP4n414nh_LNtcXX3yNlxJ3x87q2UFu7x-zZaMN1bcnnDSZKqYNY8hjIeN31Um7_MDsSLIz"
									width={800}
									height={450}
									loading="lazy"
								/>
							</div>
							<div className="p-8">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-primary text-3xl">
										format_paint
									</span>
									<h3 className="text-2xl font-bold text-gray-900">
										{t("pu_title")}
									</h3>
								</div>
								<p className="text-gray-600 mb-6">
									{t("pu_description")}
								</p>
								<ul className="space-y-2 mb-8">
									<li className="flex items-center gap-2 text-sm text-gray-600">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										{t("pu_feature_chemical")}
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										{t("pu_feature_antislip")}
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										{t("pu_feature_hermetic")}
									</li>
								</ul>
								<Link
									className="inline-flex items-center text-primary font-bold hover:text-blue-700"
									href="/solutions"
								>
									{t("learn_more")}{" "}
									<span className="material-symbols-outlined ml-1 text-sm">
										arrow_forward
									</span>
								</Link>
							</div>
						</div>

						{/* Card 2 */}
						<div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow">
							{/* Coming Soon Badge */}
							<div className="absolute top-4 right-4 z-10">
								<span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
									<span className="material-symbols-outlined text-sm mr-1">schedule</span>
									{t("terrazzo_coming_soon")}
								</span>
							</div>
							<div className="aspect-video w-full overflow-hidden">
								<img
									alt="Close up texture of polished terrazzo flooring with colorful stone chips"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1p_a2U286cXBwg9SnmBrv-rki1APEUWUFx-lBgz6bTUuGsG2wcLY86JAlgRp_O3ANC2qEnc5S6SEAjfxSfl2rRIyaxSUSNNPfb64HyEjQoALIsLOXnq-lp12Abs0eqiwU9Wfjy709xFYFcWf2J1YPTaFsW9cJnPsPR5HOwclU1BquO7QR_FcslAo5KAgZM0IpHwsPWhHfEPab-yJB_WJ7ulVCHofhD87_mliWF0PhpfCNM2Tz_1NWSWSTbqHUWwCuv3XsmWXQLh8"
									width={800}
									height={450}
									loading="lazy"
								/>
							</div>
							<div className="p-8">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-primary text-3xl">
										auto_awesome
									</span>
									<h3 className="text-2xl font-bold text-gray-900">
										{t("terrazzo_title")}
									</h3>
								</div>
								<p className="text-gray-600 mb-6">
									{t("terrazzo_description")}
								</p>
								<ul className="space-y-2 mb-8">
									<li className="flex items-center gap-2 text-sm text-gray-600">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										{t("terrazzo_feature_diamond")}
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										{t("terrazzo_feature_stain")}
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										{t("terrazzo_feature_wax")}
									</li>
								</ul>
								<Link
									className="inline-flex items-center text-primary font-bold hover:text-blue-700"
									href="/solutions"
								>
									{t("learn_more")}{" "}
									<span className="material-symbols-outlined ml-1 text-sm">
										arrow_forward
									</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Comparison Section */}
			<section className="py-20 bg-white" id="comparison">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
						<div className="max-w-2xl">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900">
								{t("comparison_title")}
							</h2>
							<p className="mt-4 text-lg text-gray-600">
								{t("comparison_description")}
							</p>
						</div>
						<div className="flex-shrink-0">
							<span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
								<span className="material-symbols-outlined mr-2 text-sm">
									verified
								</span>{" "}
								{t("comparison_verified")}
							</span>
						</div>
					</div>
					<div className="overflow-x-auto rounded-xl border border-gray-200">
						<table className="w-full text-left text-sm whitespace-nowrap">
							<thead className="bg-gray-50 text-gray-900">
								<tr>
									<th className="px-6 py-4 font-bold text-base" scope="col">
										{t("table_feature")}
									</th>
									<th
										className="px-6 py-4 font-bold text-base text-primary"
										scope="col"
									>
										{t("table_pu_sealer")}
									</th>
									<th
										className="px-6 py-4 font-bold text-base text-gray-500"
										scope="col"
									>
										{t("table_epoxy")}
									</th>
									<th
										className="px-6 py-4 font-bold text-base text-gray-500"
										scope="col"
									>
										{t("table_wax")}
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900">
										{t("table_durability")}
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">verified</span>{" "}
										{t("table_pu_durability")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_epoxy_durability")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_wax_durability")}
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900">
										{t("table_curing")}
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">bolt</span> {t("table_pu_curing")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_epoxy_curing")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_wax_curing")}
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900">
										{t("table_maintenance")}
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">
											trending_down
										</span>{" "}
										{t("table_pu_maintenance")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_epoxy_maintenance")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_wax_maintenance")}
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900">
										{t("table_chemical")}
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">science</span>{" "}
										{t("table_pu_chemical")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_epoxy_chemical")}
									</td>
									<td className="px-6 py-4 text-gray-600">
										{t("table_wax_chemical")}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* PU vs Epoxy Comparison */}
			<section
				className="py-20 bg-background-off-white"
				id="pu-vs-epoxy"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							{t("puvsepoxy_title")}
						</h2>
						<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
							{t("puvsepoxy_intro1")}
						</p>
						<p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
							{t("puvsepoxy_intro2")}
						</p>
					</div>

					{/* Comparison Grid */}
					<div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{/* PU Coating Column */}
						<div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary">
							<div className="flex items-center gap-3 mb-8">
								<div className="flex size-12 items-center justify-center rounded-full bg-primary text-white">
									<span className="material-symbols-outlined text-2xl">
										format_paint
									</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900">
									{t("puvsepoxy_pu_title")}
								</h3>
							</div>
							<ul className="space-y-4">
								{([1,2,3,4,5,6] as const).map((n) => (
									<li key={n} className="flex items-start gap-3">
										<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
											&#x2713;
										</span>
										<span className="text-gray-700">
											{t(`puvsepoxy_pu_${n}`)}
										</span>
									</li>
								))}
							</ul>
						</div>

						{/* Epoxy Coating Column */}
						<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
							<div className="flex items-center gap-3 mb-8">
								<div className="flex size-12 items-center justify-center rounded-full bg-gray-200 text-gray-600">
									<span className="material-symbols-outlined text-2xl">
										layers
									</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900">
									{t("puvsepoxy_epoxy_title")}
								</h3>
							</div>
							<ul className="space-y-4">
								{([1,2,3,4,5,6] as const).map((n) => {
									const isPositive = n === 3 || n === 6;
									return (
										<li key={n} className="flex items-start gap-3">
											<span className={`flex-shrink-0 flex size-7 items-center justify-center rounded ${isPositive ? "bg-primary" : "bg-red-500"} text-white font-bold text-lg`}>
												{isPositive ? "\u2713" : "\u2717"}
											</span>
											<span className="text-gray-700">
												{t(`puvsepoxy_epoxy_${n}`)}
											</span>
										</li>
									);
								})}
							</ul>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-12 text-center">
						<p className="text-lg text-gray-600 mb-6">
							{t("puvsepoxy_cta")}
						</p>
						<Link
							className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
							href="/contact"
						>
							{t("puvsepoxy_cta_button")}
						</Link>
					</div>
				</div>
			</section>

			{/* Sustainability Section */}
			<section
				className="py-20 bg-primary/5 border-y border-gray-200"
				id="sustainability"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
								{t("sustainability_title")}
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								{t("sustainability_description")}
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="flex items-start gap-4">
									<div className="p-2 bg-white rounded-lg shadow-sm text-primary">
										<span className="material-symbols-outlined">
											water_drop
										</span>
									</div>
									<div>
										<h4 className="font-bold text-gray-900">
											{t("sustainability_water_title")}
										</h4>
										<p className="text-sm text-gray-600">
											{t("sustainability_water_desc")}
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="p-2 bg-white rounded-lg shadow-sm text-primary">
										<span className="material-symbols-outlined">sanitizer</span>
									</div>
									<div>
										<h4 className="font-bold text-gray-900">
											{t("sustainability_antimicrobial_title")}
										</h4>
										<p className="text-sm text-gray-600">
											{t("sustainability_antimicrobial_desc")}
										</p>
									</div>
								</div>
							</div>
							<div className="mt-10 pt-10 border-t border-gray-200">
								<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
									{t("sustainability_trusted")}
								</p>
								<div className="flex flex-wrap items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
									<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
										<span className="material-symbols-outlined">shield</span>{" "}
										Dr. Schutz
									</div>
									<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
										<span className="material-symbols-outlined">
											workspace_premium
										</span>{" "}
										ISO 9001
									</div>
									<div className="flex items-center gap-2 font-bold text-xl text-gray-800">
										<span className="material-symbols-outlined">security</span>{" "}
										DIN Standards
									</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-40 flex flex-col justify-center items-center text-center">
									<span className="text-4xl font-black text-primary mb-2">
										20+
									</span>
									<span className="text-sm font-medium text-gray-600">
										{t("sustainability_years")}
									</span>
								</div>
								<div className="bg-primary p-6 rounded-2xl shadow-sm h-48 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
									<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
									<span className="material-symbols-outlined text-4xl mb-2 relative z-10">
										school
									</span>
									<span className="text-sm font-medium relative z-10">
										{t("sustainability_german_teams")}
									</span>
								</div>
							</div>
							<div className="space-y-4 pt-8">
								<div className="bg-gray-900 p-6 rounded-2xl shadow-sm h-48 flex flex-col justify-center items-center text-center text-white">
									<span className="material-symbols-outlined text-4xl mb-2 text-secondary">
										engineering
									</span>
									<span className="text-sm font-medium">
										{t("sustainability_finland")}
									</span>
								</div>
								<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-40 flex flex-col justify-center items-center text-center">
									<span className="text-4xl font-black text-primary mb-2">
										10k+
									</span>
									<span className="text-sm font-medium text-gray-600">
										{t("sustainability_sqm")}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
