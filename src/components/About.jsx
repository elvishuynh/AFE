// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import EmbedGoogleMaps from './EmbedGoogleMaps';

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
    const titleRef = useRef(null);
    const expertRef1 = useRef(null);
    const expertRef2 = useRef(null);
    const locationRef = useRef(null);
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    const declarationRef = useRef(null);
    const chooseRef = useRef(null);


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
            { ref: expertRef1, delay: 0.5 },
            { ref: expertRef2, delay: 0.75 },
            { ref: locationRef, delay: 1 },
            { ref: chooseRef, delay: .75 },
            { ref: declarationRef, delay: 1 }
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
        <section id="about" className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-48 border-t border-white/10">
            <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl font-azo-sans font-bold py-8 text-center">
                About Us
            </h1>
            <section>
                <p ref={expertRef1} className="text-gray-300 text-sm sm:text-base md:text-xl text-center py-5 px-24">
                    At the forefront of innovation in the automotive industry, we specialize in Paint Protection Film, Vinyl Wraps, Ceramic Coating, and Tinting Services that redifine vehicle aesthetics and safeguard against the elements.
                </p>
                <p ref={expertRef2} className="text-gray-300 text-sm sm:text-base md:text-xl text-center py-5">We are located at 1208 N Gaffey St, San Pedro, CA 90731</p>
                <div id="embed-google-maps-container" className="container mx-auto static z-5 px-8 pt-8 pb-16 lg:pt-8 md:pt-0">
                    <EmbedGoogleMaps />
                </div>
            </section>

            <section className="mt-16">
                <h2 ref={chooseRef} className="text-2xl sm:text-3xl md:text-4xl font-azo-sans font-bold text-center">Why Choose Auto Film Experts?</h2>
                <div className="mx-auto px-8 py-12 xl:py-24 max-w-screen-2xl text-center">
                    <div className="mt-12 lg:gap-y-16 flex flex-col gap-y-8">
                        <div id="garage">
                            <div className="w-full overflow-hidden rounded-lg">
                                <img src="/DSC01974.webp" alt="Garage" className="min-w-full min-h-full h-auto object-cover object-center" />
                            </div>
                        </div>
                    </div>
                </div>
                <p ref={declarationRef} className="text-gray-300 text-sm sm:text-base md:text-xl text-center py-5 px-24">At Auto Film Experts, we are committed to providing the highest quality paint correction services. <br /> Our experienced technicians use state-of-the-art equipment and premium products to ensure exceptional results.  <br />We take pride in our attention to detail and dedication to customer satisfaction.</p>
            </section>
            <div className="flex justify-between items-center py-10 w-full mt-5">
                <img ref={imgRef1} src="./shop1.webp" alt="Shop 1" className="w-1/3 rounded-l-lg" />
                <img ref={imgRef2} src="./DSC01999.webp" alt="Shop 3" className="w-1/3" />
                <img ref={imgRef3} src="./shop4.webp" alt="Shop 4" className="w-1/3 rounded-r-lg" />
            </div>
            <section>
                <p ref={locationRef} className="text-gray-300 text-sm sm:text-base md:text-xl text-center py-5 px-24">
                    Our passion and commitment to quality craftsmanship make us the go-to destination for enthusiasts who demand nothing but the best for their vehicles. Step into a world where cutting-edge technology meets automotive artistry, and let us elevate your driving experience.
                </p>
            </section>
        </section>
    );
};

export default About;
