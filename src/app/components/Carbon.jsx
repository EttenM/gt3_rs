import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Carbon = () => {
  useGSAP(() => {
    gsap.set(".carbon", {
      xPercent: -120,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_4",
        start: "center center",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: true,
        // toggleActions: "play reverse play reverse",
      },
    });
    tl.to(".carbon", {
      xPercent: 0,
      duration: 0.5,
    });
    // ScrollTrigger.create({
    //   trigger: ".section_4",
    //   start: "+=30% center",
    //   end: "bottom +=80%",
    //   onEnter: () => animateIn(),
    //   onLeave: () => resetAnimation(),
    //   onEnterBack: () => animateIn(),
    //   onLeaveBack: () => resetAnimation(),
    //   // animation: tl,
    //   toggleActions: "play none none none",
    // });

    // function animateIn() {
    //   gsap.to(".carbon", {
    //     xPercent: 0,
    //     duration: 0.5,
    //     ease: "power1.Out",
    //   });
    // }
    // function resetAnimation() {
    //   gsap.to(".carbon", {
    //     xPercent: -150,
    //     duration: 0.5,
    //   });
    // }
  });
  return (
    <div className="section_4 w-full h-screen relative flex justify-center md:justify-start items-start">
      <div
        className="carbon w-fit max-w-[95%] md:max-w-[45%]  p-[15px] lg:p-[40px] rounded-[30px] bg-main-color text-[1rem] lg:text-[24px] font-medium  text-black 
      md:ml-[5vh] mt-[5vh] flex flex-col "
      >
        <h3 className="text-[1.5rem] lg:text-[54px] font-semibold font-Oswald">
          Carbon
        </h3>
        <p>
          Consistent lightweight construction with numerous components made of
          carbon fibre reinforced plastic (CFRP). The consistent use of CFRP
          enables an unladen weight of just 1,450 kg
        </p>
      </div>
    </div>
  );
};

export default Carbon;
