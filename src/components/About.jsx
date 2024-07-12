// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
    const titleRef = useRef(null);
    const expertRef = useRef(null);
    const locationRef = useRef(null);
    const locationRef1 = useRef(null);
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
            { ref: locationRef, delay: 1 },
            { ref: locationRef1, delay: 1.5 },
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
        <section id="about" className="h-screen flex flex-col justify-evenly items-center p-10 text-white">
            <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-azo-sans font-bold py-8 text-center ">
                About Us
            </h1>  
            <p ref={expertRef} className="text-3xl text-center py-5">
            Welcome to Auto Film Experts, where automotive excellence meets unrivaled protection and style. At the forefront of innovation in the automotive industry, we specialize in Paint Protection Film, Vinyl Wraps, Ceramic Coating, and Tinting Services that redifine vehicle aesthetics and safeguard against the elements.
            </p>
            <p ref={locationRef} className="text-3xl text-center py-5">
            Our passion and commitment to quality craftsmanship make us the go-to destination for enthusiasts who demand nothing but the best for their vehicles. Step into a world where cutting-edge technology meets automotive artistry, and let us elevate your driving experience.
            </p>
            <p ref={locationRef1} className="text-3xl text-centser py-5">
                We believe in building lasting relationships with our customers, founded on trust, integrity, and transparent communication. Our team is always ready to answer your questions, provide expert advice, and guide you through the process of transforming your vehicle.
            </p>
            <div className="flex justify-between items-center w-full mt-5">
                <img ref={imgRef1} src="./shop1.webp" alt="Shop 1" className="w-1/3 rounded-l-lg" />
                <img ref={imgRef2} src="./DSC01999.webp" alt="Shop 3" className="w-1/3" /> 
                <img ref={imgRef3} src="./shop4.webp" alt="Shop 4" className="w-1/3 rounded-r-lg" />
            </div>
        </section>
    );
};

export default About;
