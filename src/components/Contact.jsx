import { useState } from 'react'

export default function Contact() {
    const [copied, setCopied] = useState(false);
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setCopied(true);
        
        const formData = new FormData(event.target);
        const name = formData.get('name') || 'Visitor';
        const message = formData.get('message') || 'Hello!';
        
        const whatsappText = `*Portfolio Contact*\n\n👤 ${name}\n\n💬 ${message}`;
        
        // Copy + open WhatsApp
        await navigator.clipboard.writeText(whatsappText);
        window.open(`https://wa.me/213672357753?text=${encodeURIComponent(whatsappText)}`, '_blank');
        
        // Reset after 2s
        setTimeout(() => {
            setCopied(false);
            event.target.reset();
        }, 2000);
    };

    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('./assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none">
            <h4 className="text-center mb-2 text-lg font-Ovo">Contact WhatsApp</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Fill form → WhatsApp opens automatically → Message ready to send!
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <input type="hidden" name="subject" value="Zakaria Naidja - WhatsApp Contact" />

                <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
                    <input type="text" placeholder="Your name" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" required name="name" />
                    <input type="tel" placeholder="Your WhatsApp (optional)" className="flex-1 px-3 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white dark:bg-darkHover/30" name="whatsapp" />
                </div>
                <textarea rows="6" placeholder="Your project: e-commerce, mobile app, startup..." className="w-full px-4 py-2 focus:ring-1 outline-none border border-gray-300 dark:border-white/30 rounded-md bg-white mb-6 dark:bg-darkHover/30" required name="message"></textarea>
                
                <button type='submit' className="py-2 px-8 w-max flex items-center justify-between gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full mx-auto shadow-lg hover:shadow-xl transition-all duration-500">
                    📱 Open WhatsApp
                    <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </button>
                
                {copied && (
                    <p className='mt-4 text-center font-semibold text-green-600 animate-pulse'>
                        ✅ WhatsApp opened - Send the message!
                    </p>
                )}
            </form>
        </div>
    )
}
