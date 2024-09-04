import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".section_8",
      start: "+=45% center",
      end: "bottom +=95%",
      onEnter: () => animateIn(),
      onLeave: () => resetAnimation(),
      onEnterBack: () => animateIn(),
      onLeaveBack: () => resetAnimation(),
      // animation: tl,
      toggleActions: "play none none none",
    });
    // gsap.set(".brakes", {
    //   yPercent: -150,
    // });

    function animateIn() {
      gsap.to(".footer_text", {
        opacity: 1,

        duration: 0.5,
        ease: "power1.Out",
      });
    }
    function resetAnimation() {
      gsap.to(".footer_text", {
        opacity: 0,

        duration: 0.25,
        ease: "power1.Out",
      });
    }
  });

  return (
    <div className="section_8 w-full h-screen relative text-[9vw] lg:text-[calc((1vh+1vw)*7)] text-main-color flex flex-col justify-between items-center">
      <h1 className="footer_text mt-[calc((1vh+1vw)*15)] lg:mt-[calc((1vh+1vw)*3)] z-[-2] pointer-events-none opacity-0 text-main-color/60 ">
        Porsche 911 GT3 RS
      </h1>
      <div className="text-[16px] md:text-[24px] w-full border-t-[2px] border-main-color">
        <div className="flex justify-evenly my-[15px]">
          <a
            href="https://www.porsche.com/international/models/911/911-gt3-rs/911-gt3-rs/"
            target="_blank"
            className="hover:text-main-color ease-in-out duration-200 "
          >
            Porsche Official
          </a>
          <a
            href="https://t.me/Mixail_e"
            target="_blank"
            className="hover:text-main-color ease-in-out duration-200"
          >
            Website Creator
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
