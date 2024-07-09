import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Splash = ({ onEnd }) => {
  const comp = useRef(null);
  const tl = useRef(null);
  const [showSkip, setShowSkip] = useState(true); // State to control skip message visibility

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline()
        .from("#intro-slider", {
          xPercent: 100,
          duration: 0.3,
          delay: 0.3,
        })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
          delay: 1,
        })
        .to("#intro-slider", {
          yPercent: 100,
          duration: 0.5,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 1.5,
        })
        .call(() => {
          gsap.to(comp.current, {
            yPercent: 100, // Moves the component down by 50 pixels
            duration: 0.7,
            onComplete: () => {
              if (comp.current) {
                comp.current.style.display = 'none'; // Hides the component after the animation completes
              }
              onEnd(); // Ensure to call onEnd if needed here
              setShowSkip(false); // Hide skip message when animation completes
            }
          });
        });

      const skipAnimation = (event) => {
        if (event.type === 'keydown' && event.code === 'Space') {
          event.preventDefault(); // Prevent the default spacebar behavior
        }
        tl.current.progress(1); // Complete the animation immediately
      };

      document.addEventListener('keydown', skipAnimation);
      document.addEventListener('touchstart', skipAnimation); // Add touchstart event listener

      return () => {
        document.removeEventListener('keydown', skipAnimation);
        document.removeEventListener('touchstart', skipAnimation); // Remove touchstart event listener
      };
    }, comp);

    return () => ctx.revert();
  }, [onEnd]);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-4 sm:p-10 bg-black absolute top-0 left-0 font-azo-sans font-normal z-10 w-full flex flex-col gap-4 sm:gap-10 tracking-tight"
      >
        <h1 className="text-6xl sm:text-8xl" id="title-1">
          A decade of <span className="text-stone-500">experience.</span>
        </h1>
        <h1 className="text-6xl sm:text-8xl" id="title-2">
          A decade of <span className="text-stone-700">protection.</span>
        </h1>
        <h1 className="text-6xl sm:text-8xl" id="title-3">
          A decade of <span className="text-AFE-RED">satisfaction.</span>
        </h1>
      </div>
      <div className="h-screen flex bg-AFE-RED justify-center items-center">
        <h1
          id="welcome"
          className="text-4xl sm:text-9xl text-gray-100 font-azo-sans font-normal"
        >
          AUTO FILM EXPERTS
        </h1>
      </div>
      {showSkip && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4 text-center font-azo-sans font-normal text-stone-700 z-50">
          Press space or tap the screen to skip.
        </div>
      )}
    </div>
  );
};

export default Splash;
