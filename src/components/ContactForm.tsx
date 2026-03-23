export default function ContactForm() {
    return (
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary"
                            id="name"
                            placeholder="John Doe"
                            type="text"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary"
                            id="phone"
                            placeholder="+66 ..."
                            type="tel"
                        />
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary"
                        id="email"
                        placeholder="john@company.com"
                        type="email"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="type"
                        >
                            Floor Type
                        </label>
                        <select
                            className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary"
                            id="type"
                        >
                            <option>Vinyl / PVC</option>
                            <option>Terrazzo / Stone</option>
                            <option>Epoxy</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="size"
                        >
                            Area Size (Sqm)
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary"
                            id="size"
                            placeholder="e.g. 500"
                            type="number"
                        />
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        className="w-full rounded-lg border-gray-300 bg-white py-2.5 px-3 text-sm focus:border-primary focus:ring-primary"
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={3}
                    ></textarea>
                </div>
                <button
                    className="w-full rounded-lg bg-primary py-3 px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                    type="submit"
                >
                    Request Free Quote
                </button>
            </form>
        </div>
    );
}
