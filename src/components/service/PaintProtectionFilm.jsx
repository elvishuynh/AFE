import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';

const PaintProtectionFilm = () => {
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
                <title>Professional PPF Installation Services | Auto Film Experts</title>
                <meta name="description" content="Protect your vehicle with premium paint protection film installation. Self-healing technology, UV protection, rock chip resistance. Expert PPF installation services." />
                <meta name="keywords" content="PPF installation, paint protection film, clear bra, vehicle protection, auto detailing, self-healing film, UV protection, rock chip protection" />
                <meta property="og:title" content="Professional PPF Installation Services | Auto Film Experts" />
                <meta property="og:description" content="Protect your vehicle with premium paint protection film. Self-healing, UV protection, rock chip resistance." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Professional PPF Installation Services | Auto Film Experts" />
                <meta name="twitter:description" content="Protect your vehicle with premium paint protection film. Self-healing, UV protection, rock chip resistance." />
                <link rel="canonical" href="https://autofilmsxperts.com/services/paint-protection-film" />
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Paint Protection Film Installation",
                    "description": "Professional PPF installation services providing self-healing, UV protection, and rock chip resistance for vehicles.",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Auto Film Experts",
                        "url": "https://autofilmsxperts.com"
                    },
                    "serviceType": "Automotive Protection",
                    "areaServed": "Local",
                    "offers": {
                        "@type": "Offer",
                        "description": "PPF installation packages from partial front to full vehicle protection"
                    }
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
                            "name": "Paint Protection Film",
                            "item": "https://autofilmsxperts.com/services/paint-protection-film"
                        }
                    ]
                })}
                </script>
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is Paint Protection Film?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Paint Protection Film (PPF) is a clear protective layer that shields your vehicle's exterior from wear and tear of everyday hazards including rock chips, scratches, and UV damage. Our premium film features self-healing technology that allows minor scratches to disappear when exposed to heat."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does PPF have self-healing capabilities?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our premium PPF features self-healing technology. Minor scratches and swirls in the film can disappear on their own when exposed to heat, such as sunlight or warm temperatures, restoring the film's clarity."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What protection does PPF provide?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "PPF provides comprehensive protection including rock chip protection, UV protection to prevent paint fading, chemical resistance against bird droppings and tree sap, and helps maintain your vehicle's paint color and shine for years."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can PPF be customized for my vehicle?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our PPF is custom-cut from large rolls to fit the specific contours and dimensions of your car's body panels, ensuring complete coverage without overlaps or gaps for a seamless appearance."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How long does PPF last?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "High-quality PPF, like what we install, typically lasts 5-10 years depending on climate conditions and maintenance. Our protective film is designed to outlast most standard vehicle paint and maintain its clarity throughout its lifespan."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is PPF installation a DIY job?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "PPF installation requires professional expertise and specialized equipment. Our experienced technicians have the skill and tools to ensure proper application, precise cutting, and bubble-free installation that guarantees optimal protection and aesthetics."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Will PPF affect my vehicle's appearance?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No, quality PPF is virtually invisible when professionally installed. It preserves your vehicle's original appearance while adding a protective layer. Available in high gloss or satin finishes to match your vehicle's existing finish."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does PPF installation cost?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "PPF costs vary based on coverage area and vehicle size. We offer packages from partial front coverage to full vehicle protection wraps. Contact us for a custom quote based on your specific vehicle and coverage needs."
                            }
                        }
                    ]
                })}
                </script>
            </Helmet>
            <section className="bg-black text-white relative font-azo-sans isolate overflow-hidden">
            
            <div className="pt-14">
                <div className="py-0 sm:py-32 lg:pb-40">
                    <div className="mx-auto px-6 max-w-screen-2xl">
                        <div className="mx-auto text-center max-w-2xl">
                            <h1 ref={titleRef1} className="text-4xl font-bold tracking-tight text-white sm:text-6xl">PAINT PROTECTION FILM</h1>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Paint protection film or clear bra helps you protect your
                                vehicle's exterior from the wear and tear of everyday hazards.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900 my-8">Get started</a>
                            </div>
                        </div>
                        <div className="mt-10 sm:mt-5 lg:px-32">
                            <img ref={imgRef}
                                src="/DSC02017.webp" alt="Paint Protection Film installation on vehicle exterior showing premium clear bra protection" className="drop-shadow-2xl w-full h-auto rounded-md shadow-white"/>
                        </div>
                    </div>
                    <section className="bg-black" ref={expertRef}>
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6">
                                <h2 className="text-3xl text-white lg:text-4xl font-bold">Benefits:</h2>
                            </div>
                            <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                                <dl className="pt-12 md:grid-cols-3 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Self Healing</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">This means that minor scratches and swirls in the film can
                                            disappear on their own when exposed to heat, such as sunlight.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">High Gloss or Satin Finish</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Unleash your vehicles full potential by matching its finish or
                                            differentiate yourself by switching up the finish.</dd>
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
                                            <p lineheight="6" className="text-base font-medium text-white">Rock Chip Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">The film acts as a barrier, absorbing the impact of small rocks
                                            and other debris that would otherwise chip the paint. This helps maintain the vehicle's appearance
                                            and prevents damage that could lead to rust or other long-term issues.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">UV Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">By blocking UV rays, PPF helps maintain the color and shine of
                                            your car's paint, keeping it looking newer for longer.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Chemical Resistance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">PPF provides a protective barrier against various chemicals, such
                                            as bird droppings, tree sap, road salts, and acid rain. These substances can be harsh on your car's
                                            paint, causing stains, etching, and corrosion.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <section className="bg-black" ref={expertRef}>
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6">
                                <p className="text-3xl text-white lg:text-4xl font-bold">Packages:</p>
                            </div>
                            <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                                <dl className="pt-12 md:grid-cols-4 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">PARTIAL FRONT</p>
                                        </dt>
                                        <img src="/partial_front.webp" alt="Partial Front Coverage" className="mt-4" />
                                        <dd className="mt-4 text-base text-gray-300e">- Partial Hood<br/>- Partial Fenders<br/>- Full Front Bumper<br/>- Mirrors</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">FULL FRONT</p>
                                        </dt>
                                        <img src="/public/full_front.webp" alt="Partial Front Coverage" className="mt-4" />
                                        <dd className="mt-4 text-base text-gray-300">- Full Hood<br/>- Full Fenders<br/>- Full Front Bumper<br/>- Mirrors</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">TRACK PACK</p>
                                        </dt>
                                        <img src="/public/track_pack.webp" alt="Partial Front Coverage" className="mt-4" />
                                        <dd className="mt-4 text-base text-gray-300">- Full Hood<br/>- Full Fenders<br/>- Full Front Bumper<br/>- Mirrors<br/>- A Pillars<br/>- Roof Edge<br/>- Rocker Panels</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">FULL PROTECTION WRAP</p>
                                        </dt>
                                        <img src="/public/full_protection.webp" alt="Partial Front Coverage" className="mt-4" />
                                        <dd className="mt-4 text-base text-gray-300">- Full Hood<br/>- Full Fenders<br/>- Full Front Bumper<br/>- Mirrors<br/>- A Pillars<br/>- Roof<br/>- Rocker Panels<br/>- Trunk<br/>- Full Quarter Panels</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <section className="bg-black">
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6 mb-12">
                                <h2 className="text-3xl text-white lg:text-4xl font-bold">Customer Testimonials</h2>
                                <p className="text-gray-400 text-lg">See what our satisfied customers have to say about their PPF installation experience.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-gray-900 rounded-lg p-8 border border-white/10 hover:border-white/20 transition">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">JM</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">James Martinez</p>
                                            <p className="text-sm text-gray-400">2023 Tesla Model 3</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        "Auto Film Experts did an incredible job with my Tesla. The PPF installation was flawless and completely invisible. My car's paint looks pristine and I have peace of mind knowing it's protected. Highly recommend!"
                                    </p>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-8 border border-white/10 hover:border-white/20 transition">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">SK</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Sarah Kim</p>
                                            <p className="text-sm text-gray-400">2022 BMW M440i</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        "I was hesitant about PPF at first, but after seeing the results, I'm so glad I went with Auto Film Experts. The protective film has already saved my paint from countless rock chips. Worth every penny!"
                                    </p>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-8 border border-white/10 hover:border-white/20 transition">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">MD</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Michael Davis</p>
                                            <p className="text-sm text-gray-400">2024 Porsche 911</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        "For a luxury vehicle like my Porsche, PPF is essential. The team at Auto Film Experts provided exceptional service and attention to detail. The full protection wrap looks perfect and invisible. Outstanding work!"
                                    </p>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-8 border border-white/10 hover:border-white/20 transition">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">AJ</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Alex Johnson</p>
                                            <p className="text-sm text-gray-400">2021 Mercedes-AMG C63</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        "The professionals here know their craft. My full protection wrap installation was perfect, and they explained everything thoroughly. I've already recommended them to all my car enthusiast friends."
                                    </p>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-8 border border-white/10 hover:border-white/20 transition">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">LC</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Lisa Chen</p>
                                            <p className="text-sm text-gray-400">2023 Lexus RX 500h</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        "I chose the partial front package and it was the best investment for my Lexus. The protection is noticeable, but the film is completely invisible. The self-healing feature is amazing!"
                                    </p>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-8 border border-white/10 hover:border-white/20 transition">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold">RP</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">Robert Peterson</p>
                                            <p className="text-sm text-gray-400">2020 Range Rover Sport</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        "The track pack option was perfect for my Range Rover. Protection where it matters most! The team was professional, on-time, and the results exceeded my expectations. Definitely coming back for ceramic coating!"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-black">
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6 mb-12">
                                <h2 className="text-3xl text-white lg:text-4xl font-bold">Frequently Asked Questions</h2>
                            </div>
                            <div className="space-y-6 max-w-3xl">
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        How long does the PPF installation take?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Installation time varies depending on the package and vehicle type. Partial front packages typically take 4-6 hours, while full protection wraps can take 8-12 hours or more. We schedule appointments to accommodate your vehicle's needs and ensure meticulous installation without rushing.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Can I remove PPF without damaging my paint?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Yes, PPF is designed to be removable without damaging your vehicle's paint. When professionally removed, it leaves no residue or damage to the original paint underneath. We recommend having professionals handle the removal to ensure the best results.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Does PPF require special maintenance?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        PPF requires minimal maintenance. Regular washing with mild soap and water is sufficient. Avoid harsh chemicals or abrasive washing methods. We recommend waiting 48 hours after installation before washing your vehicle to allow the adhesive to fully cure.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Will PPF turn yellow over time?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        High-quality PPF, like what we install, is engineered to resist yellowing and maintain clarity for 5-10 years. UV stabilizers in the film protect against discoloration. Lower-quality films may yellow, but our premium options maintain their crystal-clear appearance throughout their lifespan.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Can PPF be applied to wrapped vehicles?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        PPF can be applied over vinyl wraps, but we recommend applying it to the original paint for optimal results. If you have a wrapped vehicle, consult with our team to determine the best approach for your specific situation.
                                    </p>
                                </details>
                                <details className="group bg-gray-900 rounded-lg border border-white/10 p-6 cursor-pointer hover:border-white/20 transition">
                                    <summary className="flex items-center justify-between font-semibold text-white text-lg">
                                        Is PPF worth the investment?
                                        <span className="transition group-open:rotate-180">▼</span>
                                    </summary>
                                    <p className="text-gray-400 mt-4">
                                        Absolutely. PPF protects your vehicle's most valuable asset—its paint. When you consider the cost of paint repairs and repainting, PPF is a cost-effective investment that preserves your vehicle's appearance and resale value for years to come.
                                    </p>
                                </details>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        </>
    );
};

export default PaintProtectionFilm;
