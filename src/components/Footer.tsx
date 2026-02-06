import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-950 pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img
                                src="/logo.png"
                                alt="NextGen Floor Solutions"
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                            Premium floor restoration services in Thailand. German technology,
                            expertise from Finland. PU Floor Coating, Terrazzo Polishing, and more.
                        </p>
                        <div className="space-y-3 text-gray-600 dark:text-gray-300">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary mt-0.5">
                                    location_on
                                </span>
                                <p className="text-sm">
                                    123 Sukhumvit Road, Watthana,<br />
                                    Bangkok 10110, Thailand
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    call
                                </span>
                                <p className="text-sm">+66 2 123 4567</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    mail
                                </span>
                                <p className="text-sm">contact@nextgenfloors.co.th</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Solutions
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/solutions" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                                    PU Floor Coating
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                                    Terrazzo Polishing
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                                    Functional Additives
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary dark:text-gray-400">
                                    Get a Quote
                                </Link>
                            </li>
                        </ul>
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
