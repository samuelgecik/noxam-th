import Footer from "@/components/Footer";

export const metadata = {
    title: "About Us | NextGen Floor Solutions Thailand",
    description:
        "Restoring floors since 2004. ISO certified German technology with expertise from Finland, delivering premium floor solutions in Thailand.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVMqivcOsOm_L3l3n_H5rViHsSwqORw1lHIMjYcrwdrgDNX-plQoHd_sTEMjtQxBDhlkfpFJFC8Sh4-aX9g7u75_aQ9n-Yr020M9_V1Ay1tukPPuuGLFbN0esGV2tg6G7C7lHFWnzhBZ2pXHW5AoG2uOsICjlWijpFa7GZRQ4RsP-8zYRh4-fSaSp7OG--cY0uDSf5hP_aC1iYHDAFVfBq26LsARMdDOlvHeBm4sqQymNLrV6gRmsmTIsF8bLzLIJj3tTp1VFiz0S6')",
                }}
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                        Restoring Floors Since 2004
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-200">
                        Premier floor restoration services with German technology and
                        Finnish expertise. We are committed to bringing your floors back to
                        life with sustainable and innovative solutions.
                    </p>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Quality &amp; Certifications
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                            Our commitment to excellence is backed by international standards.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-primary mx-auto mb-4 dark:bg-blue-900/30">
                                <span className="material-symbols-outlined text-3xl">
                                    verified
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white">
                                ISO 9001:2015
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Quality Management
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto mb-4 dark:bg-green-900/30">
                                <span className="material-symbols-outlined text-3xl">eco</span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white">
                                ISO 14001:2015
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Environmental Management
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="flex size-16 items-center justify-center rounded-full bg-orange-100 text-orange-600 mx-auto mb-4 dark:bg-orange-900/30">
                                <span className="material-symbols-outlined text-3xl">
                                    shield
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white">
                                ISO 45001:2018
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Health &amp; Safety
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4 dark:bg-blue-900/30">
                                <span className="material-symbols-outlined text-3xl">
                                    workspace_premium
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-900 dark:text-white">
                                Dr. Schutz
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                Certified Applicator
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our References Section */}
            <section className="py-16 bg-background-off-white dark:bg-background-dark">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Our References
                        </h2>
                        <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                            Transformations that speak for themselves.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="aspect-[4/3] relative">
                                <img
                                    alt="Before and after of a commercial floor restoration"
                                    className="h-full w-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD04dLMezB9DysoiFc_2Va6mbAHEh_z1L6rUXvnTPvPd0l6RkJFk1rj2Dm4EkMXefoX1HKcLpVmdKcuByy2lj0SxU1Q_C23At4pSgg_uhlADJ0M1tb4RH9KMy0PDaVwJyBNy90owFGkaV4JeDNtuuvD0XKbEkOo5Ga5PjG0VA_Gjo-zhhJ9j2kRUW4EKY_G0bVfu98MKvkbyIb0n2HALEwNdDW9bZEqNU0d6ZCW2r6q-fd9Gp32GwDsBuMm25-_3SxXdEO-0NyMva5S"
                                />
                                <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                                    Industrial
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 dark:text-white">
                                    Warehouse Facility
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Full PU coating restoration
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="aspect-[4/3] relative">
                                <img
                                    alt="Terrazzo floor polishing result"
                                    className="h-full w-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ1p_a2U286cXBwg9SnmBrv-rki1APEUWUFx-lBgz6bTUuGsG2wcLY86JAlgRp_O3ANC2qEnc5S6SEAjfxSfl2rRIyaxSUSNNPfb64HyEjQoALIsLOXnq-lp12Abs0eqiwU9Wfjy709xFYFcWf2J1YPTaFsW9cJnPsPR5HOwclU1BquO7QR_FcslAo5KAgZM0IpHwsPWhHfEPab-yJB_WJ7ulVCHofhD87_mliWF0PhpfCNM2Tz_1NWSWSTbqHUWwCuv3XsmWXQLh8"
                                />
                                <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                                    Commercial
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 dark:text-white">
                                    Shopping Mall
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Terrazzo polishing restoration
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="aspect-[4/3] relative">
                                <img
                                    alt="Hospital floor restoration"
                                    className="h-full w-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmZsc5-4iJkcUtlqsRsFEzC1STz8AoxUPtXK2lDrVPt9QQ_B0e6vLr6F4QvjCHXt4IeX5zjni8CutU9kWGYFUOPkApteKJtQpgWOs7VeBCkF1Jzw662yCE7kjSyWQWt1RSld6dd-tLN_U2S7YKfYlprE-m8r7EJ2zu1b6sHiIFmXcHckXXeAJn1N3i66kj0-uhsS1y5-ySJEmLW5OQOTOheto5SiZgJmDNELEv8jxngHSLhlSYQCTB9Avx1hnNzLqSIPWid83c6OTy"
                                />
                                <div className="absolute top-3 left-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                                    Healthcare
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-gray-900 dark:text-white">
                                    Hospital Corridor
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    Antimicrobial PU coating
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                            What Our Clients Say
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                &quot;The floor restoration exceeded our expectations. Minimal
                                downtime and the results are stunning. Highly recommended for
                                any commercial facility.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex size-12 items-center justify-center rounded-full bg-primary text-white font-bold">
                                    SK
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        Somchai K.
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Facility Manager, Bangkok
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                &quot;Professional team, high-quality work. The PU coating has
                                made our factory floor much easier to maintain and looks brand
                                new.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex size-12 items-center justify-center rounded-full bg-green-600 text-white font-bold">
                                    NP
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        Nattaporn P.
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Operations Director
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                            <div className="flex items-center gap-1 mb-4 text-yellow-400">
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                                <span className="material-symbols-outlined">star</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                &quot;We had our 30-year-old terrazzo floor restored. It now
                                looks better than when it was first installed. Amazing
                                work!&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex size-12 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                                    WL
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white">
                                        Warunee L.
                                    </h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Property Owner
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Training Section */}
            <section className="py-16 bg-primary/5 dark:bg-background-dark border-y border-gray-200 dark:border-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                                German-Trained Excellence
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                                Our technicians undergo rigorous training programs directly from
                                Dr. Schutz in Germany and our operations team brings extensive
                                experience from Finland.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary dark:bg-gray-800">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            Certified Training
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Regular workshops and certifications from industry
                                            leaders.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary dark:bg-gray-800">
                                        <span className="material-symbols-outlined">
                                            engineering
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            Finnish Expertise
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Decades of experience in Nordic floor restoration brought
                                            to Thailand.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary dark:bg-gray-800">
                                        <span className="material-symbols-outlined">
                                            precision_manufacturing
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">
                                            Latest Equipment
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            State-of-the-art machinery for precise and efficient
                                            restoration.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                alt="Professional floor restoration team at work"
                                className="w-full h-[400px] object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJwIwgIqSTJuvb6bJWRE_kyg3Qsdy1pLPXVptjpOzmwcn2XPDqwn2JO7EYIaELNTHed8Z9-cr_cIUs1ijUUHNRDpoOUKybJXNIzty7p_4Tz04qZE8mP8SRY6k1hOIUqu00HkEM-wbo4cR728WDbi6GmPuwYFjQ0-UfifG7su78zKIBKMebiFQBDnKCylfY4Pq0_Jtg3MJJQi7HcVQq-apL_PxcvCYvmKrPZ95cpsfJnwlGrctwwomiIn-amhLxXk7ZmTom455OX9vg"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                <p className="text-white font-bold text-lg">
                                    Our Expert Team
                                </p>
                                <p className="text-gray-200 text-sm">
                                    Trained in Germany &amp; Finland. Serving Thailand.
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
