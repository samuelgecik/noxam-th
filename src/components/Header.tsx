"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

export default function Header() {
	const t = useTranslations("common");
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navLinks = [
		{ href: "/" as const, label: t("nav_home") },
		{ href: "/solutions" as const, label: t("nav_solutions") },
		{ href: "/about" as const, label: t("nav_about") },
		{ href: "/contact" as const, label: t("nav_contact") },
	];

	const switchLocale = (newLocale: "en" | "th") => {
		router.replace(pathname, { locale: newLocale });
	};

	// Close mobile menu on route change
	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	// Prevent body scroll when menu is open
	useEffect(() => {
		document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [mobileMenuOpen]);

	const LanguageSwitcher = () => (
		<>
			<button
				className={`flex items-center gap-1 px-2 py-1.5 rounded-md transition-colors ${
					locale === "th"
						? "bg-primary/10 border border-primary/20"
						: "hover:bg-gray-100"
				}`}
				title="ภาษาไทย"
				onClick={() => switchLocale("th")}
			>
				<img
					src="https://flagcdn.com/w20/th.png"
					alt="ไทย"
					width={20}
					height={15}
					className="w-5 h-auto rounded-sm"
				/>
				<span
					className={`text-xs font-bold ${
						locale === "th" ? "text-primary" : "text-gray-600"
					}`}
				>
					ไทย
				</span>
			</button>
			<button
				className={`flex items-center gap-1 px-2 py-1.5 rounded-md transition-colors ${
					locale === "en"
						? "bg-primary/10 border border-primary/20"
						: "hover:bg-gray-100"
				}`}
				title="English"
				onClick={() => switchLocale("en")}
			>
				<img
					src="https://flagcdn.com/w20/gb.png"
					alt="English"
					width={20}
					height={15}
					className="w-5 h-auto rounded-sm"
				/>
				<span
					className={`text-xs font-bold ${
						locale === "en" ? "text-primary" : "text-gray-600"
					}`}
				>
					ENG
				</span>
			</button>
		</>
	);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
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
							className={`text-sm font-medium transition-colors ${
								pathname === link.href
									? "text-primary"
									: "text-gray-600 hover:text-primary"
							}`}
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Right side: Language switcher + CTA */}
				<div className="flex items-center gap-4">
					{/* Language Switcher */}
					<div className="hidden sm:flex items-center gap-1 border-l border-gray-200 pl-4">
						<LanguageSwitcher />
					</div>

					{/* CTA Button */}
					<Link
						href="/contact"
						className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
					>
						{t("cta_get_quote")}
					</Link>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 text-gray-600 hover:text-gray-900"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
						aria-expanded={mobileMenuOpen}
					>
						<span className="material-symbols-outlined">
							{mobileMenuOpen ? "close" : "menu"}
						</span>
					</button>
				</div>
			</div>

			{/* Mobile Menu Overlay */}
			{mobileMenuOpen && (
				<div
					className="fixed inset-0 top-16 z-40 bg-black/50 md:hidden"
					onClick={() => setMobileMenuOpen(false)}
				/>
			)}

			{/* Mobile Menu Drawer */}
			<nav
				className={`fixed top-16 right-0 z-50 h-[calc(100dvh-4rem)] w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
					mobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex flex-col p-6 gap-2">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
								pathname === link.href
									? "bg-primary/10 text-primary"
									: "text-gray-700 hover:bg-gray-100"
							}`}
						>
							{link.label}
						</Link>
					))}

					{/* Mobile Language Switcher */}
					<div className="flex items-center gap-2 mt-4 px-4 pt-4 border-t border-gray-200">
						<LanguageSwitcher />
					</div>

					{/* Mobile CTA */}
					<Link
						href="/contact"
						className="mt-4 flex h-12 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
					>
						{t("cta_get_quote")}
					</Link>
				</div>
			</nav>
		</header>
	);
}
