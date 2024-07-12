import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  const titleRef = useRef(null);
  const imageRef1 = useRef(null);
  const ceramicCoatingRef = useRef(null);
  const imageRef2 = useRef(null);
  const paintCorrectionRef = useRef(null);
  const imageRef3 = useRef(null);
  const windowTintingRef = useRef(null);
  const imageRef4 = useRef(null);
  useEffect(() => {
    const splitTitle = new SplitText(titleRef.current, { type: "words, chars" });
    const splitCeramicCoating = new SplitText(ceramicCoatingRef.current, { type: "words, chars" });

    gsap.from(splitTitle.chars, {
      yPercent: 100,
      stagger: 0.05,
      ease: "power1.inOut",
      duration: 1,
      wordWrap: "break-word",
      onComplete: () => {
        gsap.to(splitTitle.chars, {
          yPercent: 0,
          stagger: 0.05,
          ease: "power1.inOut",
          duration: 1,
          onComplete: () => {
            gsap.from(splitCeramicCoating.chars, {
              yPercent: 0,
              stagger: 0.05,
              ease: "power1.inOut",
              duration: 1,
              wordWrap: "break-word",
              onComplete: () => {
                gsap.to(splitCeramicCoating.chars, {
                  yPercent: 0,
                  stagger: 0.05,
                  ease: "power1.inOut",
                  duration: 1,
                });
              },
            });
          },
        });
      }
    });
    const sections = [
      { title: titleRef, image: imageRef1 },
      { title: ceramicCoatingRef, image: imageRef2 },
      { title: paintCorrectionRef, image: imageRef3 },
      { title: windowTintingRef, image: imageRef4 }
    ];

    sections.forEach(section => {
      if (section.title.current && section.image.current) {
        const split = new SplitText(section.title.current, { type: "chars" });
        const chars = split.chars; // Array of characters

        gsap.fromTo(chars, { opacity: 0, y: 20 }, {
          opacity: 1, y: 0, stagger: 0.05, duration: 0.5, ease: 'power2.out',
          scrollTrigger: {
            trigger: section.title.current,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none none',
            markers: false
          }
        });

        gsap.fromTo(section.image.current, { opacity: 0, y: 50 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: {
            trigger: section.title.current,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        });
      }
    });
    return () => {
      splitTitle.kill();
      splitCeramicCoating.kill();
    };
  }, []);

  return (
    <div className="container mx-auto pt-10 pb-10 pr-5 pl-5 text-white">
      <div className="mt-auto mr-auto mb-auto ml-auto pt-10 pb-10 pr-10 pl-10">
        <div className="grid divide-y border-2">
          <Link to="/services/paint-protection-film" className="items-center px-5 py-4 flex gap-2.5">
            <span className="items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewbox="0 0 24 24" fill="none" className="w-full
                    h-full"><path d="M7.20039 12.0001C7.20039 13.3256 6.12587 14.4001 4.80039 14.4001C3.47491 14.4001 2.40039
                    13.3256 2.40039 12.0001C2.40039 10.6746 3.47491 9.6001 4.80039 9.6001C6.12587 9.6001 7.20039 10.6746 7.20039
                    12.0001Z" fill="black" /><path d="M14.4004 12.0001C14.4004 13.3256 13.3259 14.4001 12.0004 14.4001C10.6749
                    14.4001 9.60039 13.3256 9.60039 12.0001C9.60039 10.6746 10.6749 9.6001 12.0004 9.6001C13.3259 9.6001 14.4004
                    10.6746 14.4004 12.0001Z" fill="black" /><path d="M21.6004 12.0001C21.6004 13.3256 20.5259 14.4001 19.2004
                    14.4001C17.8749 14.4001 16.8004 13.3256 16.8004 12.0001C16.8004 10.6746 17.8749 9.6001 19.2004
                    9.6001C20.5259 9.6001 21.6004 10.6746 21.6004 12.0001Z" fill="black" /></svg>
            </span>
            <div className="items-center flex flex-1 flex-shrink-0 gap-1.5">
              <span className="font-azo-sans">Paint Protection Film</span>
            </div>
          </Link>
          <div className="flex gap-2">
            <span className="relative"></span>
          </div>
          <Link to="/services/ceramic-coating" className="items-center px-5 py-4 flex gap-2.5">
            <span className="items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewbox="0 0 24 24" fill="none" className="w-full
                    h-full"><path d="M7.20039 12.0001C7.20039 13.3256 6.12587 14.4001 4.80039 14.4001C3.47491 14.4001 2.40039
                    13.3256 2.40039 12.0001C2.40039 10.6746 3.47491 9.6001 4.80039 9.6001C6.12587 9.6001 7.20039 10.6746 7.20039
                    12.0001Z" fill="black" /><path d="M14.4004 12.0001C14.4004 13.3256 13.3259 14.4001 12.0004 14.4001C10.6749
                    14.4001 9.60039 13.3256 9.60039 12.0001C9.60039 10.6746 10.6749 9.6001 12.0004 9.6001C13.3259 9.6001 14.4004
                    10.6746 14.4004 12.0001Z" fill="black" /><path d="M21.6004 12.0001C21.6004 13.3256 20.5259 14.4001 19.2004
                    14.4001C17.8749 14.4001 16.8004 13.3256 16.8004 12.0001C16.8004 10.6746 17.8749 9.6001 19.2004
                    9.6001C20.5259 9.6001 21.6004 10.6746 21.6004 12.0001Z" fill="black" /></svg>
            </span>
            <div className="items-center flex flex-1 flex-shrink-0 gap-1.5">
              <span className="font-azo-sans">Ceramic Coating</span>
            </div>
          </Link>
          <div className="flex gap-2">
            <span className="relative"></span>
          </div>
          <Link to="/services/vinyl-wrapping" className="items-center px-5 py-4 flex gap-2.5">
            <span className="items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewbox="0 0 24 24" fill="none" className="w-full
                    h-full"><path d="M7.20039 12.0001C7.20039 13.3256 6.12587 14.4001 4.80039 14.4001C3.47491 14.4001 2.40039
                    13.3256 2.40039 12.0001C2.40039 10.6746 3.47491 9.6001 4.80039 9.6001C6.12587 9.6001 7.20039 10.6746 7.20039
                    12.0001Z" fill="black" /><path d="M14.4004 12.0001C14.4004 13.3256 13.3259 14.4001 12.0004 14.4001C10.6749
                    14.4001 9.60039 13.3256 9.60039 12.0001C9.60039 10.6746 10.6749 9.6001 12.0004 9.6001C13.3259 9.6001 14.4004
                    10.6746 14.4004 12.0001Z" fill="black" /><path d="M21.6004 12.0001C21.6004 13.3256 20.5259 14.4001 19.2004
                    14.4001C17.8749 14.4001 16.8004 13.3256 16.8004 12.0001C16.8004 10.6746 17.8749 9.6001 19.2004
                    9.6001C20.5259 9.6001 21.6004 10.6746 21.6004 12.0001Z" fill="black" /></svg>
            </span>
            <div className="items-center flex flex-1 flex-shrink-0 gap-1.5">
              <span className="font-azo-sans">Vinyl Wrapping</span>
            </div>
          </Link>
          <div className="flex gap-2">
            <span className="relative"></span>
          </div>
          <Link to="/services/window-tinting" className="items-center px-5 py-4 flex gap-2.5">
            <span className="items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewbox="0 0 24 24" fill="none" className="w-full
                    h-full"><path d="M7.20039 12.0001C7.20039 13.3256 6.12587 14.4001 4.80039 14.4001C3.47491 14.4001 2.40039
                    13.3256 2.40039 12.0001C2.40039 10.6746 3.47491 9.6001 4.80039 9.6001C6.12587 9.6001 7.20039 10.6746 7.20039
                    12.0001Z" fill="black" /><path d="M14.4004 12.0001C14.4004 13.3256 13.3259 14.4001 12.0004 14.4001C10.6749
                    14.4001 9.60039 13.3256 9.60039 12.0001C9.60039 10.6746 10.6749 9.6001 12.0004 9.6001C13.3259 9.6001 14.4004
                    10.6746 14.4004 12.0001Z" fill="black" /><path d="M21.6004 12.0001C21.6004 13.3256 20.5259 14.4001 19.2004
                    14.4001C17.8749 14.4001 16.8004 13.3256 16.8004 12.0001C16.8004 10.6746 17.8749 9.6001 19.2004
                    9.6001C20.5259 9.6001 21.6004 10.6746 21.6004 12.0001Z" fill="black" /></svg>
            </span>
            <div className="items-center flex flex-1 flex-shrink-0 gap-1.5">
              <span className="font-azo-sans">Window Tinting</span>
            </div>
          </Link>
          <div className="flex gap-2">
            <span className="relative"></span>
          </div>
          <Link to="/services/brake-caliper-painting" className="items-center px-5 py-4 flex gap-2.5">
            <span className="items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewbox="0 0 24 24" fill="none" className="w-full
                    h-full"><path d="M7.20039 12.0001C7.20039 13.3256 6.12587 14.4001 4.80039 14.4001C3.47491 14.4001 2.40039
                    13.3256 2.40039 12.0001C2.40039 10.6746 3.47491 9.6001 4.80039 9.6001C6.12587 9.6001 7.20039 10.6746 7.20039
                    12.0001Z" fill="black" /><path d="M14.4004 12.0001C14.4004 13.3256 13.3259 14.4001 12.0004 14.4001C10.6749
                    14.4001 9.60039 13.3256 9.60039 12.0001C9.60039 10.6746 10.6749 9.6001 12.0004 9.6001C13.3259 9.6001 14.4004
                    10.6746 14.4004 12.0001Z" fill="black" /><path d="M21.6004 12.0001C21.6004 13.3256 20.5259 14.4001 19.2004
                    14.4001C17.8749 14.4001 16.8004 13.3256 16.8004 12.0001C16.8004 10.6746 17.8749 9.6001 19.2004
                    9.6001C20.5259 9.6001 21.6004 10.6746 21.6004 12.0001Z" fill="black" /></svg>
            </span>
            <div className="items-center flex flex-1 flex-shrink-0 gap-1.5">
              <span className="font-azo-sans">Brake Caliper Paint</span>
            </div>
          </Link>
          <div className="flex gap-2">
            <span className="relative"></span>
          </div>
          <Link to="/services/stars-in-the-ceiling" className="items-center px-5 py-4 flex gap-2.5">
            <span className="items-center justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewbox="0 0 24 24" fill="none" className="w-full
                    h-full"><path d="M7.20039 12.0001C7.20039 13.3256 6.12587 14.4001 4.80039 14.4001C3.47491 14.4001 2.40039
                    13.3256 2.40039 12.0001C2.40039 10.6746 3.47491 9.6001 4.80039 9.6001C6.12587 9.6001 7.20039 10.6746 7.20039
                    12.0001Z" fill="black" /><path d="M14.4004 12.0001C14.4004 13.3256 13.3259 14.4001 12.0004 14.4001C10.6749
                    14.4001 9.60039 13.3256 9.60039 12.0001C9.60039 10.6746 10.6749 9.6001 12.0004 9.6001C13.3259 9.6001 14.4004
                    10.6746 14.4004 12.0001Z" fill="black" /><path d="M21.6004 12.0001C21.6004 13.3256 20.5259 14.4001 19.2004
                    14.4001C17.8749 14.4001 16.8004 13.3256 16.8004 12.0001C16.8004 10.6746 17.8749 9.6001 19.2004
                    9.6001C20.5259 9.6001 21.6004 10.6746 21.6004 12.0001Z" fill="black" /></svg>
            </span>
            <div className="items-center flex flex-1 flex-shrink-0 gap-1.5">
              <span className="font-azo-sans">Stars in the Ceiling</span>
            </div>
          </Link>
          <div className="flex gap-2">
            <span className="relative"></span>
          </div>
        </div>
      </div>
      <div className="space-y-8 p-4 md:p-8">
        <section className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
          <div className="flex-1 text-center md:text-left">
            <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-azo-sans font-bold py-8 text-center"style={{ wordBreak: "keep-all" }}>Paint Protection Film</h1>
            <p className="text-gray-600">
              Protecting your original paint is the single most effective thing you can do to safeguard your investment. Our Ultimate Plus Paint Protection Film™ is a high-gloss, self-healing film that offers protection from rock chips, scratches, UV damage, and daily driving. All it takes is one rock chip to make you realize how important clear bra paint protection is. Add a few more rock chips and you'd be wishing you had done it sooner. On luxury vehicles, high-end sports cars and exotics, paint protection film is an absolute no-brainer.
            </p>
          </div>
          <div className="reveal flex-none w-full md:w-1/2">
            <img ref={imageRef1} src="./DSC02028.webp" alt="Paint Protection Film" className="w-full md:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
          <div className="flex-1 text-center md:text-right">
            <h1 ref={ceramicCoatingRef} className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-azo-sans font-bold py-8 text-center" style={{ wordBreak: "keep-all" }}>Ceramic Coating</h1>
            <p className="text-gray-600">
              Elevate your vehicle's appearance and fortify its defenses with our cutting-edge Ceramic Pro Coating™. This state-of-the-art, nano-ceramic technology forms an impenetrable layer that enhances gloss, depth, and clarity while providing unrivaled protection against UV rays, chemical contaminants, and minor scratches. All it takes is one encounter with road grime or bird droppings to make you realize how crucial a ceramic coating is for maintaining your vehicle's pristine look. Experience a few more instances of struggling to remove stubborn contaminants, and you'd be wishing you had taken action sooner. On luxury vehicles, high-end sports cars, and exotics, where a flawless appearance is non-negotiable, our Ceramic Pro Coating™ is an absolute game-changer.
            </p>
          </div>
          <div className="reveal flex-none w-full md:w-1/2">
            <img ref={imageRef2} src="./image1.webp" alt="Ceramic Coating" className="w-full md:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
          <div className="flex-1 text-center md:text-left">
            <h1 ref={paintCorrectionRef} className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-azo-sans font-bold py-8 text-center"style={{ wordBreak: "keep-all" }}>Paint Correction</h1>
            <p className="text-gray-600">
              Restore your vehicle's paint to its original brilliance and eliminate unsightly imperfections with our meticulous Paint Correction service. Our skilled technicians use advanced techniques and top-of-the-line products to meticulously remove swirl marks, scratches, oxidation, and other blemishes, leaving your vehicle with a showroom-quality finish that radiates perfection. All it takes is one glance at a dull, marred surface to make you realize how vital professional paint correction is for showcasing your vehicle's true beauty. Endure a few more instances of cringing at the sight of your vehicle's lackluster appearance, and you'd be wishing you had addressed the issue sooner. On luxury vehicles, high-end sports cars, and exotics, where a pristine, head-turning appearance is essential, our Paint Correction service is an absolute necessity for maintaining your vehicle's value and visual appeal.
            </p>
          </div>
          <div className="reveal flex-none w-full md:w-1/2">
            <img ref={imageRef3} src="./shop2.webp" alt="Paint Correction" className="w-full md:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
          <div className="flex-1 text-center md:text-right">
            <h1 ref={windowTintingRef} className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-azo-sans font-bold py-8 text-center" style={{ wordBreak: "keep-all" }}>Window Tinting</h1>
            <p className="text-gray-600">
              Safeguarding your vehicle's interior and enhancing your driving experience is as simple as investing in our Ultimate Plus Window Tinting. This high-performance, precision-cut window film offers unparalleled protection from harsh UV rays, reduces glare for improved visibility, and helps regulate interior temperatures for a more comfortable ride. All it takes is one scorching summer day to make you realize how essential quality window tinting is. Add a few more uncomfortably warm drives and you'd be wishing you had done it sooner. On luxury vehicles, high-end sports cars, and exotics, where comfort and style are paramount, our window tinting solution is an absolute must-have.
            </p>
          </div>
          <div className="reveal flex-none w-full md:w-1/2">
            <img ref={imageRef4} src="./image2.webp" alt="Window Tinting" className="w-full md:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
