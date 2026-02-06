import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Solutions | NextGen Floor Solutions Thailand",
    description:
        "Advanced floor restoration systems including PU Floor Coating, Terrazzo Polishing, and Functional Additives for industrial and commercial environments.",
};

export default function SolutionsPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background-dark pt-20 pb-20 lg:pt-32 lg:pb-32">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        alt="Industrial floor background"
                        className="h-full w-full object-cover grayscale mix-blend-multiply"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwIwgIqSTJuvb6bJWRE_kyg3Qsdy1pLPXVptjpOzmwcn2XPDqwn2JO7EYIaELNTHed8Z9-cr_cIUs1ijUUHNRDpoOUKybJXNIzty7p_4Tz04qZE8mP8SRY6k1hOIUqu00HkEM-wbo4cR728WDbi6GmPuwYFjQ0-UfifG7su78zKIBKMebiFQBDnKCylfY4Pq0_Jtg3MJJQi7HcVQq-apL_PxcvCYvmKrPZ95cpsfJnwlGrctwwomiIn-amhLxXk7ZmTom455OX9vg"
                    />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-background-dark via-background-dark/90 to-transparent"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
                            Innovative <span className="text-primary">Floor Solutions</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed mb-8">
                            Advanced restoration systems for modern environments. From
                            high-performance PU coatings to sustainable terrazzo polishing.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all hover:shadow-lg"
                                href="/contact"
                            >
                                Get a Solution
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section
                className="py-20 bg-background-off-white dark:bg-background-dark"
                id="services"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Our Services
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Comprehensive floor care engineered for longevity and performance.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* PU Floor Coating */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    alt="PU Floor Coating"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuoKtT9cadsdpweOC0hlZx8fSq9-dmk9pi1f7QH3p6Eq5Uwr7EhZcwXofrDa4kAuFuvQe51HNO9AShwudvrt7ecqLWYHKp80M014UKPB0BlZFbRZN6FiM3yWXAWsVhEcnOugpH6gLPS-r_iDsK_lo_Tuyj2OWBra_QDma2_UY5ZECqHvRt_PI5YxCA2b2qoysuXWdYUaP4n414nh_LNtcXX3yNlxJ3x87q2UFu7x-zZaMN1bcnnDSZKqYNY8hjIeN31Um7_MDsSLIz"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">
                                            format_paint
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        PU Floor Coating
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    Complete surface renewal without removal. High-performance
                                    sealer system.
                                </p>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-green-500 text-base mt-0.5">
                                            verified_user
                                        </span>
                                        <span>
                                            <strong>Dr. Schutz Certified</strong> Application
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-base mt-0.5">
                                            autorenew
                                        </span>
                                        <span>Life-cycle extension &amp; renovation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terrazzo Polishing */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    alt="Terrazzo Polishing"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1p_a2U286cXBwg9SnmBrv-rki1APEUWUFx-lBgz6bTUuGsG2wcLY86JAlgRp_O3ANC2qEnc5S6SEAjfxSfl2rRIyaxSUSNNPfb64HyEjQoALIsLOXnq-lp12Abs0eqiwU9Wfjy709xFYFcWf2J1YPTaFsW9cJnPsPR5HOwclU1BquO7QR_FcslAo5KAgZM0IpHwsPWhHfEPab-yJB_WJ7ulVCHofhD87_mliWF0PhpfCNM2Tz_1NWSWSTbqHUWwCuv3XsmWXQLh8"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">
                                            auto_awesome
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Terrazzo Polishing
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                                    Sustainable diamond polishing to restore natural stone
                                    brilliance.
                                </p>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary text-base mt-0.5">
                                            shutter_speed
                                        </span>
                                        <span>
                                            <strong>Mirror-Finish</strong> Restoration
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-green-500 text-base mt-0.5">
                                            block
                                        </span>
                                        <span>No Wax Required</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Functional Additives */}
                        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="h-48 w-full overflow-hidden bg-gray-100 flex items-center justify-center relative">
                                <img
                                    alt="Laboratory science"
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKxVYHHq5vXkTrP9pANX-nFvNFY8no4YynNiO1btJP8iBEFOaNC0joo8nbkk6WsJhQv5SYe_gvK5uVaGlKNt4PuH8STCN7iLcdUHjLoOurFWgqZd0b3YZSH6GGfLRwJX_5t0MEmi0QJ7ajPQO2ggMjJhgotHYEiXEmfr8xDQt7FGUNN8rz10Fo2ipqBe9z6sCXq6ZH6U1fAsWI_fTy5mHajzHS8MNesYUEJSL2QQKS8G4_Q_kU0qirW4QZScOa4hYFEtyGIQwtZtH"
                                />
                                <div className="absolute inset-0 bg-primary/10"></div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">science</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Functional Additives
                                    </h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    Enhance your floor&apos;s capabilities with specialized
                                    protective additives.
                                </p>
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="flex items-center gap-2 p-2 rounded bg-gray-50 dark:bg-gray-700/50">
                                        <span className="material-symbols-outlined text-primary text-sm">
                                            sanitizer
                                        </span>
                                        <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                            Antimicrobial (VIR-O-BAC)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 rounded bg-gray-50 dark:bg-gray-700/50">
                                        <span className="material-symbols-outlined text-primary text-sm">
                                            directions_walk
                                        </span>
                                        <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                            Anti-Slip (SLIPNOMORE)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 rounded bg-gray-50 dark:bg-gray-700/50">
                                        <span className="material-symbols-outlined text-primary text-sm">
                                            electrical_services
                                        </span>
                                        <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                                            ESD Protection
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why PU Technology */}
            <section className="py-20 bg-white dark:bg-gray-900" id="technology">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="mb-8">
                                <span className="text-primary font-bold tracking-wider text-sm uppercase">
                                    Comparative Analysis
                                </span>
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                                    Why PU Technology?
                                </h2>
                                <p className="mt-4 text-gray-600 dark:text-gray-400">
                                    Our PU Sealer outperforms traditional solutions like Epoxy and
                                    Wax in critical industrial applications.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-300">
                                            <span className="material-symbols-outlined">
                                                architecture
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                            Flexibility &amp; Durability
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            <strong className="text-primary">PU:</strong> High
                                            elasticity, resists cracking under stress.
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                            <span className="line-through">Epoxy:</span> Brittle,
                                            prone to cracking.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-300">
                                            <span className="material-symbols-outlined">
                                                wb_sunny
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                            UV Stability
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            <strong className="text-primary">PU:</strong> 100%
                                            Aliphatic. Does not yellow over time.
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                            <span className="line-through">Epoxy:</span> Yellows
                                            significantly with UV exposure.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 text-primary dark:bg-blue-900/30 dark:text-blue-300">
                                            <span className="material-symbols-outlined">timer</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                                            Fast Curing
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                            <strong className="text-primary">PU:</strong> Walkable in
                                            hours, fully cured overnight.
                                        </p>
                                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                                            <span className="line-through">Epoxy:</span> Requires 3-7
                                            days for full cure.
                                        </p>
                                    </div>
                                </div>
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
                                    <span className="material-symbols-outlined text-6xl">
                                        water_drop
                                    </span>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-extrabold mb-4">
                                    80%
                                </h3>
                                <p className="text-xl md:text-2xl font-medium mb-6">
                                    Water Savings
                                </p>
                                <p className="text-blue-100 max-w-sm mx-auto leading-relaxed">
                                    Our sustainable restoration process dramatically reduces water
                                    consumption compared to traditional floor replacement and
                                    maintenance methods.
                                </p>
                                <div className="mt-8 pt-8 border-t border-white/20 w-full">
                                    <div className="flex justify-center gap-6 text-sm font-semibold opacity-90">
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">
                                                eco
                                            </span>{" "}
                                            Low VOC
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-lg">
                                                recycling
                                            </span>{" "}
                                            No Landfill
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors Section */}
            <section
                className="py-20 bg-background-off-white dark:bg-background-dark"
                id="sectors"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Sectors We Serve
                        </h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                            Tailored solutions for specific industry requirements.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
                            <img
                                alt="Industrial warehouse floor"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4q-zWO56bEUhBNKljCVrGBV-7A9bmBYOdsN5Qko_VKlYnJwz4EJnwF9aOZiOEx5oXL-FUHdz6Sl1vXZsQUWPTk2OO5qO2QWbnPUljG2Qfm_E2aYGSWCGu1bQx80-ncTC0G6ZEggrH5zKxMEEwgrxxJCysHYlSrVbzVsrtEc-o8s3UJwTwYBZLNlYYqI-CCQOQqMG8L20p5gb85C6c52-aAT1Rsh26h5lufYzuT2kv_s9Ho9TOQA94NooNMSsWoMAK1UXNB7soa8Wz"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-2 text-secondary mb-2">
                                    <span className="material-symbols-outlined">factory</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">
                                        Industrial
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Manufacturing &amp; Warehousing
                                </h3>
                                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Emphasis on extreme durability and zero downtime. Heavy load
                                    bearing capacity.
                                </p>
                            </div>
                        </div>
                        <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
                            <img
                                alt="Clean hospital corridor"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmZsc5-4iJkcUtlqsRsFEzC1STz8AoxUPtXK2lDrVPt9QQ_B0e6vLr6F4QvjCHXt4IeX5zjni8CutU9kWGYFUOPkApteKJtQpgWOs7VeBCkF1Jzw662yCE7kjSyWQWt1RSld6dd-tLN_U2S7YKfYlprE-m8r7EJ2zu1b6sHiIFmXcHckXXeAJn1N3i66kj0-uhsS1y5-ySJEmLW5OQOTOheto5SiZgJmDNELEv8jxngHSLhlSYQCTB9Avx1hnNzLqSIPWid83c6OTy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-2 text-secondary mb-2">
                                    <span className="material-symbols-outlined">
                                        medical_services
                                    </span>
                                    <span className="text-sm font-bold uppercase tracking-wider">
                                        Healthcare &amp; Schools
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Hospitals &amp; Education
                                </h3>
                                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Meeting strict hygiene requirements. Hermetically sealed and
                                    easy to sanitize.
                                </p>
                            </div>
                        </div>
                        <div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
                            <img
                                alt="Modern shopping mall floor"
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqJmRxFDfHDcVubMXjjEeISjHNSp5iHGcglgvO5L0-ZPMX_MGm7N1vwUhGAJvxAr22b88psk1E01JhM2E070UyP1X_TE6S8sAQxL339IZCJnmYG7bImR5MdboT1zKQAMpUIh8YCXMvgX_zssRCtkVdsnc4XPifinEa5x7O5fKGPZ__c082QEWPqRvC5Gu0MUEpgc0IqtTsSWb8_ySESpjXASXJtq9WtxmIa2BVBUN0iP5bUeYvuBzbjplXxOGS19RRP_JV8viXblOw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex items-center gap-2 text-secondary mb-2">
                                    <span className="material-symbols-outlined">storefront</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">
                                        Commercial &amp; Public
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Retail &amp; Public Spaces
                                </h3>
                                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Balancing high aesthetics with public safety (R10/R11
                                    anti-slip ratings).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
