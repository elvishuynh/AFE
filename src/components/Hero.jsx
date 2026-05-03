import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
    // Refs for elements
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const expertRef = useRef(null);
    const imgRef = useRef(null);
    const ctaRef = useRef(null);
    const trustRef = useRef(null);

    // Carousel state
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel images - configure your images here
    const carouselImages = [
        [
            './DSC01996.webp',
            './shop6.webp',
            './shop7.webp'
        ],
        [
            './DSC01974.webp',
            './DSC01999.webp',
            './shop4.webp'
        ],
        [
            './DSC02017.webp',
            './image1.webp',
            './image2.webp'
        ]
    ];

    // Auto-transition every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    useEffect(() => {
        // Ensure all refs are current and then animate
        if (titleRef1.current && titleRef2.current && expertRef.current) {
            gsap.fromTo(titleRef1.current, { y: -20 }, { opacity: 1, y: 0, duration: 1 });
            gsap.fromTo(titleRef2.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
            gsap.fromTo(imgRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
            gsap.fromTo(expertRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2 });
            gsap.fromTo(ctaRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 2.5 });
            gsap.fromTo(trustRef.current, { y: -20 }, { opacity: 1, y: 0, duration: 1, delay: 3 });
        }
    }, []);

    return (
        <section id="hero" className="container mx-auto h-full md:h-screen flex flex-col justify-center items-center pt-0 pb-2 md:pb-12 lg:pb-24 static text-white px-6 md:px-12 lg:px-24 xl:px-48">
            <h1 id="hero-title" ref={titleRef1} className="text-3xl sm:text-4xl md:text-5xl font-azo-sans font-bold pb-8 text-center opacity-0">
                AUTO FILM EXPERTS
            </h1>
            <h2 id="hero-subtitle" ref={titleRef2} className="font-azo-sans text-center font-normal mb-10 text-3xl md:text-3xl z-10 opacity-0">
                Protect Your Paint Elevate Your Drive
            </h2>
            <div id="hero-carousel" className="relative w-full overflow-hidden">
                <div id="hero-carousel-track" className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {carouselImages.map((slide, slideIndex) => (
                        <div key={slideIndex} id={`hero-slide-${slideIndex}`} className="w-full flex-shrink-0 flex gap-4 justify-center">
                            {slide.map((image, imageIndex) => (
                                <div key={`${slideIndex}-${imageIndex}`} id={`hero-image-${slideIndex}-${imageIndex}`} className="w-1/2">
                                    <img src={image} alt={`Hero Image ${slideIndex}-${imageIndex}`} className="w-full h-96 object-cover rounded-lg" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div id="carousel-dots" className="flex justify-center gap-2 mt-4">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-red-600' : 'bg-gray-500'}`}
                        />
                    ))}
                </div>
            </div>
            <div id="hero-welcome" className="w-full flex flex-col justify-evenly items-center py-8 text-3xl md:text-3xl z-10 space-y-4 md:space-y-0 md:space-x-8">
                <p ref={expertRef} className="mt-10 font-azo-sans text-center text-gray-300 font-normal opacity-0">
                    Welcome to Auto Film Experts, where automotive excellence meets unrivaled protection and style. <br />
                </p>
            </div>
            <div id="hero-ctas" ref={ctaRef} className="flex flex-col md:flex-row gap-4 mt-8 opacity-0">
                <a href="/contact" className="bg-red-600 hover:bg-red-700 text-white font-azo-sans font-bold py-3 px-8 rounded-lg text-center transition-colors">
                    Get a Free Quote
                </a>
                <a href="tel:3103460336" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-azo-sans font-bold py-3 px-8 rounded-lg text-center transition-colors">
                    Call (310) 346-0336
                </a>
            </div>
            <div id="hero-trust" ref={trustRef} className="mt-6 text-center text-gray-400 text-sm opacity-0">
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
                    <p>Professional Installation • Premium Materials • San Pedro, CA</p>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-xs">
                    <span className="flex items-center gap-1">
                        <span className="text-yellow-400">★</span> 5-Star Rated
                    </span>
                    <span>•</span>
                    <span>Lifetime Warranty on PPF</span>
                    <span>•</span>
                    <span>5-Year Ceramic Coating Warranty</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
