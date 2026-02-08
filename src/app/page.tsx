import Link from "next/link";
import Footer from "@/components/Footer";
import ImageComparisonSlider from "@/components/ImageComparisonSlider";

export default function Home() {
	return (
		<>
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-background-off-white pt-16 pb-20 lg:pt-32 lg:pb-28 dark:bg-background-dark">
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
								<div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-primary dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-300 w-fit">
									<span className="flex size-2 rounded-full bg-primary mr-2"></span>{" "}
									Now Available in Thailand
								</div>
								<div className="inline-flex items-center rounded-full border border-green-100 bg-green-50 px-3 py-1 text-sm font-medium text-green-700 dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-300 w-fit">
									<span className="material-symbols-outlined text-sm mr-1">
										wb_sunny
									</span>{" "}
									Suitable for Tropical Countries
								</div>
							</div>
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
								German Technology,{" "}
								<br className="hidden lg:block" />
								<span className="text-primary">Expertise from Finland</span>
							</h1>
							<p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
								The future of floor restoration. Premium PU Coating that is
								durable, hygienic, and sustainable. Terrazzo Polishing coming soon.
							</p>
							<div className="flex flex-wrap gap-4 pt-2">
								<Link
									className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
									href="/contact"
								>
									Request a Free Quote
								</Link>
								<Link
									className="flex h-12 min-w-[160px] items-center justify-center rounded-lg border border-gray-200 bg-white px-6 text-base font-bold text-gray-700 shadow-sm hover:border-gray-300 hover:bg-gray-50 transition-all dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
									href="/solutions"
								>
									Our Solutions
								</Link>
							</div>
							<div className="flex items-center gap-4 pt-4 text-sm text-gray-500 dark:text-gray-400">
								<div className="flex items-center gap-1">
									<span className="material-symbols-outlined text-green-600 text-[20px]">
										check_circle
									</span>
									<span>Dr. Schutz Certified</span>
								</div>
								<div className="flex items-center gap-1">
									<span className="material-symbols-outlined text-green-600 text-[20px]">
										check_circle
									</span>
									<span>ISO 9001 Standards</span>
								</div>
							</div>
						</div>

						{/* Hero Image - Before/After Comparison Slider */}
						<div className="relative lg:h-[500px] h-[350px] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
							<ImageComparisonSlider
								beforeImage="/renovations/warehouse_before.jpeg"
								afterImage="/renovations/warehouse_after.jpeg"
								beforeLabel="Before"
								afterLabel="After Restoration"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Problem/Solution Section */}
			<section className="py-20 bg-white dark:bg-gray-900">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
							Don&apos;t Replace—Restore
						</h2>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
							Traditional demolition and repainting is costly, messy, and
							time-consuming. Our restoration technology saves you money and
							gets your facility back in operation in hours, not weeks.
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8 text-center">
						<div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary mb-6">
								<span className="material-symbols-outlined text-3xl">
									savings
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
								Save 50% Costs
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Compared to full demolition and re-tiling of commercial spaces.
							</p>
						</div>
						<div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary mb-6">
								<span className="material-symbols-outlined text-3xl">
									timer
								</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
								Save 70% Time
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								No jackhammering. No dust clouds. Minimal downtime for your
								business.
							</p>
						</div>
						<div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
							<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-primary mb-6">
								<span className="material-symbols-outlined text-3xl">eco</span>
							</div>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
								Eco-Friendly
							</h3>
							<p className="text-gray-600 dark:text-gray-300">
								Preserve existing materials and reduce landfill waste
								significantly.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Core Solutions Section */}
			<section
				className="py-20 bg-background-off-white dark:bg-background-dark"
				id="solutions"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
							Our Core Solutions
						</h2>
						<p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
							Specialized treatments for industrial and commercial environments.
						</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{/* Card 1 */}
						<div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800">
							<div className="aspect-video w-full overflow-hidden">
								<img
									alt="Shiny light grey polyurethane coated floor in a clean laboratory setting"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuoKtT9cadsdpweOC0hlZx8fSq9-dmk9pi1f7QH3p6Eq5Uwr7EhZcwXofrDa4kAuFuvQe51HNO9AShwudvrt7ecqLWYHKp80M014UKPB0BlZFbRZN6FiM3yWXAWsVhEcnOugpH6gLPS-r_iDsK_lo_Tuyj2OWBra_QDma2_UY5ZECqHvRt_PI5YxCA2b2qoysuXWdYUaP4n414nh_LNtcXX3yNlxJ3x87q2UFu7x-zZaMN1bcnnDSZKqYNY8hjIeN31Um7_MDsSLIz"
								/>
							</div>
							<div className="p-8">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-primary text-3xl">
										format_paint
									</span>
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
										PU Floor Coating
									</h3>
								</div>
								<p className="text-gray-600 dark:text-gray-300 mb-6">
									Heavy-duty transparent or colored protection designed for
									hospitals, factories, and high-traffic areas. Resistant to
									chemicals and scratches.
								</p>
								<ul className="space-y-2 mb-8">
									<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										Chemical Resistant
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										Anti-slip R10/R11 Certified
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										Hermetic Sealing
									</li>
								</ul>
								<Link
									className="inline-flex items-center text-primary font-bold hover:text-blue-700"
									href="/solutions"
								>
									Learn more{" "}
									<span className="material-symbols-outlined ml-1 text-sm">
										arrow_forward
									</span>
								</Link>
							</div>
						</div>

						{/* Card 2 */}
						<div className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow dark:bg-gray-800">
							{/* Coming Soon Badge */}
							<div className="absolute top-4 right-4 z-10">
								<span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
									<span className="material-symbols-outlined text-sm mr-1">schedule</span>
									Coming Soon
								</span>
							</div>
							<div className="aspect-video w-full overflow-hidden">
								<img
									alt="Close up texture of polished terrazzo flooring with colorful stone chips"
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1p_a2U286cXBwg9SnmBrv-rki1APEUWUFx-lBgz6bTUuGsG2wcLY86JAlgRp_O3ANC2qEnc5S6SEAjfxSfl2rRIyaxSUSNNPfb64HyEjQoALIsLOXnq-lp12Abs0eqiwU9Wfjy709xFYFcWf2J1YPTaFsW9cJnPsPR5HOwclU1BquO7QR_FcslAo5KAgZM0IpHwsPWhHfEPab-yJB_WJ7ulVCHofhD87_mliWF0PhpfCNM2Tz_1NWSWSTbqHUWwCuv3XsmWXQLh8"
								/>
							</div>
							<div className="p-8">
								<div className="flex items-center gap-3 mb-4">
									<span className="material-symbols-outlined text-primary text-3xl">
										auto_awesome
									</span>
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
										Terrazzo Polishing
									</h3>
								</div>
								<p className="text-gray-600 dark:text-gray-300 mb-6">
									Revitalize classic floors to a mirror-finish without using
									waxes. We grind, densify, and polish to bring out the natural
									beauty of the stone.
								</p>
								<ul className="space-y-2 mb-8">
									<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										Diamond Polishing Tech
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										Stain Protection
									</li>
									<li className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
										<span className="material-symbols-outlined text-green-500 text-lg">
											check
										</span>{" "}
										Zero-Wax Maintenance
									</li>
								</ul>
								<Link
									className="inline-flex items-center text-primary font-bold hover:text-blue-700"
									href="/solutions"
								>
									Learn more{" "}
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
			<section className="py-20 bg-white dark:bg-gray-900" id="comparison">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
						<div className="max-w-2xl">
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
								Why PU Coating Wins
							</h2>
							<p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
								See how our German-engineered PU Sealer outperforms traditional
								methods like epoxy and wax in every critical category.
							</p>
						</div>
						<div className="flex-shrink-0">
							<span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-300">
								<span className="material-symbols-outlined mr-2 text-sm">
									verified
								</span>{" "}
								Verified Performance
							</span>
						</div>
					</div>
					<div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
						<table className="w-full text-left text-sm whitespace-nowrap">
							<thead className="bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
								<tr>
									<th className="px-6 py-4 font-bold text-base" scope="col">
										Feature
									</th>
									<th
										className="px-6 py-4 font-bold text-base text-primary"
										scope="col"
									>
										NextGen Floor Solutions PU Sealer
									</th>
									<th
										className="px-6 py-4 font-bold text-base text-gray-500"
										scope="col"
									>
										Standard Epoxy
									</th>
									<th
										className="px-6 py-4 font-bold text-base text-gray-500"
										scope="col"
									>
										Floor Wax
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
										Durability
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">verified</span>{" "}
										Up to 6 Years
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										1-2 Years
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										3-6 Months
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
										Curing Time
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">bolt</span> Fast
										(12 Hours)
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										Slow (3-5 Days)
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										Fast (Hours)
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
										Maintenance
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">
											trending_down
										</span>{" "}
										Ultra Low
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										Medium
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										Very High
									</td>
								</tr>
								<tr>
									<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
										Chemical Resistance
									</td>
									<td className="px-6 py-4 text-primary font-bold flex items-center gap-2">
										<span className="material-symbols-outlined">science</span>{" "}
										Excellent
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										Good
									</td>
									<td className="px-6 py-4 text-gray-600 dark:text-gray-400">
										Poor
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* PU vs Epoxy Comparison */}
			<section
				className="py-20 bg-background-off-white dark:bg-background-dark"
				id="pu-vs-epoxy"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
							PU Coating vs Epoxy Coating — What&apos;s the Difference?
						</h2>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							Epoxy coating is known for its hardness and chemical resistance,
							which is why it&apos;s often used in industrial environments. But
							hardness also brings challenges: epoxy is rigid and can crack
							under impact, it yellows under UV light, and most importantly —{" "}
							<strong>epoxy has a long curing time</strong>. This often means
							several days of downtime.
						</p>
						<p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
							PU coating, on the other hand, offers a flexible, comfortable, and
							durable surface that <strong>cures quickly</strong>. PU can be
							installed in sections, allowing the floor to be coated without
							major interruptions.
						</p>
					</div>

					{/* Comparison Grid */}
					<div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{/* PU Coating Column */}
						<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border-2 border-primary">
							<div className="flex items-center gap-3 mb-8">
								<div className="flex size-12 items-center justify-center rounded-full bg-primary text-white">
									<span className="material-symbols-outlined text-2xl">
										format_paint
									</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
									PU Coating
								</h3>
							</div>
							<ul className="space-y-4">
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Excellent wear resistance</strong>
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Good flexibility</strong> and comfortable to walk on
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Good chemical resistance</strong>, enough for most
										environments
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Does not yellow</strong> under sunlight
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Quickly ready for use</strong>, can be applied in
										sections
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Stylish matte or glossy</strong> finish
									</span>
								</li>
							</ul>
						</div>

						{/* Epoxy Coating Column */}
						<div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
							<div className="flex items-center gap-3 mb-8">
								<div className="flex size-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
									<span className="material-symbols-outlined text-2xl">
										layers
									</span>
								</div>
								<h3 className="text-2xl font-bold text-gray-900 dark:text-white">
									Epoxy Coating
								</h3>
							</div>
							<ul className="space-y-4">
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-red-500 text-white font-bold text-lg">
										✗
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										Extremely hard but <strong>can be brittle</strong> under
										impact
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-red-500 text-white font-bold text-lg">
										✗
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Rigid and inflexible</strong>
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Excellent chemical resistance</strong>
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-red-500 text-white font-bold text-lg">
										✗
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Can yellow</strong> under UV exposure
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-red-500 text-white font-bold text-lg">
										✗
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Long curing time</strong>, causes downtime
									</span>
								</li>
								<li className="flex items-start gap-3">
									<span className="flex-shrink-0 flex size-7 items-center justify-center rounded bg-primary text-white font-bold text-lg">
										✓
									</span>
									<span className="text-gray-700 dark:text-gray-300">
										<strong>Glossy and smooth</strong> finish
									</span>
								</li>
							</ul>
						</div>
					</div>

					{/* CTA */}
					<div className="mt-12 text-center">
						<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
							Ready to upgrade from traditional epoxy to modern PU technology?
						</p>
						<Link
							className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
							href="/contact"
						>
							Get a Free Consultation
						</Link>
					</div>
				</div>
			</section>

			{/* Sustainability Section */}
			<section
				className="py-20 bg-primary/5 dark:bg-background-dark border-y border-gray-200 dark:border-gray-800"
				id="sustainability"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
								Sustainable &amp; Safe
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
								We prioritize the environment and the health of your
								building&apos;s occupants. Our water-based solutions are low-VOC
								and reduce water consumption significantly.
							</p>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="flex items-start gap-4">
									<div className="p-2 bg-white rounded-lg shadow-sm text-primary dark:bg-gray-800">
										<span className="material-symbols-outlined">
											water_drop
										</span>
									</div>
									<div>
										<h4 className="font-bold text-gray-900 dark:text-white">
											80% Water Savings
										</h4>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											Reduced cleaning water usage over floor lifespan.
										</p>
									</div>
								</div>
								<div className="flex items-start gap-4">
									<div className="p-2 bg-white rounded-lg shadow-sm text-primary dark:bg-gray-800">
										<span className="material-symbols-outlined">sanitizer</span>
									</div>
									<div>
										<h4 className="font-bold text-gray-900 dark:text-white">
											Antimicrobial
										</h4>
										<p className="text-sm text-gray-600 dark:text-gray-400">
											Seamless surface prevents bacterial growth.
										</p>
									</div>
								</div>
							</div>
							<div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700">
								<p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
									Trusted By Leaders
								</p>
								<div className="flex flex-wrap items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
									<div className="flex items-center gap-2 font-bold text-xl text-gray-800 dark:text-gray-300">
										<span className="material-symbols-outlined">shield</span>{" "}
										Dr. Schutz
									</div>
									<div className="flex items-center gap-2 font-bold text-xl text-gray-800 dark:text-gray-300">
										<span className="material-symbols-outlined">
											workspace_premium
										</span>{" "}
										ISO 9001
									</div>
									<div className="flex items-center gap-2 font-bold text-xl text-gray-800 dark:text-gray-300">
										<span className="material-symbols-outlined">security</span>{" "}
										DIN Standards
									</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-4">
								<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700 h-40 flex flex-col justify-center items-center text-center">
									<span className="text-4xl font-black text-primary mb-2">
										20+
									</span>
									<span className="text-sm font-medium text-gray-600 dark:text-gray-300">
										Years Experience
									</span>
								</div>
								<div className="bg-primary p-6 rounded-2xl shadow-sm h-48 flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
									<div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
									<span className="material-symbols-outlined text-4xl mb-2 relative z-10">
										school
									</span>
									<span className="text-sm font-medium relative z-10">
										German-Trained Teams
									</span>
								</div>
							</div>
							<div className="space-y-4 pt-8">
								<div className="bg-gray-900 p-6 rounded-2xl shadow-sm h-48 flex flex-col justify-center items-center text-center text-white">
									<span className="material-symbols-outlined text-4xl mb-2 text-secondary">
										engineering
									</span>
									<span className="text-sm font-medium">
										Expertise from Finland
									</span>
								</div>
								<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700 h-40 flex flex-col justify-center items-center text-center">
									<span className="text-4xl font-black text-primary mb-2">
										10k+
									</span>
									<span className="text-sm font-medium text-gray-600 dark:text-gray-300">
										Sqm Restored
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
