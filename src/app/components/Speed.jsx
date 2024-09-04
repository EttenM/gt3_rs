import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Speed = () => {
  useGSAP(() => {
    const speed_items = gsap.utils.toArray(".speed_item");
    const tl = gsap.timeline({ paused: true });
    speed_items.forEach((item, index) => {
      if (index === 0 || index % 2 !== 0) {
        tl.fromTo(
          item,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.25,
            stagger: 0.15,
          }
        );
      } else {
        tl.from(item, {
          width: 0,
          duration: 0.25,
          stagger: 0.15,
        });
      }
    });
    // ScrollTrigger.create({
    //   trigger: ".section_3",
    //   animation: tl,
    //   start: "+=30% center",
    //   toggleActions: "play reverse resume none",
    // });

    // ScrollTrigger.create({
    //   trigger: ".section_3",
    //   animation: tl,
    //   //start is left to its default value
    //   toggleActions: "none reset none reset",
    // });

    ScrollTrigger.create({
      trigger: ".section_3",
      start: "+=30% center",
      end: "bottom center",
      onEnter: () => tl.timeScale(1).play(),
      onLeave: () => tl.timeScale(4).reverse(),
      onEnterBack: () => tl.timeScale(1).play(),
      onLeaveBack: () => tl.timeScale(4).reverse(),
      // animation: tl,
      toggleActions: "play none none none",
    });
  });
  return (
    <div className="section_3 w-full h-screen relative overflow-hidden">
      <div
        className="speed_wrap w-[90%] lg:w-[50%] h-fit flex flex-col items-start gap-[10px] absolute top-[10%] translate-y-[-10%] lg:top-[30%] lg:translate-y-[-30%] left-[15%] translate-x-[-15%] 
      text-[1.2rem] sm:text-[32px] font-semibold ml-[2rem] lg:ml-0"
      >
        <h2 className="speed_item text-[1.5rem] sm:text-[3rem] md:text-[72px] font-semibold font-Oswald">
          Speed
        </h2>
        <div className="speed_item">0 - 100 km/h 3,2 s</div>
        <div className="speed_item speed_line w-[65%] lg:w-[20vw] h-[5px] rounded-[40px]"></div>
        <div className="speed_item">0 - 160 km/h 6,9 s</div>
        <div className="speed_item speed_line w-[78%] lg:w-[25vw] h-[5px] rounded-[40px]"></div>
        <div className="speed_item">0 - 200 km/h 10,6 s</div>
        <div className="speed_item speed_line w-[80vw] lg:w-[30vw] h-[5px] rounded-[40px]"></div>
      </div>

      {/* Speed Top speed 296 km/h Acceleration 0 - 100 km/h 3,2 s Acceleration
    0 - 160 km/h 6,9 s Acceleration 0 - 200 km/h 10,6 s */}
    </div>
  );
};

export default Speed;
