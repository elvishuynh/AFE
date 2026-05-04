import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { useGSAP } from '@gsap/react';
import NavDropdown from './NavDropdown';
import Logo from './Logo';

gsap.registerPlugin(SplitText, CSSPlugin);
const servicesItems = [
    { label: 'Paint Protection Film', link: '/paint-protection-film' },
    { label: 'Paint Correction', link: '/paint-correction' },
    { label: 'Ceramic Coating', link: '/ceramic-coating' },
    { label: 'Vinyl Wrap', link: '/vinyl-wrap' },
    { label: 'Window Tint', link: '/window-tint' },
    { label: 'Brake Caliper Paint', link: '/brake-caliper-paint' },
    { label: 'Stars in the Ceiling', link: '/star-ceiling' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const menuRef = useRef(null);
    const topBarRef = useRef(null);
    const middleBarRef = useRef(null);
    const bottomBarRef = useRef(null);
    const navbarRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();


    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const closeDropdown = () => {
        setOpenDropdown(null);
    };

    useGSAP(() => {
        const overlay = document.getElementById('mobile-overlay');

        if (isOpen) {
            gsap.to(overlay, { opacity: 1, duration: 0.3, display: 'block' });
            gsap.to(topBarRef.current, { y: 6, rotation: 135, transformOrigin: "center center", duration: 0.2 });
            gsap.to(middleBarRef.current, { y: 0, rotation: 180, opacity: 0, transformOrigin: "center center", duration: 0.2 });
            gsap.to(bottomBarRef.current, { y: -6, rotation: -135, transformOrigin: "center center", duration: 0.2 });
        } else {
            gsap.to(overlay, { opacity: 0, duration: 0.3, display: 'none' });
            gsap.to(topBarRef.current, { y: 0, rotation: 0, duration: 0.2 });
            gsap.to(middleBarRef.current, { y: 0, rotation: 0, opacity: 1, transformOrigin: "center center", duration: 0.2 });
            gsap.to(bottomBarRef.current, { y: 0, rotation: 0, duration: 0.2 });
        }
    }, [isOpen]);

    return (
        <div className="flex flex-col items-center w-full sticky top-0 z-[999] bg-black">
            <div className="w-full flex justify-center py-4 bg-black">
                <img src="/AFE.webp" alt="AFE Logo" className="w-24 h-auto" />
            </div>
            <div ref={navbarRef} className="navbar sticky top-0 w-full flex justify-between items-center px-4 py-1 z-[999] bg-black transition-all ease-out duration-500" style={{ height: '60px' }}>
                <div className="links hidden md:flex justify-center font-azo-sans font-normal text-white" style={{ flexGrow: 3 }}>
                    <div className="mx-10 cursor-pointer hover:text-red-500 text-xl uppercase" >
                        <RouterLink to={"/"} smooth={"easeInOutQuart"} duration={500}>Home</RouterLink>
                    </div>
                    {/* <RouterLink to={isHomePage ? "services" : "/"} smooth={"easeInOutQuart"} duration={500} className="mx-10 cursor-pointer hover:text-red-500 text-3xl" onClick={() => handleNavigation('services')}>SERVICES</RouterLink> */}
                    <NavDropdown
                        title="SERVICES"
                        items={servicesItems}
                        isOpen={openDropdown === 'services'}
                        toggleDropdown={() => toggleDropdown('services')}
                        closeDropdown={closeDropdown}
                    />
                    <div className="mx-10 cursor-pointer hover:text-red-500 text-xl uppercase">
                        <RouterLink to={"/about"} smooth={"easeInOutQuart"} duration={500}>About</RouterLink>
                    </div>
                    <div className="mx-10 cursor-pointer hover:text-red-500 text-xl uppercase">
                        <RouterLink to={"/contact"} smooth={"easeInOutQuart"} duration={500}>Contact</RouterLink>
                    </div>
                    <div className="mx-10 cursor-pointer hover:text-red-500 text-xl uppercase">
                        <RouterLink to={"/store"} smooth={"easeInOutQuart"} duration={500}>Store</RouterLink>
                    </div>
                    {/* <div className="mx-10 cursor-pointer hover:text-red-500 text-xl uppercase">
                        <RouterLink to={"/socials"} smooth={"easeInOutQuart"} duration={500}>Socials</RouterLink>
                    </div> */}
                </div>
                <div className="hidden md:flex items-center gap-4">
                    <a href="https://www.instagram.com/autofilmexperts" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>
                    <a href="https://www.tiktok.com/@autofilmexperts" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-5 h-5">
                            <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
                        </svg>
                    </a>
                    <a href="tel:3103460336" className="text-white hover:text-red-500 transition-colors font-semibold text-sm">
                        (310) 346-0336
                    </a>
                </div>
                <div className="md:hidden flex items-center z-40">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white z-50">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path ref={topBarRef} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16" />
                            <path ref={middleBarRef} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
                            <path ref={bottomBarRef} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h16" />
                        </svg>
                    </button>
                </div>
                <div id="mobile-overlay" className="fixed inset-0 bg-black/80 z-40" style={{ opacity: 0, display: 'none' }} onClick={() => setIsOpen(false)}></div>
                <div ref={menuRef} className="mobile-menu md:hidden fixed top-0 right-0 w-3/4 h-full bg-zinc-900 flex flex-col justify-center items-center z-50" style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease-in-out' }}>
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white z-50">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="menu-link py-4 cursor-pointer hover:text-red-500 text-2xl uppercase text-white opacity-100">
                        <RouterLink to={"/"} onClick={() => { setIsOpen(false); }}>Home</RouterLink>
                    </div>
                    <div className="menu-link py-4 cursor-pointer hover:text-red-500 text-2xl uppercase text-white opacity-100">
                        <span onClick={() => toggleDropdown('services')}>Services</span>
                    </div>
                    {openDropdown === 'services' && (
                        <div className="flex flex-col items-center py-2">
                            {servicesItems.map((item, index) => (
                                <RouterLink key={index} to={item.link} onClick={() => { setIsOpen(false); closeDropdown(); }} className="py-2 text-xl text-gray-300 hover:text-red-500">
                                    {item.label}
                                </RouterLink>
                            ))}
                        </div>
                    )}
                    <div className="menu-link py-4 cursor-pointer hover:text-red-500 text-2xl uppercase text-white opacity-100">
                        <RouterLink to={"/about"} onClick={() => { setIsOpen(false); }}>About</RouterLink>
                    </div>
                    <div className="menu-link py-4 cursor-pointer hover:text-red-500 text-2xl uppercase text-white opacity-100">
                        <RouterLink to={"/contact"} onClick={() => { setIsOpen(false); }}>Contact</RouterLink>
                    </div>
                    <div className="menu-link py-4 cursor-pointer hover:text-red-500 text-2xl uppercase text-white opacity-100">
                        <RouterLink to={"/store"} onClick={() => { setIsOpen(false); }}>Store</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
