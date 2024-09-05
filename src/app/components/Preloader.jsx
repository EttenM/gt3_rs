import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from "gsap";
import Speed from "./images/Speedsvg";
const Preloader = ({ setPreload, perloadState }) => {
  useGSAP(() => {
    let mm = gsap.matchMedia(),
      breakPoint = 800;

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: ${breakPoint}px)`,
        isMobile: `(max-width: ${breakPoint - 1}px)`,
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile, reduceMotion } = context.conditions;
        let tlLoader = gsap.timeline();

        tlLoader.set("html", { overflow: "hidden" });
        tlLoader.to(".line", {
          width: perloadState + "%",

          duration: 1.5,

          ease: "circ.inOut",
        });

        if (perloadState === 100) {
          tlLoader
            .to(".preloader_content", {
              opacity: 0,
              duration: 0.25,
            })
            .to(".preloader", {
              yPercent: 100,
              borderRadius: isMobile ? "40px" : "20%",
              background: "#e7b55e",
              duration: 1.5,
              onStart: () => {
                setPreload(true);
              },
            })
            .to(".preloader", {
              display: "none",
              duration: 0,
            });
        }
      }
    );
  }, [perloadState]);
  return (
    <div className="preloader w-screen h-screen fixed bottom-0 left-0 flex justify-center bg-[#15151a] items-center z-[999]">
      <div className="preloader_content w-[80%] md:w-[30%] flex flex-col justify-center items-center gap-[15px]">
        <Speed name={"w-[70%] h-auto"} />

        <div className="relative w-full h-[5px] bg-gray-600 rounded-[20px] overflow-hidden">
          <div
            className={`line w-0 h-full bg-main-color rounded-[20px] relative overflow-hidden`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
