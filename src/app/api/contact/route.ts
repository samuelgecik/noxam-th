import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const RECIPIENT_EMAIL = "samo.eshopper@gmail.com";
const SENDER_EMAIL = "form@mail.nextgenfloors.co.th";

export async function POST(request: NextRequest) {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);

		const formData = await request.formData();

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const phone = formData.get("phone") as string;
		const company = formData.get("company") as string;
		const service = formData.get("service") as string;
		const size = formData.get("size") as string;
		const message = formData.get("message") as string;

		// Server-side validation
		if (!name || !email || !phone || !service) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		// Process file attachments
		const attachments: { filename: string; content: string }[] = [];
		const fileEntries = formData.getAll("files");

		for (const entry of fileEntries) {
			if (entry instanceof File && entry.size > 0) {
				const buffer = await entry.arrayBuffer();
				const bytes = new Uint8Array(buffer);
				let binary = "";
				for (const byte of bytes) {
					binary += String.fromCharCode(byte);
				}
				attachments.push({
					filename: entry.name,
					content: btoa(binary),
				});
			}
		}

		const serviceLabels: Record<string, string> = {
			"pu-coating": "PU Coating",
			terrazzo: "Terrazzo Polishing",
			restoration: "Floor Restoration",
			antimicrobial: "Antimicrobial Treatment",
			other: "Other",
		};

		const textBody = [
			`New contact form submission from nextgenfloor.co.th`,
			``,
			`Name: ${name}`,
			`Email: ${email}`,
			`Phone: ${phone}`,
			company ? `Company: ${company}` : null,
			`Service: ${serviceLabels[service] || service}`,
			size ? `Approximate Area: ${size} sqm` : null,
			``,
			message ? `Message:\n${message}` : `Message: (none)`,
			``,
			attachments.length > 0
				? `Attachments: ${attachments.length} photo(s)`
				: null,
		]
			.filter(Boolean)
			.join("\n");

		await resend.emails.send({
			from: `NextGen Floors <${SENDER_EMAIL}>`,
			to: RECIPIENT_EMAIL,
			replyTo: email,
			subject: `Contact Form: ${name} — ${serviceLabels[service] || service}`,
			text: textBody,
			attachments:
				attachments.length > 0 ? attachments : undefined,
		});

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json(
			{ error: "Failed to send message" },
			{ status: 500 }
		);
	}
}
