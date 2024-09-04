import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Performance = () => {
  const [openBar, setOpenBar] = useState(false);
  const [inView, setinView] = useState();
  const section = useRef();
  const toggleButton = () => {
    let state = openBar;
    setOpenBar(!state);
  };

  useGSAP(() => {
    const tl = gsap.timeline();

    ScrollTrigger.create({
      trigger: ".section_2",
      start: "+=30% center",
      end: "bottom +=90%",
      onEnter: () => animateIn(),
      onLeave: () => resetAnimation(),
      onEnterBack: () => animateIn(),
      onLeaveBack: () => resetAnimation(),
      // animation: tl,
      toggleActions: "play none none none",
    });

    function animateIn() {
      gsap.to(".text-bg", {
        xPercent: 0,
        duration: 0.5,
        ease: "power1.Out",
      });
      gsap.to(".text", { opacity: 1 });
    }
    gsap.set(".text-bg", {
      xPercent: -100,
    });
    function resetAnimation() {
      gsap.to(".text-bg", {
        xPercent: -100,
        duration: 0.5,
      });
      gsap.to(".text", { opacity: 0 });
    }
  });
  return (
    <div
      className="section_2 w-full h-[100vh] relative flex items-start lg:items-center overflow-hidden"
      ref={section}
    >
      <div className="text-bg w-full lg:w-[40%] h-[40%] lg:h-[90%] rounded-tr-[500px] rounded-br-[500px] bg-main-color flex justify-center items-center  flex-col gap-[20px]">
        <h3 className="text text-black text-[1.5rem] sm:text-[54px] w-[80%] font-semibold font-Oswald">
          Maximum performance
        </h3>
        <p className="text text-black text-[1rem] sm:text-[24px] w-[80%] font-medium">
          The new 911 GT3 RS delivers unbelievable performance of up to 465 Nm
          on the circuit. 386 kW (525 PS) catapult you from 0-100 km/h in 3.2
          seconds, with no time to breathe until reaching a top speed of 296
          km/h.
        </p>
      </div>
    </div>
  );
};

export default Performance;