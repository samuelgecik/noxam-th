"use client";

import { useState, useRef } from "react";
import { useTranslations } from "next-intl";

interface FormData {
	name: string;
	email: string;
	phone: string;
	company: string;
	service: string;
	size: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	phone?: string;
	service?: string;
}

export default function ContactFormClient() {
	const t = useTranslations("contact");
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		size: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [touched, setTouched] = useState<Record<string, boolean>>({});
	const [files, setFiles] = useState<File[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
	const fileInputRef = useRef<HTMLInputElement>(null);

	const validateField = (name: string, value: string): string | undefined => {
		switch (name) {
			case "name":
				if (!value.trim()) return t("error_name_required");
				if (value.trim().length < 2) return t("error_name_min");
				break;
			case "email":
				if (!value.trim()) return t("error_email_required");
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(value)) return t("error_email_invalid");
				break;
			case "phone":
				if (!value.trim()) return t("error_phone_required");
				const phoneRegex = /^[\d\s+\-()]{8,}$/;
				if (!phoneRegex.test(value)) return t("error_phone_invalid");
				break;
			case "service":
				if (!value) return t("error_service_required");
				break;
		}
		return undefined;
	};

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};
		let isValid = true;

		(["name", "email", "phone", "service"] as const).forEach((field) => {
			const error = validateField(field, formData[field]);
			if (error) {
				newErrors[field] = error;
				isValid = false;
			}
		});

		setErrors(newErrors);
		return isValid;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		if (touched[name]) {
			const error = validateField(name, value);
			setErrors((prev) => ({ ...prev, [name]: error }));
		}
	};

	const handleBlur = (
		e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
		const error = validateField(name, value);
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFiles = Array.from(e.target.files || []);
		const validFiles = selectedFiles.filter((file) => {
			const isValidType = ["image/jpeg", "image/png", "image/webp", "image/heic"].includes(
				file.type
			);
			const isValidSize = file.size <= 10 * 1024 * 1024;
			return isValidType && isValidSize;
		});

		setFiles((prev) => [...prev, ...validFiles].slice(0, 5));
	};

	const removeFile = (index: number) => {
		setFiles((prev) => prev.filter((_, i) => i !== index));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) {
			setTouched({ name: true, email: true, phone: true, service: true });
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			const body = new FormData();
			body.append("name", formData.name);
			body.append("email", formData.email);
			body.append("phone", formData.phone);
			body.append("company", formData.company);
			body.append("service", formData.service);
			body.append("size", formData.size);
			body.append("message", formData.message);
			files.forEach((file) => body.append("files", file));

			const response = await fetch("/api/contact", {
				method: "POST",
				body,
			});

			if (!response.ok) {
				throw new Error("Failed to send");
			}

			setSubmitStatus("success");
			setFormData({
				name: "",
				email: "",
				phone: "",
				company: "",
				service: "",
				size: "",
				message: "",
			});
			setFiles([]);
			setTouched({});
			setErrors({});
		} catch {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	const inputBaseClass =
		"w-full rounded-lg border bg-white py-3 px-4 text-sm transition-colors";
	const inputNormalClass = `${inputBaseClass} border-gray-300 focus:border-primary focus:ring-primary`;
	const inputErrorClass = `${inputBaseClass} border-red-500 focus:border-red-500 focus:ring-red-500`;

	return (
		<form className="space-y-6" onSubmit={handleSubmit} noValidate>
			{submitStatus === "success" && (
				<div className="p-4 rounded-lg bg-green-50 border border-green-200">
					<div className="flex items-center gap-2 text-green-700">
						<span className="material-symbols-outlined">check_circle</span>
						<p className="font-medium">{t("success_message")}</p>
					</div>
				</div>
			)}

			{submitStatus === "error" && (
				<div className="p-4 rounded-lg bg-red-50 border border-red-200">
					<div className="flex items-center gap-2 text-red-700">
						<span className="material-symbols-outlined">error</span>
						<p className="font-medium">{t("error_message")}</p>
					</div>
				</div>
			)}

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
						{t("label_name")}
					</label>
					<input
						className={errors.name && touched.name ? inputErrorClass : inputNormalClass}
						id="name"
						name="name"
						placeholder={t("placeholder_name")}
						type="text"
						value={formData.name}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.name && touched.name && (
						<p className="mt-1 text-sm text-red-500 flex items-center gap-1">
							<span className="material-symbols-outlined text-sm">warning</span>
							{errors.name}
						</p>
					)}
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
						{t("label_email")}
					</label>
					<input
						className={errors.email && touched.email ? inputErrorClass : inputNormalClass}
						id="email"
						name="email"
						placeholder={t("placeholder_email")}
						type="email"
						value={formData.email}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.email && touched.email && (
						<p className="mt-1 text-sm text-red-500 flex items-center gap-1">
							<span className="material-symbols-outlined text-sm">warning</span>
							{errors.email}
						</p>
					)}
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
						{t("label_phone")}
					</label>
					<input
						className={errors.phone && touched.phone ? inputErrorClass : inputNormalClass}
						id="phone"
						name="phone"
						placeholder={t("placeholder_phone")}
						type="tel"
						value={formData.phone}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{errors.phone && touched.phone && (
						<p className="mt-1 text-sm text-red-500 flex items-center gap-1">
							<span className="material-symbols-outlined text-sm">warning</span>
							{errors.phone}
						</p>
					)}
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="company">
						{t("label_company")}
					</label>
					<input
						className={inputNormalClass}
						id="company"
						name="company"
						placeholder={t("placeholder_company")}
						type="text"
						value={formData.company}
						onChange={handleChange}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="service">
						{t("label_service")}
					</label>
					<select
						className={errors.service && touched.service ? inputErrorClass : inputNormalClass}
						id="service"
						name="service"
						value={formData.service}
						onChange={handleChange}
						onBlur={handleBlur}
					>
						<option value="">{t("placeholder_service")}</option>
						<option value="pu-coating">{t("service_pu")}</option>
						<option value="terrazzo">{t("service_terrazzo")}</option>
						<option value="restoration">{t("service_restoration")}</option>
						<option value="antimicrobial">{t("service_antimicrobial")}</option>
						<option value="other">{t("service_other")}</option>
					</select>
					{errors.service && touched.service && (
						<p className="mt-1 text-sm text-red-500 flex items-center gap-1">
							<span className="material-symbols-outlined text-sm">warning</span>
							{errors.service}
						</p>
					)}
				</div>
				<div>
					<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="size">
						{t("label_size")}
					</label>
					<input
						className={inputNormalClass}
						id="size"
						name="size"
						placeholder={t("placeholder_size")}
						type="number"
						value={formData.size}
						onChange={handleChange}
					/>
				</div>
			</div>

			{/* File Upload */}
			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2">
					{t("label_photos")}
				</label>
				<div
					className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer"
					onClick={() => fileInputRef.current?.click()}
				>
					<input
						ref={fileInputRef}
						type="file"
						accept="image/jpeg,image/png,image/webp,image/heic"
						multiple
						className="hidden"
						onChange={handleFileChange}
					/>
					<span className="material-symbols-outlined text-gray-400 text-4xl mb-2">
						add_photo_alternate
					</span>
					<p className="text-sm text-gray-600">
						<span className="text-primary font-medium">{t("upload_click")}</span>{" "}
						{t("upload_drag")}
					</p>
					<p className="text-xs text-gray-500 mt-1">
						{t("upload_hint")}
					</p>
				</div>

				{files.length > 0 && (
					<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
						{files.map((file, index) => (
							<div
								key={index}
								className="relative group rounded-lg overflow-hidden border border-gray-200"
							>
								<img
									src={URL.createObjectURL(file)}
									alt={`Upload ${index + 1}`}
									className="w-full h-24 object-cover"
								/>
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										removeFile(index);
									}}
									className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
								>
									<span className="material-symbols-outlined text-sm">close</span>
								</button>
								<div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
									<p className="text-white text-xs truncate">{file.name}</p>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			<div>
				<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
					{t("label_message")}
				</label>
				<textarea
					className={inputNormalClass}
					id="message"
					name="message"
					placeholder={t("placeholder_message")}
					rows={5}
					value={formData.message}
					onChange={handleChange}
				></textarea>
			</div>

			<button
				className="w-full rounded-lg bg-primary py-4 px-6 text-base font-bold text-white shadow-lg hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
				type="submit"
				disabled={isSubmitting}
			>
				{isSubmitting ? (
					<>
						<span className="material-symbols-outlined animate-spin">
							progress_activity
						</span>
						{t("submitting")}
					</>
				) : (
					<>
						<span className="material-symbols-outlined">send</span>
						{t("submit")}
					</>
				)}
			</button>

			<p className="text-xs text-gray-500 text-center">
				{t("privacy_notice")}
			</p>
		</form>
	);
}
