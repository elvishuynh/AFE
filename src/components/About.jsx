// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { scroller } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
    const titleRef = useRef(null);
    const expertRef = useRef(null);
    const locationRef = useRef(null);
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);

    useEffect(() => {
        const titleSplit = new SplitText(titleRef.current, { type: "chars" });
        const chars = titleSplit.chars; // Array of characters
        gsap.fromTo(chars, { opacity: 0, y: 20 }, {
            opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power2.out',
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top bottom',
                end: 'bottom top',
                toggleActions: 'play none none none',
                markers: false
            }
        });

        const triggers = [
            { ref: expertRef, delay: 0.5 },
            { ref: locationRef, delay: 1 }
        ];

        triggers.forEach(({ ref, delay }) => {
            gsap.fromTo(ref.current, { opacity: 0, y: -20 }, {
                opacity: 1, y: 0, duration: 1, delay,
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none none none',
                    markers: false
                }
            });
        });

        const images = [
            { ref: imgRef1, y: 50 },
            { ref: imgRef2, y: -50 },
            { ref: imgRef3, y: 50 }
        ];

        images.forEach(({ ref, y }) => {
            gsap.fromTo(ref.current, { opacity: 0, y }, {
                opacity: 1, y: 0, duration: 1, ease: 'power2.out',
                scrollTrigger: {
                    trigger: ref.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    toggleActions: 'play none none none',
                    markers: false
                }
            });
        });
    }, []);

    return (
        <section id="about" className="container mx-auto text-white">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-azo-sans font-bold py-8 text-center">
                About Us
            </h1>  
            <p ref={expertRef} className="text-base sm:text-xl md:text-2xl text-center py-5">
            Welcome to Auto Film Experts, where automotive excellence meets unrivaled protection and style. At the forefront of innovation in the automotive industry, we specialize in Paint Protection Film, Vinyl Wraps, Ceramic Coating, and Tinting Services that redifine vehicle aesthetics and safeguard against the elements.
            </p>
            <p ref={locationRef} className="text-base sm:text-xl md:text-2xl text-center py-5">
            Our passion and commitment to quality craftsmanship make us the go-to destination for enthusiasts who demand nothing but the best for their vehicles. Step into a world where cutting-edge technology meets automotive artistry, and let us elevate your driving experience.
            </p>
            <div className="flex justify-between items-center py-10 w-full mt-5">
                <img ref={imgRef1} src="./shop1.webp" alt="Shop 1" className="w-1/3 rounded-l-lg" />
                <img ref={imgRef2} src="./DSC01999.webp" alt="Shop 3" className="w-1/3" /> 
                <img ref={imgRef3} src="./shop4.webp" alt="Shop 4" className="w-1/3 rounded-r-lg" />
            </div>
        </section>
    );
};

export default About;
