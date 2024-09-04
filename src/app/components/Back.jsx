import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Back = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".section_5",
      start: "+=40% center",
      end: "bottom +=80%",
      onEnter: () => animateIn(),
      onLeave: () => resetAnimation(),
      onEnterBack: () => animateIn(),
      onLeaveBack: () => resetAnimation(),
      // animation: tl,
      toggleActions: "play none none none",
    });
    gsap.set(".width_line", {
      scaleX: 0,
    });

    function animateIn() {
      gsap.to(".width_line", {
        scaleX: 1,
        duration: 0.25,
        ease: "power1.Out",
      });
      gsap.to(".width_text", {
        opacity: 1,
        duration: 0.25,
        ease: "power1.Out",
      });
    }
    function resetAnimation() {
      gsap.to(".width_line", {
        scaleX: 0,
        duration: 0.25,
        ease: "power1.Out",
      });
      gsap.to(".width_text", {
        opacity: 0,
        duration: 0.25,
        ease: "power1.Out",
      });
    }
  });
  return (
    <div className="section_5 w-full h-screen relative flex justify-center items-start">
      <div className="w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-[50px] justify-center items-center mt-[25vh] lg:mt-[15vh]">
        <p className="width_text opacity-0 text-[2.5rem] md:text-[54px] font-semibold font-Oswald text-main-color">
          Width 1.900 mm
        </p>
        <div className="width_line w-[100%] border-b-[5px] h-[5px] border-dashed border-main-color "></div>
      </div>
      {/* Width 1.900 mm The lightweight stainless steel sports exhaust system
    ensures an unfiltered sound experience up to a maximum of 9,000 rpm. */}
    </div>
  );
};

export default Back;