export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/zaki.png" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Naidja Zakaria
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Digital Product Developer & Innovator based in Algeria.</h1>
            <p className="max-w-2xl mx-auto font-Ovo">I am a software developer and entrepreneur from Constantine, Algeria.I have Master's degree in Computer Science and 3+ years of freelance experience building web apps and e-commerce solutions.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href="./assets/cv.pdf" download="Naidja_Zakaria_CV.pdf"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                    <span className="font-semibold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        My Resume
                    </span>
                    <img src="./assets/download-icon.png" alt="Download" className="w-4 dark:invert group-hover:translate-x-1 transition-transform" />
                </a>

            </div>
        </div>
    )
}