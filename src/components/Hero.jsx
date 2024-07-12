// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    // Refs for elements
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const expertRef = useRef(null);
    const locationRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        // Ensure all refs are current and then animate
        if (titleRef1.current && titleRef2.current && expertRef.current && locationRef.current) {
            gsap.fromTo(titleRef1.current, { y: -20 }, { opacity: 1, y: 0, duration: 1 });
            gsap.fromTo(titleRef2.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
            gsap.fromTo(imgRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
            gsap.fromTo(expertRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
            gsap.fromTo(locationRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 });
        }
    }, []);

    return (
        <section id="hero" className="container mx-auto h-full md:h-screen flex flex-col justify-center items-center pt-0 lg:pt-52 pb-2 md:pb-16 lg:pb-24 static text-white">
            <h1 ref={titleRef1} className="text-3xl sm:text-4xl md:text-5xl font-azo-sans font-bold pb-8 text-center opacity-0">
                AUTO FILM EXPERTS
            </h1>
            <h2 ref={titleRef2} className="font-azo-sans text-center font-normal mb-10 text-3xl md:text-3xl z-10 opacity-0">
                Protect Your Paint Elevate Your Drive.
            </h2>
            <img ref={imgRef} src="./DSC01996.webp" alt="Background" className="opacity-0 relative max-w-full max-h-full rounded-lg z-0" />
            <div className="w-full flex flex-col justify-evenly items-center py-8 text-3xl md:text-3xl z-10 space-y-4 md:space-y-0 md:space-x-8">
                <p ref={expertRef} className="py-4font-azo-sans text-center md:text-left font-normal opacity-0">
                    1208 N Gaffey St, San Pedro, CA 90731
                </p>
                <p ref={locationRef} className="py-4 font-azo-sans text-center md:text-right font-normal opacity-0">
                    (310) 346-0336 
                </p>
            </div>
        </section>
    );
};

export default Hero;
