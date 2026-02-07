import Footer from "@/components/Footer";
import ContactFormClient from "./ContactFormClient";

export const metadata = {
    title: "Contact Us | NextGen Floor Solutions Thailand",
    description:
        "Get in touch with NextGen Floor Solutions Thailand. Request a free quote for PU coating and floor restoration services. Terrazzo polishing coming soon.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary to-blue-900 py-20">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(#ffffff 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                ></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Get in Touch
                    </h1>
                    <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
                        Ready to transform your floors? Contact us for a free site
                        assessment and customized quote.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                    Request a Quote
                                </h2>
                                <ContactFormClient />
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* Thailand Office */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    Thailand Office
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-primary">
                                            <span className="material-symbols-outlined">
                                                location_on
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                                                Address
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                123 Sukhumvit Road, Watthana
                                                <br />
                                                Bangkok 10110, Thailand
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-primary">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                                                Phone
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                +66 2 123 4567
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-primary">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                                                Email
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                contact@nextgenfloors.co.th
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-primary">
                                            <span className="material-symbols-outlined">
                                                schedule
                                            </span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                                                Business Hours
                                            </h4>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                Monday - Friday: 8:00 AM - 6:00 PM
                                                <br />
                                                Saturday: 9:00 AM - 3:00 PM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp & LINE Contact */}
                            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                                    Chat With Us
                                </h3>
                                <div className="space-y-3">
                                    <a
                                        href="https://wa.me/6621234567?text=Hello%2C%20I%27m%20interested%20in%20floor%20restoration%20services"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-colors group"
                                    >
                                        <div className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#25D366] text-sm">WhatsApp</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">Chat instantly</p>
                                        </div>
                                        <span className="material-symbols-outlined text-[#25D366] ml-auto group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </a>
                                    <a
                                        href="https://line.me/R/ti/p/@nextgenfloors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl bg-[#00B900]/10 hover:bg-[#00B900]/20 border border-[#00B900]/30 transition-colors group"
                                    >
                                        <div className="flex size-10 items-center justify-center rounded-full bg-[#00B900] text-white">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#00B900] text-sm">LINE</p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">@nextgenfloors</p>
                                        </div>
                                        <span className="material-symbols-outlined text-[#00B900] ml-auto group-hover:translate-x-1 transition-transform">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Google Maps */}
                            <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5402061489777!2d100.56236907515826!3d13.743399797567445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee9c1234567%3A0xabcdef1234567890!2sSukhumvit%20Road%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1707234567890!5m2!1sen!2sth"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="NextGen Floor Solutions Thailand Location"
                                    className="w-full h-full"
                                ></iframe>
                            </div>

                            {/* Quick Contact */}
                            <div className="bg-primary rounded-2xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-4">Need Urgent Help?</h3>
                                <p className="text-blue-100 text-sm mb-4">
                                    For emergency floor repairs or urgent consultations, call us
                                    directly.
                                </p>
                                <a
                                    className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors"
                                    href="tel:+6621234567"
                                >
                                    <span className="material-symbols-outlined text-lg">
                                        call
                                    </span>
                                    Call Now: +66 2 123 4567
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
