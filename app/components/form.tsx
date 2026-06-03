export default function Form() {
    <div className="bg-white shadow-xl rounded-2xl p-6 mb-8 border border-gray-100">
        <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-blue-900 text-sm font-medium mb-1">Nom i cognoms*</label>
                <input id="name" type="text" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>

            <div>
                <label htmlFor="email" className="block text-blue-900 text-sm font-medium mb-1">Correu electrònic*</label>
                <input id="email" type="email" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="phone" className="block text-blue-900 text-sm font-medium mb-1">Telèfon*</label>
                    <input id="phone" type="tel" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
                <div>
                    <label htmlFor="location" className="block text-blue-900 text-sm font-medium mb-1">Localitat</label>
                    <input id="location" type="text" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
                </div>
            </div>

            <label htmlFor="cv" className="block text-blue-900 text-sm font-medium mb-1">CV</label>
            <input id="cv" type="file" className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" />

            <div>
                <label htmlFor="message" className="block text-blue-900 text-sm font-medium mb-1">Missatge</label>
                <textarea id="message" rows={4} className="w-full p-2.5 bg-neutral-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"></textarea>
            </div>

            <button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 rounded-lg w-full shadow-lg transition-colors mt-4">
                Enviar sol·licitud
            </button>
        </form>
    </div>
}