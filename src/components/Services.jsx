import { useState } from 'react';

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const services = [
        {
            name: 'E-commerce Development',
            icon: './assets/ecommerce-icon.jpg',
            description: 'Full e-commerce platforms with payments.',
            projects: [
                { 
                    name: 'FitnessGear Pro', 
                    image: './assets/fitnessgear.jpg', 
                    tech: 'Laravel 10', 
                    demo: 'https://ecommerce-tailwind.netlify.app',
                    description: 'Fitness equipment store with cart & Stripe payments'
                },
                { 
                    name: 'BookHaven Store', 
                    image: './assets/bookhaven.jpg', 
                    tech: 'WooCommerce', 
                    demo: 'https://woocommerce-bookstore.netlify.app',
                    description: 'Online bookstore with categories & search'
                },
                { 
                    name: 'PetShop DZ', 
                    image: './assets/petshop.jpg', 
                    tech: 'PHP 8.2', 
                    demo: 'https://petshop-ecommerce.vercel.app',
                    description: 'Pet supplies with inventory management'
                }
            ]
        },
        {
            name: 'Sites Vitrine Entreprises',
            icon: './assets/vitrine-icon.png',
            description: 'Professional showcase websites.',
            projects: [
                { 
                    name: 'Dentiste Moderne DZ', 
                    image: './assets/dentiste.jpg', 
                    tech: 'WordPress 6.4', 
                    demo: 'https://dental-clinic-template.netlify.app',
                    description: 'Modern dental clinic with appointment booking'
                },
                { 
                    name: 'Cabinet Juridique', 
                    image: './assets/cabinet-juridique.jpg', 
                    tech: 'HTML/CSS/JS', 
                    demo: 'https://law-firm-modern.netlify.app',
                    description: 'Professional law firm with contact forms'
                },
                { 
                    name: 'Restaurant El Bahdja', 
                    image: './assets/restaurant-bahdja.jpg', 
                    tech: 'Tailwind CSS', 
                    demo: 'https://restaurant-template-alpine.netlify.app',
                    description: 'Algerian restaurant with menu & reservation'
                },
                { 
                    name: 'Fitness Club Constantine', 
                    image: './assets/fitness-constantine.jpg', 
                    tech: 'React + Tailwind', 
                    demo: 'https://gym-react-template.vercel.app',
                    description: 'Gym website with class schedule'
                }
            ]
        },
        {
            name: 'Startup Solutions',
            icon: './assets/startup-icon.jpg',
            description: 'SaaS platforms & MVP development.',
            projects: [
                { 
                    name: 'TaskFlow Manager', 
                    image: './assets/taskflow.jpg', 
                    tech: 'Laravel + Vue', 
                    demo: 'https://task-manager-laravel.netlify.app',
                    description: 'SaaS task management with teams'
                },
                { 
                    name: 'InvoicePro DZ', 
                    image: './assets/invoicepro.jpg', 
                    tech: 'React + Node', 
                    demo: 'https://invoice-saas-template.vercel.app',
                    description: 'Invoice generator for freelancers'
                }
            ]
        },
        {
            name: 'Mobile Apps',
            icon: './assets/mobile-icon.png',
            description: 'Flutter cross-platform apps.',
            projects: [
                { 
                    name: 'FoodDelivery DZ', 
                    image: './assets/food-delivery.jpg', 
                    tech: 'Flutter 3.16', 
                    demo: 'https://food-delivery-flutter.vercel.app',
                    description: 'Restaurant delivery app prototype'
                }
            ]
        },
        {
            name: 'Business Consulting',
            icon: './assets/business-icon.jpg',
            description: 'Pitch decks & business strategy.',
            projects: [
                { 
                    name: 'Startup Pitch Deck', 
                    image: './assets/pitchdeck.jpg', 
                    tech: 'Figma Pro', 
                    demo: 'https://startup-pitchdeck-template.netlify.app',
                    description: '25-slide investor presentation template'
                },
                { 
                    name: 'Business Canvas Pro', 
                    image: './assets/business-canvas.jpg', 
                    tech: 'PowerPoint', 
                    demo: 'https://business-model-canvas.netlify.app',
                    description: 'Lean startup business model template'
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
                {services.map((service, index) => (
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

            {/* Professional Modal */}
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
                                        className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-400 hover:shadow-xl hover:-translate-y-2 transition-all duration-400 bg-white/80 dark:bg-gray-800/80 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50"
                                    >
                                        <div className="h-52 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700">
                                            <img 
                                                src={project.image} 
                                                alt={project.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 opacity-0 group-hover:opacity-100 transition-all duration-400" />
                                            <div className="absolute bottom-3 left-4 right-4 text-white">
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
                /* Custom scrollbar */
                div[style*="scrollbarColor"]::-webkit-scrollbar {
                    width: 6px;
                }
                div[style*="scrollbarColor"]::-webkit-scrollbar-track {
                    background: #f9fafb;
                    border-radius: 3px;
                }
                div[style*="scrollbarColor"]::-webkit-scrollbar-thumb {
                    background: #e5e7eb;
                    border-radius: 3px;
                }
                div[style*="scrollbarColor"]::-webkit-scrollbar-thumb:hover {
                    background: #d1d5db;
                }
            `}</style>
        </div>
    )
}
