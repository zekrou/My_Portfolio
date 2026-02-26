import { useState } from 'react';

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const services = [
        {
            name: 'WordPress Sites',
            icon: 'https://cdn-icons-png.flaticon.com/512/174/174881.png',
            description: 'Professional WordPress websites for businesses.',
            projects: [
                {
                    name: 'Bike Shop',
                    image: './public/assets/sites/Bike.png',
                    tech: 'WordPress + Elementor',
                    demo: 'https://xtratheme.com/elementor/bike-shop/',
                    description: 'Modern bike shop with products & e-commerce'
                },
                {
                    name: 'Investment Firm',
                    image: './public/assets/sites/invest.png',
                    tech: 'WordPress + Elementor',
                    demo: 'https://xtratheme.com/elementor/investment/',
                    description: 'Professional investment & finance website'
                },
                {
                    name: 'Restaurant',
                    image: './public/assets/sites/resto.png',
                    tech: 'WordPress + Elementor',
                    demo: 'https://xtratheme.com/elementor/restaurant-2/',
                    description: 'Elegant restaurant with menu & reservation'
                },
                {
                    name: 'Kids Store',
                    image: './public/assets/sites/kids.png',
                    tech: 'WordPress + Elementor',
                    demo: 'https://xtratheme.com/elementor/kids-2/',
                    description: 'Colorful kids store with products & activities'
                },
                {
                    name: 'Café',
                    image: './public/assets/sites/caffe.png',
                    tech: 'WordPress + Elementor',
                    demo: 'https://xtratheme.com/elementor/cafe/',
                    description: 'Cozy café with menu & online ordering'
                }
            ]
        },
        {
            name: 'WooCommerce Stores',
            icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968933.png',
            description: 'Full e-commerce stores with WooCommerce.',
            projects: [
                {
                    name: 'Kidora Kids Store',
                    image: './public/assets/sites/Kiddora.png',
                    tech: 'WooCommerce + Elementor',
                    demo: 'https://spadethemes.com/kidora/',
                    description: 'Kids fashion store with cart & checkout'
                },
                {
                    name: 'Storelio Shop',
                    image: './public/assets/sites/storlio.png',
                    tech: 'WooCommerce + Gutenberg',
                    demo: 'https://demo.gutenmate.com/storelio/shop/?template=pattern-archive-product-4',
                    description: 'Modern general store with product filters'
                },
                {
                    name: 'Groceria Market',
                    image: './public/assets/sites/groceria.png',
                    tech: 'WooCommerce + React',
                    demo: 'https://groceria.madrasthemes.com/',
                    description: 'Online grocery store with categories & cart'
                },
                {
                    name: 'QuickMart Store',
                    image: './public/assets/sites/quickmart.png',
                    tech: 'WooCommerce + Elementor',
                    demo: 'https://spadethemes.com/quickmart/',
                    description: 'Multi-vendor marketplace with fast checkout'
                }
            ]
        },
        {
            name: 'Flutter Mobile Apps',
            icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
            description: 'Cross-platform mobile apps with Flutter.',
            projects: [
                {
                    name: 'Vigor Fitness App',
                    image: './public/assets/sites/app1.png',
                    tech: 'Flutter PWA',
                    demo: 'https://up2client.com/envato/vigor-pwa/Previewpage/index.html?storefront=envato-elements',
                    description: 'Fitness & workout tracking app with dark UI'
                },
                {
                    name: 'Ombe Coffee App',
                    image: './public/assets/sites/app2.png',
                    tech: 'Flutter 3.x',
                    demo: 'https://ombe.dexignzone.com/welcome.html',
                    description: 'Coffee shop ordering app with smooth UI'
                },
                {
                    name: 'WeDo Task App',
                    image: './public/assets/sites/app3.png',
                    tech: 'Flutter + Firebase',
                    demo: 'https://wedo.dexignzone.com/welcome.html',
                    description: 'Task management app with teams & projects'
                }
            ]
        }
    ];

    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Digital Product Developer - Constantine, Algeria
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                {services.map((service) => (
                    <div
                        key={service.name}
                        className="group border border-gray-300/50 dark:border-white/30 rounded-xl p-6 hover:shadow-lg hover:-translate-y-2 cursor-pointer duration-500 bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50"
                        onClick={() => {
                            setSelectedService(service);
                            setIsOpen(true);
                        }}
                    >
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 duration-300">
                            <img src={service.icon} alt={service.name} className="w-9" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center group-hover:text-indigo-600">{service.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 text-center leading-5">{service.description}</p>
                        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-2 duration-300">
                            {service.projects.length} Projects
                            <img src="./assets/right-arrow.png" alt="" className="w-4" />
                        </div>
                    </div>
                ))}
            </div>

            {isOpen && selectedService && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col border dark:border-gray-700" onClick={(e) => e.stopPropagation()}>
                        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-gray-900/95">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedService.name}</h2>
                                <span className="text-sm text-gray-500">{selectedService.projects.length} professional projects</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 text-xl text-gray-500 hover:text-gray-900 dark:text-gray-400">
                                ×
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e5e7eb #f9fafb' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {selectedService.projects.map((project, index) => (
                                    <a
                                        key={index}
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
                                    >
                                        <div className="h-52 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = `https://placehold.co/800x500/6366f1/white?text=${encodeURIComponent(project.name)}`;
                                                }}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                            <div className="absolute bottom-3 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <h4 className="font-bold text-lg mb-1 drop-shadow-lg">{project.name}</h4>
                                                <p className="text-sm opacity-90 drop-shadow-lg">{project.description}</p>
                                            </div>
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded-lg">{project.tech}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Live Project</span>
                                                <div className="flex items-center gap-1 text-indigo-600 font-semibold group-hover:translate-x-2 transition-all">
                                                    Visit
                                                    <img src="./assets/right-arrow.png" alt="" className="w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                div[style*="scrollbarColor"]::-webkit-scrollbar { width: 6px; }
                div[style*="scrollbarColor"]::-webkit-scrollbar-track { background: #f9fafb; border-radius: 3px; }
                div[style*="scrollbarColor"]::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 3px; }
                div[style*="scrollbarColor"]::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
            `}</style>
        </div>
    );
}