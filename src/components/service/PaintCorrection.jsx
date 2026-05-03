import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';
import ServiceContactCard from '../ServiceContactCard';

const PaintCorrection = () => {
    useScrollRestoration();
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const expertRef = useRef(null);
    const locationRef = useRef(null);
    const imgRef = useRef(null);
    useEffect(() => {
        // Ensure all refs are current and then animate
        if (titleRef1.current) {
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
                <title>Professional Paint Correction Services | Auto Film Experts</title>
                <meta name="description" content="Restore your vehicle's paint to showroom quality. Remove swirl marks, scratches, oxidation. Expert paint correction services." />
                <meta name="keywords" content="paint correction, paint restoration, swirl mark removal, scratch removal, auto detailing, paint polishing" />
                <meta property="og:title" content="Professional Paint Correction Services | Auto Film Experts" />
                <meta property="og:description" content="Restore your vehicle's paint to showroom quality. Remove swirl marks, scratches, oxidation." />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Professional Paint Correction Services | Auto Film Experts" />
                <meta name="twitter:description" content="Restore your vehicle's paint to showroom quality. Remove swirl marks, scratches, oxidation." />
                <link rel="canonical" href="https://autofilmsxperts.com/services/paint-correction" />
                <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Paint Correction",
                    "description": "Professional paint correction services restoring vehicle paint to showroom quality by removing swirl marks, scratches, and oxidation.",
                    "provider": {
                        "@type": "LocalBusiness",
                        "name": "Auto Film Experts",
                        "url": "https://autofilmsxperts.com"
                    },
                    "serviceType": "Automotive Detailing",
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
                            "name": "Paint Correction",
                            "item": "https://autofilmsxperts.com/services/paint-correction"
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
                            <h1 ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">Paint Correction</h1>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-gray-300">Our Paint Correction services are designed to restore your car's finish to its original glory, leaving it looking better than ever.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900 my-8">Restore Your Paint</a>
                            </div>
                            <div className="mt-8">
                                <ServiceContactCard />
                            </div>
                        </div>
                        <div className="mt-10 max-w-lg mx-auto">
                            <img ref={imgRef}
                                src="/paint-correction-1.webp" alt="Paint Correction 1" />
                        </div>
                    </div>
                    <section className="bg-black" ref={expertRef}>
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6">
                                <p className="text-3xl text-white lg:text-4xl font-bold">Benefits:</p>
                            </div>
                            <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                                <dl className="pt-12 md:grid-cols-3 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Restores Original Beauty</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Eliminate unsightly defects like swirl marks, scratches, and oxidation to bring back the pristine, showroom look of your vehicle's paint.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Enhances Gloss and Depth</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Achieve a deep, rich shine that makes your car stand out and look more vibrant and luxurious.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Prepares for Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Provides the perfect foundation for applying paint protection film or ceramic coatings, ensuring long-lasting protection and durability.</dd>
                                    </div>
                                </dl>
                                <dl className="pt-12 lg:gap-36 md:grid-cols-3 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Improves Overall Appearance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Enhances the overall look of your vehicle, making it look newer and more well-maintained, which can also boost your confidence and pride in your car.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Removes Environmental Damage</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Effectively removes damage caused by environmental factors such as bird droppings, tree sap, and acid rain, helping to maintain the integrity and longevity of your car's paint.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Increases Resale Value</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">A flawless paint job significantly boosts your car's market value, making it more attractive to potential buyers.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <section className="bg-black" ref={expertRef}>
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6">
                                <p className="text-3xl text-white lg:text-4xl font-bold">Process:</p>
                            </div>
                            <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                                <dl className="pt-12 md:grid-cols-2 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Wash and Decontamination</p>
                                        </dt>
                                        <img src="/clay_bar.webp" alt="Partial Front Coverage" className="mt-4" style={{ height: '300px' }}/>
                                        <dd className="mt-4 text-base text-gray-300e">- Thorough hand wash<br />- Clay bar treatment<br />- Apply pH-neutral shampoos <br />- Rinse and dry with microfiber</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Paint Inspection</p>
                                        </dt>
                                        <img src="/light_inspection.webp" alt="Partial Front Coverage" className="mt-4" style={{ height: '300px' }}/>
                                        <dd className="mt-4 text-base text-gray-300">- Reveal paint imperfections <br />- Surface examination<br />- Scratch depth assessment <br />- Create tailored correction plan</dd>
                                    </div>
                                </dl>
                                <dl className="pt-12 md:grid-cols-2 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Machine Polishing</p>
                                        </dt>
                                        <img src="/buffing_polishing.webp" alt="Partial Front Coverage" className="mt-4" style={{ height: '300px' }} />
                                        <dd className="mt-4 text-base text-gray-300">- Select polishing compounds<br />- Multi-step polishing <br />- Cut, polish, finish<br />- Through inspection</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Final Touches</p>
                                        </dt>
                                        <img src="/microfiber.webp" alt="Partial Front Coverage" className="mt-4" style={{ height: '300px' }} />
                                        <dd className="mt-4 text-base text-gray-300">- Apply paint sealant<br />- Buffing for glossy finish<br />- Hydrophobic layer (optional)</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                    <div className="flex flex-col items-center justify-center py-8 gap-3">
                        <a href="/contact" className="rounded-md bg-red-600 hover:bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors">Restore Your Paint</a>
                        <div className="text-xs text-gray-400 flex items-center gap-3">
                            <span className="flex items-center gap-1"><span className="text-yellow-400">★</span> 5-Star Rated</span>
                            <span>•</span>
                            <span>Showroom Quality Results</span>
                            <span>•</span>
                            <span>Expert Technicians</span>
                        </div>
                    </div>
                    <div className="flex justify-center py-8">
                        <ServiceContactCard />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default PaintCorrection;
