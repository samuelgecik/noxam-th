import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-950 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/logo.png"
                                alt="NextGen Floor Solutions"
                                className="h-10 w-auto"
                            />
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
                            Ready for a transformation?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
                            Get a free site assessment and quote. Our experts will inspect
                            your floor and recommend the best restoration plan.
                        </p>
                        <div className="space-y-4 text-gray-600 dark:text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    location_on
                                </span>
                                <p>
                                    123 Sukhumvit Road, Watthana,
                                    <br />
                                    Bangkok 10110, Thailand
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    call
                                </span>
                                <p>+66 2 123 4567</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    mail
                                </span>
                                <p>contact@nextgenfloors.co.th</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="footer-name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                        id="footer-name"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="footer-phone"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                        id="footer-phone"
                                        placeholder="+66 ..."
                                        type="tel"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    htmlFor="footer-email"
                                >
                                    Email
                                </label>
                                <input
                                    className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    id="footer-email"
                                    placeholder="john@company.com"
                                    type="email"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="footer-type"
                                    >
                                        Floor Type
                                    </label>
                                    <select
                                        className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                        id="footer-type"
                                    >
                                        <option>Vinyl / PVC</option>
                                        <option>Terrazzo / Stone</option>
                                        <option>Epoxy</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        htmlFor="footer-size"
                                    >
                                        Area Size (Sqm)
                                    </label>
                                    <input
                                        className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                        id="footer-size"
                                        placeholder="e.g. 500"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div>
                                <label
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    htmlFor="footer-message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                                    id="footer-message"
                                    placeholder="Tell us about your project..."
                                    rows={3}
                                ></textarea>
                            </div>
                            <button
                                className="w-full rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                                type="submit"
                            >
                                Request Free Quote
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © 2026 Next Gen Floors Thailand. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                            href="#"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            className="text-sm text-gray-500 hover:text-primary dark:text-gray-400"
                            href="#"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
