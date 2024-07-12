import React, { useEffect, useRef } from 'react';
import useScrollRestoration from '../../hooks/useScrollRestoration';
import gsap from 'gsap';

const BrakeCaliper = () => {
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
                            <p ref={titleRef1} className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white">Brake Caliper Paint</p>
                            <p ref={titleRef2} lineheight="8" className="mt-6 text-lg text-white">Brake caliper paint enhances the appearance of your vehicle's brake calipers while providing protection against rust, corrosion, and high temperatures.</p>
                            <div className="mt-10 items-center justify-center flex gap-x-6">
                                <a ref={titleRef1} href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm
                                    hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                                    focus-visible:outline-gray-900">Get started</a>
                            </div>
                        </div>
                        <div className="mt-10 sm:mt-5 lg:px-32">
                            <img ref={imgRef}
                                src="https://images.unsplash.com/photo-1625299961965-6d57db637628?q=80&w=5187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="App screenshot" className="drop-shadow-2xl w-full h-auto rounded-md shadow-white"/>
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
                                            <p lineheight="6" className="text-base font-medium text-white">Aesthetic Enhancement</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Painting your brake calipers adds a pop of color and a sporty look to your vehicle, enhancing its overall appearance and making it stand out.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Rust and Corrosion Protection</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">The paint acts as a protective barrier against rust and corrosion, extending the life of your brake calipers by preventing damage from moisture and road salt.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Heat Resistance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Brake caliper paint is specially formulated to withstand the high temperatures generated by braking, ensuring that the color remains vibrant and does not peel or discolor over time.</dd>
                                    </div>
                                </dl>
                                <dl className="pt-12 lg:gap-36 md:grid-cols-3 text-lg border-t border-white/10 grid grid-cols-1 gap-12">
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Advanced Formulation</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Advanced formulations that include ceramic resins and heat-resistant compounds. This technology ensures superior adhesion, long-lasting color retention, and resistance to chipping and fading, even under extreme braking conditions.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Easy Maintenance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Painted calipers are easier to clean and maintain compared to unpainted ones, as the smooth painted surface repels brake dust and grime more effectively.</dd>
                                    </div>
                                    <div>
                                        <dt className="items-center inline-flex gap-4">
                                            <p lineheight="6" className="text-base font-medium text-white">Customizable Appearance</p>
                                        </dt>
                                        <dd className="mt-4 text-base text-white">Available in a variety of colors and finishes, brake caliper paint allows you to personalize your vehicle’s look to match your style or the overall design theme of your car.</dd>
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

export default BrakeCaliper;
