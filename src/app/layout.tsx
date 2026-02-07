import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
	title: "NextGen Floor Solutions Thailand | PU Coating & Floor Restoration",
	description:
		"Premium floor restoration services in Thailand. German technology, expertise from Finland. PU Floor Coating and more. Terrazzo Polishing coming soon.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.png" type="image/png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap"
					rel="stylesheet"
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							(function() {
								try {
									var theme = localStorage.getItem('theme') || 'light';
									document.documentElement.classList.add(theme);
								} catch (e) {
									document.documentElement.classList.add('light');
								}
							})();
						`,
					}}
				/>
			</head>
			<body className="bg-background-light dark:bg-background-dark text-accent dark:text-white font-display antialiased">
				<ThemeProvider>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

