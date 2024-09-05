import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Length = () => {
  useGSAP(() => {
    gsap.set(".length_line", {
      scaleY: 0,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_6",
        start: "center center",
        end: "+=1000px",
        scrub: true,
        pin: true,
        pinSpacing: true,
        // toggleActions: "play reverse play reverse",
      },
    });
    tl.to(".length_line", {
      scaleY: 1,
      duration: 0.25,
      ease: "power1.Out",
    })
      .to(".length_text", {
        opacity: 1,
        duration: 0.25,
        ease: "power1.Out",
      })
      .to(".length_line", {
        scaleY: 0,
        duration: 0.25,
        ease: "power1.Out",
      })
      .to(".length_text", {
        opacity: 0,
        duration: 0.25,
        ease: "power1.Out",
      });

    // ScrollTrigger.create({
    //   trigger: ".section_6",
    //   start: "+=40% center",
    //   end: "bottom +=90%",
    //   onEnter: () => animateIn(),
    //   onLeave: () => resetAnimation(),
    //   onEnterBack: () => animateIn(),
    //   onLeaveBack: () => resetAnimation(),
    //   // animation: tl,
    //   toggleActions: "play none none none",
    // });
    // gsap.set(".length_line", {
    //   scaleY: 0,
    // });

    // function animateIn() {
    //   gsap.to(".length_line", {
    //     scaleY: 1,
    //     duration: 0.25,
    //     ease: "power1.Out",
    //   });
    //   gsap.to(".length_text", {
    //     opacity: 1,
    //     duration: 0.25,
    //     ease: "power1.Out",
    //   });
    // }
    function resetAnimation() {
      gsap.to(".length_line", {
        scaleY: 0,
        duration: 0.25,
        ease: "power1.Out",
      });
      gsap.to(".length_text", {
        opacity: 0,
        duration: 0.25,
        ease: "power1.Out",
      });
    }
  });
  return (
    <div className="section_6 w-full h-screen relative flex justify-start lg:justify-end items-center">
      <div className="w-full lg:w-fit h-[90%] flex gap-[50px] justify-center items-center ml-[15px] lg:ml-0 lg:mr-[10px] 2xl:mr-[10vw]">
        <div className="length_line w-[5px] border-l-[5px] h-[100%] border-dashed border-main-color"></div>
        <p className="length_text opacity-0 text-[2.5rem] md:text-[54px] font-semibold font-Oswald text-main-color self-start lg:self-auto mt-[5vh] md:mt-0">
          Length 4.572 mm
        </p>
      </div>
    </div>
  );
};

export default Length;
