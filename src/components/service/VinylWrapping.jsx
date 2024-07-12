import React, { useEffect, useRef } from 'react';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';

const VinylWrapping = () => {
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
                            <p ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">Vinyl Wrapping</p>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Vinyl wrapping helps protect your vehicle's original paint from scratches and minor abrasions, allows for easy customization with a variety of colors and finishes, and can be removed without damaging the underlying surface.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900">Get started</a>
                            </div>
                        </div>
                        <div className="mt-10 sm:mt-5 lg:px-32">
                            <img ref={imgRef}
                                src="/image3.webp" alt="App screenshot" className="drop-shadow-2xl w-full h-auto rounded-md shadow-white"/>
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
                                            <p lineheight="6" className="text-base font-medium text-white">Paint Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Vinyl wrap acts as a protective layer for your vehicle’s paint, shielding it from minor scratches, chips, and abrasions caused by road debris and environmental factors.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Customization</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Vinyl wraps come in a wide range of colors, textures, and finishes, including matte, gloss, satin, and metallic, allowing you to easily change your vehicle’s appearance to match your style.</dd>
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
                                            <p lineheight="6" className="text-base font-medium text-white">Cost-Effective</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Compared to a full paint job, vinyl wrapping is a more affordable option for changing your vehicle's look while still providing a high-quality finish.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Reversibility</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Vinyl wraps can be removed without damaging the original paint, making it easy to revert to your vehicle’s factory color or change to a new design whenever you want.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Versatility</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Modern vinyl wraps utilize advanced adhesive technology and high-quality vinyl materials that conform seamlessly to the contours of your vehicle. This ensures a smooth, bubble-free finish that maintains its integrity over time.</dd>
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

export default VinylWrapping;
