import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
	const t = useTranslations("common");
	return (
		<footer className="bg-white pt-16 pb-8 border-t border-gray-100">
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
						<p className="text-gray-600 mb-6 max-w-md">
							{t("footer_description")}
						</p>
						<div className="space-y-3 text-gray-600">
							<div className="flex items-start gap-3">
								<span className="material-symbols-outlined text-primary mt-0.5">
									location_on
								</span>
								<p className="text-sm whitespace-pre-line">
									{t("footer_address")}
								</p>
							</div>
							<div className="flex items-center gap-3">
								<span className="material-symbols-outlined text-primary">
									call
								</span>
								<p className="text-sm">{t("footer_phone")}</p>
							</div>
							<div className="flex items-center gap-3">
								<span className="material-symbols-outlined text-primary">
									mail
								</span>
								<p className="text-sm">{t("footer_email")}</p>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
							{t("footer_solutions")}
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/solutions"
									className="text-sm text-gray-600 hover:text-primary"
								>
									{t("footer_pu_coating")}
								</Link>
							</li>
							<li>
								<Link
									href="/solutions"
									className="text-sm text-gray-600 hover:text-primary"
								>
									{t("footer_terrazzo")}{" "}
									<span className="text-amber-600">
										({t("footer_terrazzo_coming_soon")})
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/solutions"
									className="text-sm text-gray-600 hover:text-primary"
								>
									{t("footer_additives")}
								</Link>
							</li>
						</ul>
					</div>

					{/* Company Links */}
					<div>
						<h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">
							{t("footer_company")}
						</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/about"
									className="text-sm text-gray-600 hover:text-primary"
								>
									{t("footer_about")}
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm text-gray-600 hover:text-primary"
								>
									{t("footer_contact")}
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-sm text-gray-600 hover:text-primary"
								>
									{t("footer_get_quote")}
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-gray-500">{t("footer_copyright")}</p>
					<div className="flex items-center gap-6">
						<Link
							className="text-sm text-gray-500 hover:text-primary"
							href="/privacy"
						>
							{t("footer_privacy")}
						</Link>
						<Link
							className="text-sm text-gray-500 hover:text-primary"
							href="/terms"
						>
							{t("footer_terms")}
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
