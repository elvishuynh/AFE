import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import StorePage from './pages/storePage';
import SocialsPage from './pages/socialsPage';
import DynamicServiceLoader from './components/DynamicServiceLoader';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            scroller.scrollTo(location.hash.substring(1), {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        } else if (location.pathname === "/") {
            scroller.scrollTo('home', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return (
        <div className="relative bg-black min-h-screen min-w-[100vw] w-full h-full">
            <Navbar className="top-0 w-full z-49" />
            <Routes>
                <Route path="/" element={
                    <div>
                        <div id="home" className="static z-5 px-8 pt-20 pb-20 lg:pt-20 md:pt-0">
                            <Home />
                        </div>
                        <div id="about" className="py-56 lg:py-64">
                            <About />
                        </div>
                        <div id="services" className="py-10">
                            <Services />
                        </div>
                        <div id="contact" className="py-10">
                            <Contact />
                        </div>
                    </div>
                } exact />
                <Route path="/services/:serviceId" element={<DynamicServiceLoader />} />
                <Route path="/store" element={<StorePage />} />
                <Route path="/socials" element={<SocialsPage />} />
            </Routes>
        </div>
    );
};

export default App;
