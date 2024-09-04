import React from "react";
import Speed from "./images/Speedsvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: 1, repeatDelay: 3, delay: 3 });
    tl.fromTo(
      ".circle",
      { top: "10%" },
      { top: "47%", duration: 1, ease: "power1.out" }
    );
    ScrollTrigger.create({
      trigger: ".section_1",
      start: "bottom +=95%",
      end: "bottom bottom",
      onLeave: () => {
        gsap.to(".scroll_down", { opacity: 0, duration: 0.25 });
      },
    });
    // .to(".logo", { rotate: "360deg", ease: "power3.inOut", duration: 2 })
    // .fromTo(
    //   camera.position,
    //   { x: 1.1, y: 4.5, z: -0.95 },
    //   {
    //     x: 1.6,
    //     y: 0.9,
    //     z: 4.3,
    //     duration: 1.5,
    //     ease: "power3.inOut",
    //   },
    //   "same"
    // )
    // .fromTo(
    //   camera.rotation,
    //   { y: 0.9 },
    //   { y: 0.8, duration: 1.5, ease: "power3.inOut" },
    //   "same"
    // )
    // .to(".preloader", {
    //   yPercent: -100,
    //   duration: 0.75,
    // })

    // .to(".preloader", {
    //   display: "none",
    // });
  });

  return (
    <div className="section_1 w-full h-screen relative">
      <div className="title w-[90%] lg:w-fit absolute top-[20%] translate-y-[-20%] lg:top-[50%] lg:translate-y-[-50%] left-[50%] translate-x-[-50%] lg:left-[20%] lg:translate-x-[-20%]  flex flex-col items-center ">
        {/* <p className=" text-[64px] font-bold font-Oswald">GT3 RS</p> */}
        <Speed name={"z-[-2] w-[40%] lg:w-[20vw] h-auto"} />
        <h1 className=" pointer-events-none text-[calc((1vh+1vw)*5)] font-bold font-Oswald">
          GT3 RS
        </h1>
      </div>
      <div className="scroll_down w-[40px] h-[60px] absolute bottom-[50px] left-[50%] translate-x-[-50%] border-[3px] border-white rounded-[55px]">
        <div className="circle w-[25px] h-[25px] rounded-full absolute top-[8px] left-[50%] translate-x-[-50%] bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;
