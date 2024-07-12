import React from 'react';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Hero from './components/Hero';

const Home = () => {
    return (
        <div className="app relative bg-black">
            <div id="hero-container" className="container mx-auto static z-5 px-8 pt-8 pb-16 lg:pt-8 md:pt-0">
                <Hero />
            </div>
            <div id="services-container" className="py-10">
                <Services />
            </div>
            <div id="about-container" className="py-10">
                <About />
            </div>
            <div id="contact-container" className="py-10">
                <Contact />
            </div>
        </div>
    );
};

export default Home;