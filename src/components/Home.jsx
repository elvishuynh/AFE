// src/components/Home.jsx
import React, { useEffect, useRef } from 'react';

const Home = () => {
    return (
        <section id="home" className="h-full md:h-screen flex flex-col justify-center items-center pt-0 md:pt-24 lg:pt-52 pb-2 md:pb-24 lg:pb-32 static text-white">
            <h1 ref={titleRef1} className="text-5xl md:text-7xl font-azo-sans font-bold pb-8 text-center opacity-0">
                AUTO FILM EXPERTS
            </h1>
            <h2 ref={titleRef2} className="font-azo-sans text-center font-normal mb-10 text-xl md:text-3xl z-10 opacity-0">
                Protect Your Paint Elevate Your Drive.
            </h2>
            <img ref={imgRef} src="./DSC01996.webp" alt="Background" className="opacity-0 relative max-w-full max-h-full rounded-lg z-0" />
            <div className="w-full flex flex-col md:flex-row justify-evenly items-center py-8 text-xl md:text-3xl z-10 space-y-4 md:space-y-0 md:space-x-8">
                <p ref={expertRef} className="font-azo-sans text-center md:text-left font-normal opacity-0">
                    1208 N Gaffey St, San Pedro, CA 90731
                </p>
                <p ref={locationRef} className="font-azo-sans text-center md:text-right font-normal opacity-0">
                    (310) 346-0336 
                </p>
            </div>
        </section>
    );
};

export default Home;
