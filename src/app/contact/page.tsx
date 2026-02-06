import Footer from "@/components/Footer";

export const metadata = {
    title: "Contact Us | NextGen Floor Solutions Thailand",
    description:
        "Get in touch with NextGen Floor Solutions Thailand. Request a free quote for PU coating, terrazzo polishing, and floor restoration services.",
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
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                htmlFor="contact-name"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                id="contact-name"
                                                placeholder="John Doe"
                                                required
                                                type="text"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                htmlFor="contact-email"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                id="contact-email"
                                                placeholder="john@company.com"
                                                required
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                htmlFor="contact-phone"
                                            >
                                                Phone Number *
                                            </label>
                                            <input
                                                className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                id="contact-phone"
                                                placeholder="+66 ..."
                                                required
                                                type="tel"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                htmlFor="contact-company"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                id="contact-company"
                                                placeholder="Your Company Ltd."
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                htmlFor="contact-service"
                                            >
                                                Service Interest *
                                            </label>
                                            <select
                                                className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                id="contact-service"
                                                required
                                            >
                                                <option value="">Select a service...</option>
                                                <option>PU Floor Coating</option>
                                                <option>Terrazzo Polishing</option>
                                                <option>Floor Restoration</option>
                                                <option>Antimicrobial Treatment</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                                htmlFor="contact-size"
                                            >
                                                Approximate Area (sqm)
                                            </label>
                                            <input
                                                className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                id="contact-size"
                                                placeholder="e.g. 500"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                            htmlFor="contact-message"
                                        >
                                            Project Details
                                        </label>
                                        <textarea
                                            className="w-full rounded-lg border-gray-300 bg-white py-3 px-4 text-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                            id="contact-message"
                                            placeholder="Tell us about your floor, current condition, and any specific requirements..."
                                            rows={5}
                                        ></textarea>
                                    </div>
                                    <button
                                        className="w-full rounded-lg bg-primary py-4 px-6 text-base font-bold text-white shadow-lg hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:shadow-xl"
                                        type="submit"
                                    >
                                        Submit Request
                                    </button>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                                        By submitting this form, you agree to our Privacy Policy.
                                        We&apos;ll respond within 24 hours.
                                    </p>
                                </form>
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

                            {/* Map Placeholder */}
                            <div className="relative h-64 rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="material-symbols-outlined text-gray-400 text-5xl mb-2">
                                            map
                                        </span>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                                            Map Location
                                        </p>
                                    </div>
                                </div>
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
