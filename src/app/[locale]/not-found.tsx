import { Link } from "@/i18n/navigation";

export default function NotFound() {
	return (
		<div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
			<h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
			<p className="text-xl text-gray-600 mb-8">Page not found</p>
			<Link
				href="/"
				className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white shadow-md hover:bg-blue-700 transition-all"
			>
				Go Home
			</Link>
		</div>
	);
}
