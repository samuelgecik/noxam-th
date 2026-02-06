"use client";

import { useState, useRef } from "react";

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
                if (!value.trim()) return "Full name is required";
                if (value.trim().length < 2) return "Name must be at least 2 characters";
                break;
            case "email":
                if (!value.trim()) return "Email is required";
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) return "Please enter a valid email address";
                break;
            case "phone":
                if (!value.trim()) return "Phone number is required";
                const phoneRegex = /^[\d\s+\-()]{8,}$/;
                if (!phoneRegex.test(value)) return "Please enter a valid phone number";
                break;
            case "service":
                if (!value) return "Please select a service";
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

        // Real-time validation for touched fields
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
            const isValidSize = file.size <= 10 * 1024 * 1024; // 10MB
            return isValidType && isValidSize;
        });

        setFiles((prev) => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
    };

    const removeFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            // Mark all required fields as touched to show errors
            setTouched({ name: true, email: true, phone: true, service: true });
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // In a real app, you would send the form data to your API
            console.log("Form submitted:", formData, files);

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
        "w-full rounded-lg border bg-white py-3 px-4 text-sm transition-colors dark:bg-gray-700 dark:text-white";
    const inputNormalClass = `${inputBaseClass} border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary`;
    const inputErrorClass = `${inputBaseClass} border-red-500 focus:border-red-500 focus:ring-red-500`;

    return (
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {submitStatus === "success" && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 dark:bg-green-900/20 dark:border-green-800">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                        <span className="material-symbols-outlined">check_circle</span>
                        <p className="font-medium">Thank you! We&apos;ll contact you within 24 hours.</p>
                    </div>
                </div>
            )}

            {submitStatus === "error" && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 dark:bg-red-900/20 dark:border-red-800">
                    <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                        <span className="material-symbols-outlined">error</span>
                        <p className="font-medium">Something went wrong. Please try again.</p>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="name"
                    >
                        Full Name *
                    </label>
                    <input
                        className={errors.name && touched.name ? inputErrorClass : inputNormalClass}
                        id="name"
                        name="name"
                        placeholder="John Doe"
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
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="email"
                    >
                        Email Address *
                    </label>
                    <input
                        className={errors.email && touched.email ? inputErrorClass : inputNormalClass}
                        id="email"
                        name="email"
                        placeholder="john@company.com"
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
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="phone"
                    >
                        Phone Number *
                    </label>
                    <input
                        className={errors.phone && touched.phone ? inputErrorClass : inputNormalClass}
                        id="phone"
                        name="phone"
                        placeholder="+66 ..."
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
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="company"
                    >
                        Company Name
                    </label>
                    <input
                        className={inputNormalClass}
                        id="company"
                        name="company"
                        placeholder="Your Company Ltd."
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="service"
                    >
                        Service Interest *
                    </label>
                    <select
                        className={errors.service && touched.service ? inputErrorClass : inputNormalClass}
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option value="">Select a service...</option>
                        <option value="pu-coating">PU Floor Coating</option>
                        <option value="terrazzo">Terrazzo Polishing</option>
                        <option value="restoration">Floor Restoration</option>
                        <option value="antimicrobial">Antimicrobial Treatment</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.service && touched.service && (
                        <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">warning</span>
                            {errors.service}
                        </p>
                    )}
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        htmlFor="size"
                    >
                        Approximate Area (sqm)
                    </label>
                    <input
                        className={inputNormalClass}
                        id="size"
                        name="size"
                        placeholder="e.g. 500"
                        type="number"
                        value={formData.size}
                        onChange={handleChange}
                    />
                </div>
            </div>

            {/* File Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Floor Photos (Optional)
                </label>
                <div
                    className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer"
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
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary font-medium">Click to upload</span> or drag
                        and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                        JPG, PNG, WebP or HEIC (max 10MB each, up to 5 files)
                    </p>
                </div>

                {/* File Preview */}
                {files.length > 0 && (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className="relative group rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
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
                                    <span className="material-symbols-outlined text-sm">
                                        close
                                    </span>
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
                <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="message"
                >
                    Project Details
                </label>
                <textarea
                    className={inputNormalClass}
                    id="message"
                    name="message"
                    placeholder="Tell us about your floor, current condition, and any specific requirements..."
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
                        Submitting...
                    </>
                ) : (
                    <>
                        <span className="material-symbols-outlined">send</span>
                        Submit Request
                    </>
                )}
            </button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                By submitting this form, you agree to our Privacy Policy. We&apos;ll respond
                within 24 hours.
            </p>
        </form>
    );
}
