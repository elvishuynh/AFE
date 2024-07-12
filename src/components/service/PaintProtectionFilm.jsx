import React, { useEffect, useRef } from 'react';
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
        <section className="bg-black text-white relative font-azo-sans isolate overflow-hidden">
            
            <div className="pt-14">
                <div className="py-0 sm:py-32 lg:pb-40">
                    <div className="mx-auto px-6 max-w-screen-2xl">
                        <div className="mx-auto text-center max-w-2xl">
                            <p ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">PAINT PROTECTION FILM</p>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Paint protection film or clear bra helps you protect your
                                vehicle's exterior from the wear and tear of everyday hazards.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900">Get started</a>
                            </div>
                        </div>
                        <div className="mt-10 sm:mt-5 lg:px-32">
                            <img ref={imgRef}
                                src="/DSC02017.webp" alt="App screenshot" className="drop-shadow-2xl w-full h-auto rounded-md shadow-white"/>
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
                                            <p lineheight="6" className="text-base font-medium text-white">Self Healing</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">This means that minor scratches and swirls in the film can
                                            disappear on their own when exposed to heat, such as sunlight.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">High Gloss or Satin Finish</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Unleash your vehicles full potential by matching its finish or
                                            differentiate yourself by switching up the finish.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Personalized For Your Vehicle</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Custom-cut from large rolls to fit the specific contours and
                                            dimensions of your car's body panels. This precision ensures that the film covers the entire desired
                                            area without unnecessary overlaps or gaps.</dd>
                                    </div>
                                </dl>
                                <dl className="pt-12 lg:gap-36 md:grid-cols-3 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Rock Chip Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">The film acts as a barrier, absorbing the impact of small rocks
                                            and other debris that would otherwise chip the paint. This helps maintain the vehicle's appearance
                                            and prevents damage that could lead to rust or other long-term issues.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">UV Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">By blocking UV rays, PPF helps maintain the color and shine of
                                            your car's paint, keeping it looking newer for longer.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Chemical Resistance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">PPF provides a protective barrier against various chemicals, such
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
                                        <dd className="mt-4 text-base text-white">- Partial Hood<br/>- Partial Fenders<br/>- Full Front Bumper<br/>- Mirrors</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">FULL FRONT</p>
                                        </dt>
                                        <img src="/public/full_front.webp" alt="Partial Front Coverage" className="mt-4" />
                                        <dd className="mt-4 text-base text-white">- Full Hood<br/>- Full Fenders<br/>- Full Front Bumper<br/>- Mirrors</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">TRACK PACK</p>
                                        </dt>
                                        <img src="/public/track_pack.webp" alt="Partial Front Coverage" className="mt-4" />
                                        <dd className="mt-4 text-base text-white">- Full Hood<br/>- Full Fenders<br/>- Full Front Bumper<br/>- Mirrors<br/>- A Pillars<br/>- Roof Edge<br/>- Rocker Panels</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">FULL PROTECTION WRAP</p>
                                        </dt>
                                        <img src="/public/full_protection.webp" alt="Partial Front Coverage" className="mt-4" />
                                        <dd className="mt-4 text-base text-white">- Full Hood<br/>- Full Fenders<br/>- Full Front Bumper<br/>- Mirrors<br/>- A Pillars<br/>- Roof<br/>- Rocker Panels<br/>- Trunk<br/>- Full Quarter Panels</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
        
    );
};

export default PaintProtectionFilm;
