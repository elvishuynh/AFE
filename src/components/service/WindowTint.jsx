import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';
import ServiceContactCard from '../ServiceContactCard';

const WindowTint = () => {
    useScrollRestoration();
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const expertRef = useRef(null);
    const locationRef = useRef(null);
    const imgRef = useRef(null);
    useEffect(() => {
        // Ensure all refs are current and then animate
        if (titleRef1.current ) {
            gsap.fromTo(titleRef1.current, { y: -20 }, { opacity: 1, y: 0, duration: 1 });
            gsap.fromTo(titleRef2.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
            gsap.fromTo(imgRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
            gsap.fromTo(expertRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
            gsap.fromTo(locationRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 });
        }
    }, []);
    return (
        <>
            <Helmet>
                <title>Professional Window Tinting Services | Auto Film Experts</title>
                <meta name="description" content="Enhance your vehicle with professional window tinting. UV protection, heat reduction, privacy, glare reduction. Expert window tint installation services." />
                <meta name="keywords" content="window tinting, window tint, UV protection, heat reduction, glare reduction, privacy tint, professional tinting" />
                <meta property="og:title" content="Professional Window Tinting Services | Auto Film Experts" />
                <meta property="og:description" content="Enhance your vehicle with professional window tinting. UV protection, heat reduction, privacy, glare reduction." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Professional Window Tinting Services | Auto Film Experts" />
                <meta name="twitter:description" content="Enhance your vehicle with professional window tinting. UV protection, heat reduction, privacy." />
                <link rel="canonical" href="https://autofilmsxperts.com/services/window-tinting" />
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Window Tinting Installation",
                    "description": "Professional window tinting services providing UV protection, heat reduction, privacy, and glare reduction for vehicles.",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Auto Film Experts",
                        "url": "https://autofilmsxperts.com"
                    },
                    "serviceType": "Automotive Protection",
                    "areaServed": "Local"
                })}
                </script>
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Home",
                            "item": "https://autofilmsxperts.com"
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "Services",
                            "item": "https://autofilmsxperts.com/#services"
                        },
                        {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Window Tinting",
                            "item": "https://autofilmsxperts.com/services/window-tinting"
                        }
                    ]
                })}
                </script>
            </Helmet>
            <section id="window-tint-hero" className="bg-black text-white relative font-azo-sans isolate overflow-hidden">
                <div className="pt-14">
                <div className="py-24 sm:py-32 lg:pb-40">
                    <div className="mx-auto px-6 max-w-screen-2xl">
                        <div className="mx-auto text-center max-w-2xl">
                            <p ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">Window Tinting</p>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Window tinting helps protect your vehicle's interior from harmful UV rays, reduces heat and glare, and enhances privacy, all while providing a sleek, stylish appearance.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900 my-8">Book a Tint Consultation</a>
                            </div>
                            <div className="mt-8">
                                <ServiceContactCard />
                            </div>
                        </div>
                        <div className="mt-10 sm:mt-5 lg:px-32">
                            <img ref={imgRef}
                                src="/DSC01992.webp" alt="App screenshot" className="drop-shadow-2xl w-full h-auto rounded-md shadow-white"/>
                        </div>
                    </div>
                    <section id="window-tint-benefits" className="bg-black" ref={expertRef}>
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6">
                                <p className="text-3xl text-white lg:text-4xl font-bold">Benefits:</p>
                            </div>
                            <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                                <dl className="pt-12 md:grid-cols-3 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Heat Reduction</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Window tinting can significantly reduce the amount of heat that enters your vehicle, making it more comfortable to drive and reducing the need for air conditioning.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">UV Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Tinted windows block up to 99% of harmful UV rays, protecting your skin from sun damage and preventing the vehicle's interior from fading and cracking.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Glare Reduction</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Tints reduce glare from the sun and headlights, enhancing driving visibility and reducing eye strain.</dd>
                                    </div>
                                </dl>
                                <dl className="pt-12 lg:gap-36 md:grid-cols-3 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Increased Privacy</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Tinted windows provide added privacy by making it harder for outsiders to see inside your vehicle, protecting your belongings and personal space.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Advanced Technology</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Tinted windows give your vehicle a sleek, stylish look, enhancing its overall appearance and potentially increasing its resale value.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Enhanced appearance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">These films are engineered at a microscopic level to ensure optimal performance without compromising visibility or aesthetics.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                        <a href="/contact" className="rounded-md bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors">Book a Tint Consultation</a>
                        <div className="text-xs text-gray-400 flex items-center gap-3">
                            <span className="flex items-center gap-1"><span className="text-yellow-400">★</span> 5-Star Rated</span>
                            <span>•</span>
                            <span>Lifetime Warranty</span>
                            <span>•</span>
                            <span>Premium Tint Film</span>
                        </div>
                    </div>
                    <section id="window-tint-faq" className="bg-black text-center">
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6 mb-12">
                                <h2 className="text-3xl text-white lg:text-4xl font-bold">Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-6 max-w-3xl mx-auto">
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Is window tinting legal in California?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Yes, window tinting is legal in California with specific restrictions. Front side windows must allow at least 70% light transmission, while rear windows can be darker. We ensure all installations comply with state regulations and can advise you on the legal tint options for your vehicle.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        How long does window tint installation take?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Installation time varies by vehicle type and the number of windows being tinted. Most cars take 2-4 hours for complete installation. We recommend scheduling 3-4 hours to ensure meticulous installation without rushing. The curing process takes a few days before the tint is fully set.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        What tint percentage should I choose?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        The right tint percentage depends on your needs and legal restrictions. Lighter tints (50-70%) provide subtle heat reduction while maintaining visibility. Darker tints (5-35%) offer maximum privacy and heat rejection. We can show you samples and recommend the best option based on your preferences and local laws.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Will window tint affect my visibility at night?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Quality window tint is designed to maintain visibility while reducing glare. Our premium films are engineered to reduce harsh glare without compromising night visibility. We recommend lighter tints for front windows if night driving is a concern, and darker tints for rear windows where visibility is less critical.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </section>
                    <div className="flex justify-center py-8">
                        <ServiceContactCard />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default WindowTint;
