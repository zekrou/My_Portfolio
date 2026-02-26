export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <div className="w-max flex items-center gap-2 mx-auto mb-4">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="mailto:zakaria.naidja@univ-constantine2.dz" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        zakaria.naidja@univ-constantine2.dz
                    </a>
                </div>

                <div className="w-max flex items-center gap-2 mx-auto mb-8">
                    <img src="./assets/phone_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/phone_icon_dark.png" alt="" className="w-5 hidden dark:block" />
                    <a href="tel:+213672357753" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        +213 672 357 753
                    </a>
                </div>

                <div className="flex items-center justify-center gap-6">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/zakaria-naidja" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>

                    {/* Facebook Page DzNishida */}
                    <a href="https://web.facebook.com/DzNishida" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>

                    {/* Facebook Personnel */}
                    <a href="https://web.facebook.com/profile.php?id=61587947762203" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-400/25">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/213672357753" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                        </svg>
                    </a>
                </div>

            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400/50 mx-[10%] mt-16 py-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Zakaria Naidja | Digital Product Developer & CEO taQseet | Constantine, Algérie
                </p>
                <ul className="flex items-center gap-8 justify-center mt-4 sm:mt-0">
                    <li><a href="#services" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a></li>
                    <li><a href="https://www.linkedin.com/in/zakaria-naidja" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">LinkedIn</a></li>
                    <li><a href="mailto:zakaria.naidja@univ-constantine2.dz" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
