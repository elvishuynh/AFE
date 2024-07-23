import React, { useEffect, useRef } from 'react';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';

const StarsCeiling = () => {
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
        <section className="bg-black text-white relative font-azo-sans isolate overflow-hidden container mx-auto px-6 md:px-12 lg:px-24 xl:px-48">
            
            <div className="pt-14">
                <div className="py-0 sm:py-32 lg:pb-40">
                    <div className="mx-auto px-6 max-w-screen-2xl">
                        <div className="mx-auto text-center max-w-2xl">
                            <p ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">Stars in the Ceiling</p>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Enhance your vehicle's interior ambiance with a stunning starry sky effect, creating a luxurious and calming atmosphere.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900 my-8">Get started</a>
                            </div>
                        </div>
                        <div className="mt-10 max-w-lg mx-auto">
                            <img ref={imgRef}
                                src="https://images.unsplash.com/photo-1687634366063-fafb136751b8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="App screenshot" className="drop-shadow-2xl w-full h-auto rounded-md shadow-white"/>
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
                                            <p lineheight="6" className="text-base font-medium text-white">Luxurious Ambiance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Adding a stars in the ceiling feature gives your vehicle's interior a high-end, opulent feel, similar to that found in luxury cars, enhancing the overall driving experience.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Customizable Lighting</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">Customizable lighting options, allowing you to change the color, brightness, and even the pattern of the stars to suit your mood and preferences.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Calming Effect</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-gray-300">The soft, twinkling lights can create a soothing and relaxing environment, making your drives more enjoyable and reducing stress.</dd>
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

export default StarsCeiling;
