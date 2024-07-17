import React, { useEffect, useRef } from 'react';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';

const CeramicCoat = () => {
    useScrollRestoration();
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const expertRef = useRef(null);
    const locationRef = useRef(null);
    const imgRef = useRef(null);
    const videoRef = useRef(null);
    // Ensure the video is loaded and then play it
    if (videoRef.current) {
        videoRef.current.load();
        videoRef.current.play();
    }
    useEffect(() => {
        // Ensure all refs are current and then animate
        if (titleRef1.current) {
            gsap.fromTo(titleRef1.current, { y: -20 }, { opacity: 1, y: 0, duration: 1 });
            gsap.fromTo(titleRef2.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
            gsap.fromTo(imgRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
            gsap.fromTo(expertRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
            gsap.fromTo(locationRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 });
        }
        return () => {
        };
    }, []);
    return (
        <section className="bg-black text-white relative font-azo-sans isolate overflow-hidden">
            <div className="pt-14">
                <div className="py-0 sm:py-32 lg:pb-40">
                    <div className="mx-auto px-6 max-w-screen-2xl">
                        <div className="mx-auto text-center max-w-2xl">
                            <p ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">Ceramic Coating</p>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Ceramic coating provides a durable, glossy shield that protects your vehicle's paint from environmental contaminants and makes it easier to clean and maintain.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900">Get started</a>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-stretch space-y-4 sm:space-y-0 sm:space-x-4 mt-10">
                            <div className="sm:w-1/3 w-full overflow-hidden rounded-lg">
                                <img src="/shop6.webp" alt="Partial Front Coverage" className="min-w-full min-h-full h-auto object-cover object-center" />
                            </div>
                            <section>
                                <video ref={videoRef} src="/afe_tiktok.mp4" controls autoPlay muted />
                            </section>
                            <div className="sm:w-1/3 w-full overflow-hidden rounded-lg">
                                <img src="/shop7.webp" alt="Partial Front Coverage" className="min-w-full min-h-full h-auto object-cover object-center" />
                            </div>
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
                                            <p lineheight="6" className="text-base font-medium text-white">Enhanced Durability</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Ceramic coating provides a long-lasting protective layer that resists scratches, chemical stains, and oxidation, ensuring your vehicle's paint remains pristine for years.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Hydrophobic Properties</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Water beads up and rolls off, taking dirt and grime with it. This makes washing your vehicle easier and less frequent.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">UV Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Protect your vehicle's paint from harmful UV rays, which can cause fading and oxidation over time. Helps to maintain your car's color and shine.</dd>
                                    </div>
                                </dl>
                                <dl className="pt-12 lg:gap-36 md:grid-cols-3 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Chemical Resistance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">The coating provides a robust shield against various chemicals, such as bird droppings, tree sap, and road salts, which can otherwise damage the paint.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Ease of Cleaning</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">The smooth, non-stick surface of a ceramic coating makes it easier to remove dirt, grime, and contaminants, reducing the effort and time required to keep your car clean.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Nanotechnology</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">This technology ensures that the coating bonds at a molecular level, filling in the microscopic imperfections in the paint. This results in a smoother, more uniform surface.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl">
                            <div className="space-y-6">
                                <p className="text-3xl text-white lg:text-4xl font-bold">Additional options:</p>
                            </div>
                            <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                                <dl className="pt-12 md:grid-cols-2 lg:gap-36 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Interior Coating</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Ceramic coating for the interior of your car is a protective treatment that forms a durable, long-lasting layer over your car’s surfaces. This advanced coating is applied to materials such as leather, fabric, vinyl, and plastic, offering enhanced protection and aesthetic appeal.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Window Coating</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white"> Ceramic coating for your car's windows is a cutting-edge treatment that provides a protective layer to the glass surfaces of your vehicle. This advanced coating enhances visibility, durability, and overall performance of your windows.</dd>
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

export default CeramicCoat;
