import React, { useEffect } from 'react';
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home.jsx';
import StorePage from './pages/storePage';
import SocialsPage from './pages/socialsPage';
import DynamicServiceLoader from './components/DynamicServiceLoader';
import StarsCeiling from './components/service/StarsCeiling';
import CeramicCoat from './components/service/CeramicCoat';
import VinylWrap from './components/service/VinylWrap';
import WindowTint from './components/service/WindowTint';
import BrakeCaliper from './components/service/BrakeCaliperPaint';
import PaintProtectionFilm from './components/service/PaintProtectionFilm';
import PaintCorrection from './components/service/PaintCorrection';
import OfferVideo from './components/service/OfferVideo.jsx';
import Logo from './components/Logo.jsx';

const App = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            scroller.scrollTo("0", {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
        else if (location.pathname === "/services") {
            scroller.scrollTo('services-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
        else if (location.pathname === "/about") {
            scroller.scrollTo('about-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
        else if (location.pathname === "/contact") {
            scroller.scrollTo('contact-container', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            });
        }
    }, [location]);

    return (
        <div className="relative bg-black min-h-screen min-w-[100vw] w-full h-full">
            <Navbar className="top-0 w-full z-49" />
            <Logo />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/about" element={<Home />} exact />
                <Route path="/services" element={<Home />} exact />
                <Route path="/contact" element={<Home />} exact />
                <Route path="/store" element={<StorePage />} />
                <Route path="/socials" element={<SocialsPage />} />
                <Route path="/services/:serviceId" element={<DynamicServiceLoader />} />
                <Route path="/paint-protection-film" element={<PaintProtectionFilm />} />
                <Route path="/paint-correction" element={<PaintCorrection />} />
                <Route path="/ceramic-coat" element={<CeramicCoat />} />
                <Route path="/vinyl-wrap" element={<VinylWrap />} />
                <Route path="/window-tint" element={<WindowTint />} />
                <Route path="/brake-caliper-paint" element={<BrakeCaliper />} />
                <Route path="/stars-in-the-ceiling" element={<StarsCeiling />} />
                <Route path="/paint-protection-offer" element={<OfferVideo />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;