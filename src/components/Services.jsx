import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Services = () => {
  const paintProtectionRef = useRef(null);
  const imageRef1 = useRef(null);
  const ceramicCoatingRef = useRef(null);
  const imageRef2 = useRef(null);
  const paintCorrectionRef = useRef(null);
  const imageRef3 = useRef(null);
  const windowTintingRef = useRef(null);
  const imageRef4 = useRef(null);
  useEffect(() => {
    const splitTitle = new SplitText(paintProtectionRef.current, { type: "words, chars" });
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
      { title: paintProtectionRef, image: imageRef1 },
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
    };
  }, []);

  return (
    <div className="container mx-auto pt-10 pb-10 pr-5 pl-5 text-white px-6 md:px-12 lg:px-24 xl:px-48 border-t border-white/10">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-azo-sans font-bold py-8 text-center" style={{ wordBreak: "keep-all" }}>Services</h1>
      <div className="space-y-8 p-4 md:p-8">
        <section className="flex flex-col lg:flex-row-reverse items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4">
          <div className="flex-1 text-center md:text-left">
            <h1 ref={paintProtectionRef} className="text-3xl lg:text-4xl xl:text-5xl font-azo-sans font-bold py-8 text-center" style={{ wordBreak: "keep-all" }}>Paint Protection Film</h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-xl">
              Protecting your original paint is the single most effective thing you can do to safeguard your investment. Our Ultimate Plus Paint Protection Film™ is a high-gloss, self-healing film that offers protection from rock chips, scratches, UV damage, and daily driving. All it takes is one rock chip to make you realize how important clear bra paint protection is. Add a few more rock chips and you'd be wishing you had done it sooner. On luxury vehicles, high-end sports cars and exotics, paint protection film is an absolute no-brainer.
            </p>
            <a href="/paint-protection-film" className="flex w-1/2 lg: w-1/3 mx-auto my-10 text-center items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">Learn More</span>
            </a>
          </div>
          <div className="reveal flex-none w-full lg:w-1/2">
            <img ref={imageRef1} src="./DSC02017.webp" alt="Paint Protection Film" className="object-scale-down max-h-96 w-full lg:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4">
          <div className="flex-1 text-center md:text-right">
            <h1 ref={ceramicCoatingRef} className="text-3xl lg:text-4xl xl:text-5xl font-azo-sans font-bold py-8 text-center" style={{ wordBreak: "keep-all" }}>Ceramic Coating</h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-xl">
              Elevate your vehicle's appearance and fortify its defenses with our cutting-edge Ceramic Pro Coating™. This state-of-the-art, nano-ceramic technology forms an impenetrable layer that enhances gloss, depth, and clarity while providing unrivaled protection against UV rays, chemical contaminants, and minor scratches. All it takes is one encounter with road grime or bird droppings to make you realize how crucial a ceramic coating is for maintaining your vehicle's pristine look. Experience a few more instances of struggling to remove stubborn contaminants, and you'd be wishing you had taken action sooner. On luxury vehicles, high-end sports cars, and exotics, where a flawless appearance is non-negotiable, our Ceramic Pro Coating™ is an absolute game-changer.
            </p>
            <a href="/ceramic-coat" className="flex w-1/2 lg: w-1/3 mx-auto my-10 text-center items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">Learn More</span>
            </a>
          </div>
          <div className="reveal flex-none w-full lg:w-1/2">
            <img ref={imageRef2} src="./image1.webp" alt="Ceramic Coating" className="max-h-96 max-h-96 w-full lg:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row-reverse items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4">
          <div className="flex-1 text-center md:text-left">
            <h1 ref={paintCorrectionRef} className="text-3xl lg:text-4xl xl:text-5xl font-azo-sans font-bold py-8 text-center" style={{ wordBreak: "keep-all" }}>Paint Correction</h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-xl">
              Restore your vehicle's paint to its original brilliance and eliminate unsightly imperfections with our meticulous Paint Correction service. Our skilled technicians use advanced techniques and top-of-the-line products to meticulously remove swirl marks, scratches, oxidation, and other blemishes, leaving your vehicle with a showroom-quality finish that radiates perfection. All it takes is one glance at a dull, marred surface to make you realize how vital professional paint correction is for showcasing your vehicle's true beauty. Endure a few more instances of cringing at the sight of your vehicle's lackluster appearance, and you'd be wishing you had addressed the issue sooner. On luxury vehicles, high-end sports cars, and exotics, where a pristine, head-turning appearance is essential, our Paint Correction service is an absolute necessity for maintaining your vehicle's value and visual appeal.
            </p>
            <a href="/paint-correction" className="flex w-1/2 lg: w-1/3 mx-auto my-10 text-center items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">Learn More</span>
            </a>
          </div>
          <div className="reveal flex-none w-full lg:w-1/2">
            <img ref={imageRef3} src="./image4.webp" alt="Paint Correction" className="object-scale-down max-h-96 w-full lg:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>

        <section className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4 p-4">
          <div className="flex-1 text-center md:text-right">
            <h1 ref={windowTintingRef} className="text-3xl lg:text-4xl xl:text-5xl font-azo-sans font-bold py-8 text-center" style={{ wordBreak: "keep-all" }}>Window Tinting</h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-xl">
              Safeguarding your vehicle's interior and enhancing your driving experience is as simple as investing in our Ultimate Plus Window Tinting. This high-performance, precision-cut window film offers unparalleled protection from harsh UV rays, reduces glare for improved visibility, and helps regulate interior temperatures for a more comfortable ride. All it takes is one scorching summer day to make you realize how essential quality window tinting is. Add a few more uncomfortably warm drives and you'd be wishing you had done it sooner. On luxury vehicles, high-end sports cars, and exotics, where comfort and style are paramount, our window tinting solution is an absolute must-have.
            </p>
            <a href="/window-tint" className="flex w-1/2 lg: w-1/3 mx-auto my-10 text-center items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:bg-gray-500 dark:hover:bg-gray-700 dark:hover:text-white">
              <span className="w-full">Learn More</span>
            </a>
          </div>
          <div className="reveal flex-none w-full lg:w-1/2">
            <img ref={imageRef4} src="./image2.webp" alt="Window Tinting" className="max-h-96 w-full lg:w-9/12 rounded-lg shadow-lg mx-auto" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
