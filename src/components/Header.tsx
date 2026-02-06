"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/95">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="NextGen Floor Solutions"
                        className="h-10 w-auto"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors ${pathname === link.href
                                ? "text-primary"
                                : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right side: Theme toggle + Language switcher + CTA */}
                <div className="flex items-center gap-4">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <span className="material-symbols-outlined text-gray-600">
                                dark_mode
                            </span>
                        ) : (
                            <span className="material-symbols-outlined text-yellow-400">
                                light_mode
                            </span>
                        )}
                    </button>

                    {/* Language Switcher */}
                    <div className="hidden sm:flex items-center gap-1 border-l border-gray-200 dark:border-gray-700 pl-4">
                        <button
                            className="flex items-center gap-1 px-2 py-1.5 rounded-md bg-primary/10 border border-primary/20 transition-colors"
                            title="English"
                        >
                            <img
                                src="https://flagcdn.com/w20/us.png"
                                alt="English"
                                className="w-5 h-auto rounded-sm"
                            />
                            <span className="text-xs font-bold text-primary">ENG</span>
                        </button>
                        <button
                            className="flex items-center gap-1 px-2 py-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            title="ภาษาไทย"
                        >
                            <img
                                src="https://flagcdn.com/w20/th.png"
                                alt="ไทย"
                                className="w-5 h-auto rounded-sm"
                            />
                            <span className="text-xs font-bold text-gray-600 dark:text-gray-300">
                                ไทย
                            </span>
                        </button>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
                    >
                        Get a Quote
                    </Link>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-300">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}

