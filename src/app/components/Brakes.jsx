import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Brakes = () => {
  useGSAP(() => {
    gsap.set(".brakes", {
      xPercent: 120,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_7",
        start: "center center",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: true,
        // toggleActions: "play reverse play reverse",
      },
    });
    tl.to(".brakes", {
      xPercent: 0,
      duration: 0.5,
    });
  });
  //   ScrollTrigger.create({
  //     trigger: ".section_8",
  //     start: "+=45% center",
  //     end: "bottom +=80%",
  //     onEnter: () => animateIn(),
  //     onLeave: () => resetAnimation(),
  //     onEnterBack: () => animateIn(),
  //     onLeaveBack: () => resetAnimation(),
  //     // animation: tl,
  //     toggleActions: "play none none none",
  //   });
  //   gsap.set(".brakes", {
  //     yPercent: -150,
  //   });

  //   function animateIn() {
  //     gsap.to(".brakes", {
  //       yPercent: 0,
  //       duration: 0.5,
  //       ease: "power1.Out",
  //     });
  //   }
  //   function resetAnimation() {
  //     gsap.to(".brakes", {
  //       yPercent: -150,
  //       duration: 0.5,
  //     });
  //   }
  // });
  return (
    <div className="section_7 w-full h-screen relative flex justify-center lg:justify-end items-start">
      <div className="brakes w-[95%] lg:w-[40%] p-[15px] lg:p-[40px] rounded-[30px] bg-main-color text-[1rem] md:text-[24px] font-medium text-black mr-0 lg:mr-[5vh] mt-[5vh] flex flex-col">
        <h3 className="text-[1.5rem] md:text-[54px] font-semibold font-Oswald ">
          Brakes
        </h3>
        <p>
          The 911 GT3 RS already has a particularly powerful brake system as
          standard – which has been optimised again for use on the race track.
          With 6-piston aluminium brake callipers painted in Red at the front
          and 4-piston aluminium brake callipers at the rear in monobloc
          construction for high dimensional stability and very good response and
          release of the brakes.
        </p>
      </div>
    </div>
  );
};

export default Brakes;
