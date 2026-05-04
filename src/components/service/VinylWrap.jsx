import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';
import ServiceContactCard from '../ServiceContactCard';

const VinylWrap = () => {
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
                <title>Professional Vinyl Wrapping Services | Auto Film Experts</title>
                <meta name="description" content="Transform your vehicle with custom vinyl wrapping. Paint protection, endless color options, reversible design. Expert vinyl wrap installation services." />
                <meta name="keywords" content="vinyl wrapping, vehicle wrap, custom vinyl, paint protection, car customization, reversible wrap, matte finish, gloss finish" />
                <meta property="og:title" content="Professional Vinyl Wrapping Services | Auto Film Experts" />
                <meta property="og:description" content="Transform your vehicle with custom vinyl wrapping. Paint protection, endless color options, reversible design." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Professional Vinyl Wrapping Services | Auto Film Experts" />
                <meta name="twitter:description" content="Transform your vehicle with custom vinyl wrapping. Paint protection, endless color options." />
                <link rel="canonical" href="https://autofilmsxperts.com/services/vinyl-wrapping" />
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Vinyl Wrapping Installation",
                    "description": "Professional vinyl wrap installation services providing paint protection, customization, and reversible design for vehicles.",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Auto Film Experts",
                        "url": "https://autofilmsxperts.com"
                    },
                    "serviceType": "Automotive Customization",
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
                            "name": "Vinyl Wrapping",
                            "item": "https://autofilmsxperts.com/services/vinyl-wrapping"
                        }
                    ]
                })}
                </script>
            </Helmet>
            <section id="vinyl-wrap-hero" className="bg-black text-white relative font-azo-sans isolate overflow-hidden">
                <div className="pt-14">
                <div className="py-0 sm:py-32 lg:pb-40">
                    <div className="mx-auto px-6 max-w-screen-2xl">
                        <div className="mx-auto text-center max-w-2xl">
                            <p ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">Vinyl Wrapping</p>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Vinyl wrapping helps protect your vehicle's original paint from scratches and minor abrasions, allows for easy customization with a variety of colors and finishes, and can be removed without damaging the underlying surface.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900 my-8">Plan Your Custom Wrap</a>
                            </div>
                            <div className="mt-8">
                                <ServiceContactCard />
                            </div>
                        </div>
                        <div className="mt-10 max-w-lg mx-auto">
                            <img ref={imgRef}
                                src="/image3.webp" alt="App screenshot" className="drop-shadow-2xl w-full h-auto rounded-md shadow-white"/>
                        </div>
                    </div>
                    <section id="vinyl-wrap-benefits" className="bg-black" ref={expertRef}>
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6">
                                <p className="text-3xl text-white lg:text-4xl font-bold">Benefits:</p>
                            </div>
                            <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                                <dl className="pt-12 md:grid-cols-3 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Paint Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Vinyl wrap acts as a protective layer for your vehicle’s paint, shielding it from minor scratches, chips, and abrasions caused by road debris and environmental factors.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Customization</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Vinyl wraps come in a wide range of colors, textures, and finishes, including matte, gloss, satin, and metallic, allowing you to easily change your vehicle’s appearance to match your style.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Personalized For Your Vehicle</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Custom-cut from large rolls to fit the specific contours and
                                            dimensions of your car's body panels. This precision ensures that the film covers the entire desired
                                            area without unnecessary overlaps or gaps.</dd>
                                    </div>
                                </dl>
                                <dl className="pt-12 lg:gap-36 md:grid-cols-3 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Cost-Effective</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Compared to a full paint job, vinyl wrapping is a more affordable option for changing your vehicle's look while still providing a high-quality finish.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Reversibility</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Vinyl wraps can be removed without damaging the original paint, making it easy to revert to your vehicle’s factory color or change to a new design whenever you want.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Versatility</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Modern vinyl wraps utilize advanced adhesive technology and high-quality vinyl materials that conform seamlessly to the contours of your vehicle. This ensures a smooth, bubble-free finish that maintains its integrity over time.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                        <a href="/contact" className="rounded-md bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors">Plan Your Custom Wrap</a>
                        <div className="text-xs text-gray-400 flex items-center gap-3">
                            <span className="flex items-center gap-1"><span className="text-yellow-400">★</span> 5-Star Rated</span>
                            <span>•</span>
                            <span>Premium Vinyl Materials</span>
                            <span>•</span>
                            <span>Professional Installation</span>
                        </div>
                    </div>
                    <section id="vinyl-wrap-faq" className="bg-black text-center">
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6 mb-12">
                                <h2 className="text-3xl text-white lg:text-4xl font-bold">Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-6 max-w-3xl mx-auto">
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        How long does vinyl wrap installation take?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Full vehicle wraps typically take 3-5 days depending on the vehicle size and complexity. Partial wraps can be completed in 1-2 days. We take the time needed for meticulous installation without rushing, ensuring a flawless finish that meets our quality standards.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Can vinyl wrap be removed without damaging paint?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Yes, quality vinyl wrap can be removed without damaging the original paint when installed and removed professionally. Our wraps use premium adhesive that doesn't leave residue. We recommend professional removal to ensure the best results and protect your vehicle's paint.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        What colors and finishes are available?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        We offer hundreds of colors and finishes including matte, gloss, satin, metallic, chrome, carbon fiber, and custom printed designs. You can choose from manufacturer color matches or create completely custom looks. Our team can help you select the perfect finish for your vision.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        How long does vinyl wrap last?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Our premium vinyl wraps typically last 5-7 years with proper care. Longevity depends on factors like climate, parking conditions, and maintenance. We provide care instructions to maximize your wrap's lifespan. The wrap can be replaced when needed, allowing you to change your vehicle's look over time.
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

export default VinylWrap;
