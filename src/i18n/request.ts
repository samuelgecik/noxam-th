import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale;
	if (!locale || !routing.locales.includes(locale as "en" | "th")) {
		locale = routing.defaultLocale;
	}

	const common = (await import(`@/messages/${locale}/common.json`)).default;
	const home = (await import(`@/messages/${locale}/home.json`)).default;
	const about = (await import(`@/messages/${locale}/about.json`)).default;
	const solutions = (await import(`@/messages/${locale}/solutions.json`))
		.default;
	const contact = (await import(`@/messages/${locale}/contact.json`)).default;

	return {
		locale,
		messages: { common, home, about, solutions, contact },
	};
});
