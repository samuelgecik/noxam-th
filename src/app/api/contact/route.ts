import { NextRequest, NextResponse } from "next/server";

const RECIPIENT_EMAIL = "sales@nextgenfloors.co.th";
const SENDER_EMAIL = "form@mail.nextgenfloors.co.th";

export async function POST(request: NextRequest) {
	try {
		const apiKey = process.env.RESEND_API_KEY;

		if (!apiKey) {
			return NextResponse.json(
				{ error: "RESEND_API_KEY is not configured" },
				{ status: 500 }
			);
		}

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
			`New contact form submission from nextgenfloors.co.th`,
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

		const payload: Record<string, unknown> = {
			from: `NextGen Floors - Form <${SENDER_EMAIL}>`,
			to: [RECIPIENT_EMAIL],
			reply_to: [email],
			subject: `Contact Form: ${name} — ${serviceLabels[service] || service}`,
			text: textBody,
		};

		if (attachments.length > 0) {
			payload.attachments = attachments;
		}

		const response = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		const result = await response.json();

		if (!response.ok) {
			console.error("Resend error:", result);
			return NextResponse.json(
				{ error: (result as { message?: string }).message || "Failed to send email" },
				{ status: response.status }
			);
		}

		return NextResponse.json({ success: true, id: (result as { id: string }).id });
	} catch (error) {
		console.error("Contact form error:", error);
		const msg =
			error instanceof Error ? error.message : "Failed to send message";
		return NextResponse.json(
			{ error: msg },
			{ status: 500 }
		);
	}
}
