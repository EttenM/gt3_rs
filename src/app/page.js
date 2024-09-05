"use client";
import Image from "next/image";
import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import CanvasLoader from "./Loader";
import GR3_RS from "./GR3_RS";
import {
  ScrollControls,
  Environment,
  Scroll,
  Preload,
  useScroll,
  PerspectiveCamera,
  ContactShadows,
  Lightformer,
  MeshReflectorMaterial,
  Backdrop,
  Loader,
} from "@react-three/drei";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { ReactLenis, useLenis } from "lenis/react";
import Hero from "./components/Hero";
import Performance from "./components/Performance";
import Speed from "./components/Speed";
import Carbon from "./components/Carbon";
import Back from "./components/Back";
import Length from "./components/Length";
import Brakes from "./components/Brakes";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function Home() {
  const [perloadOver, setPreload] = useState(false);
  const lenisRef = useRef();
  const lenis = useLenis();
  useEffect(() => {
    lenis?.stop();
    // lenisRef.current?.lenis?.stop()
    if (perloadOver) {
      lenis?.start();
    }
  }, [lenis, perloadOver]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh({ safe: true });
    });
  });

  const [perloadState, setperloadState] = useState(0);
  const lenisOptions = {
    easing: (t) => Math.sin((t * Math.PI) / 2),
    duration: 1,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  return (
    <ReactLenis root options={lenisOptions} ref={lenisRef}>
      <Preloader setPreload={setPreload} perloadState={perloadState} />
      <main className="flex min-h-screen flex-col items-center justify-between relative w-full h-full">
        <Hero />

        <Performance />

        <Speed />
        <Carbon />

        <Back />
        <Length />
        <Brakes />
        <Footer />

        <div className="fixed w-full h-screen flex justify-center items-center z-[-1]">
          <Canvas>
            <Suspense
              fallback={<CanvasLoader setperloadState={setperloadState} />}
            >
              <Scene perloadOver={perloadOver} />
            </Suspense>
          </Canvas>
        </div>
      </main>
    </ReactLenis>
  );
}

const Scene = ({ perloadOver }) => {
  const camera = useRef();

  useLayoutEffect(() => {
    let mm = gsap.matchMedia(),
      breakPoint = 900;

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
        gsap.set(camera.current, {
          zoom: isMobile ? 0.5 : 1,
          onUpdate: () => {
            camera.current.updateProjectionMatrix();
          },
        });
        if (perloadOver) {
          gsap.set("html", { overflowY: "auto", overflowX: "hidden" });

          // gsap.set(camera.current.position, {
          //   x: isMobile ? 2 : 1.6,
          //   z: isMobile ? 3.3 : 4.3,
          // });
          let scene_1 = gsap.timeline(
            {
              scrollTrigger: {
                trigger: ".section_2",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
              },
            },
            2
          );
          scene_1
            .fromTo(
              camera.current.position,
              { x: isMobile ? 2 : 1.6, y: 0.9, z: isMobile ? 3.3 : 4.3 },
              {
                x: 0.5,
                y: 1.25,
                z: 2.57,
              },
              "same"
            )
            .fromTo(
              camera.current.rotation,
              { x: 0, y: 0.8, z: 0 },
              { x: -0.67, y: 0.65, z: 0.54 },
              "same"
            );

          let scene_2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".section_3",
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
            },
          });
          scene_2
            .to(
              camera.current.position,
              { x: isMobile ? 3 : 4, y: 1, z: 1.35 },
              "same"
            )
            .to(camera.current.rotation, { x: 0, y: 1.62, z: 0 }, "same");

          let scene_3 = gsap.timeline(
            {
              scrollTrigger: {
                trigger: ".section_4",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
              },
            },
            2
          );
          scene_3
            .to(camera.current.position, { x: 1, y: 1.46, z: -2.51 }, "same")
            .to(
              camera.current.rotation,
              { x: 0.29, y: 2.36, z: -0.25 },
              "same"
            );

          let scene_4 = gsap.timeline(
            {
              scrollTrigger: {
                trigger: ".section_5",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                ease: "power1.inOut",
              },
            },
            2
          );
          scene_4
            .to(camera.current.position, { x: 0, y: 1.1, z: -4.3 }, "same")
            .to(camera.current.rotation, { x: 0, y: 3.14, z: 0 }, "same");

          let scene_5 = gsap.timeline(
            {
              scrollTrigger: {
                trigger: ".section_6",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                ease: "power1.inOut",
              },
            },
            2
          );
          scene_5
            .to(camera.current.position, { x: 0.075, y: 5.29, z: -1.7 }, "same")
            .to(
              camera.current,
              {
                zoom: isMobile ? 0.7 : 1,
                onUpdate: () => {
                  camera.current.updateProjectionMatrix();
                },
              },
              "same"
            )
            .to(camera.current.rotation, { x: 1.3, y: 3.14, z: 0 }, "same");

          let scene_6 = gsap.timeline({
            scrollTrigger: {
              trigger: ".section_7",
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
              ease: "power1.inOut",
            },
          });
          scene_6
            .to(
              camera.current.position,
              { x: -2, y: isMobile ? 0.6 : 0.35, z: 0.5 },
              "same"
            )
            .to(
              camera.current,
              {
                zoom: isMobile ? 0.85 : 1.3,
                onUpdate: () => {
                  camera.current.updateProjectionMatrix();
                },
              },
              "same"
            )
            .to(camera.current.rotation, { x: 0, y: 4.2, z: 0 }, "same");

          let scene_7 = gsap.timeline({
            scrollTrigger: {
              trigger: ".section_8",
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
              ease: "power1.inOut",
            },
          });
          scene_7
            .to(camera.current.position, { x: 0, y: 1.5, z: 4.7 }, "same")
            .to(
              camera.current,
              {
                zoom: isMobile ? 0.6 : 1,
                onUpdate: () => {
                  camera.current.updateProjectionMatrix();
                },
              },
              "same"
            )
            .to(camera.current.rotation, { x: -0.2, y: 6.27, z: 0 }, "same");
        }
      }
    );
  }, [perloadOver]);

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[1.6, 0.9, 4.3]}
        rotation={[0, 0.8, 0]}
        fov={50}
        near={0.1}
        far={70}
      />
      {/* <color attach="background" args={["#15151a"]} /> */}
      <ContactShadows
        resolution={1024}
        frames={1}
        position={[0, 0, 0]}
        scale={10}
        blur={0.5}
        opacity={0.5}
        far={20}
      />
      <spotLight
        position={[0, 3, 0]}
        intensity={10}
        castShadow
        lookAt={[0, 0, 0]}
      />
      {/* <spotLight
        position={[0, 2, -3]}
        intensity={40}
        castShadow
        lookAt={[0, 0, 0]}
        angle={10}
        color={"#ff0000"}
      /> */}
      {/* <Backdrop
        castShadow
        floor={0}
        position={[0, -0.1, -3]}
        scale={[50, 10, 4]}
      >
        <meshStandardMaterial color="#17171b" envMapIntensity={0.15} />
      </Backdrop> */}
      <mesh position={[0, -0.07, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[50, 50]} />

        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={1024}
          mixBlur={1}
          mixStrength={1}
          roughness={1}
          depthScale={1}
          minDepthThreshold={2}
          // maxDepthThreshold={0.4}
          color="#15151a"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="studio" resolution={1024}>
        {/* Ceiling */}
        <Lightformer
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[0, 4, -9]}
          scale={[10, 1, 1]}
          color={"#e7c68c"}
          // castShadow
        />
        <Lightformer
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[0, 4, -6]}
          scale={[10, 1, 1]}
          color={"#e7c68c"}
        />
        <Lightformer
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[0, 4, -3]}
          color={"#e7c68c"}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[0, 4, 0]}
          color={"#e7c68c"}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[0, 4, 3]}
          color={"#e7c68c"}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[0, 4, 6]}
          color={"#e7c68c"}
          scale={[10, 1, 1]}
        />
        <Lightformer
          intensity={10}
          rotation-x={Math.PI / 2}
          position={[0, 4, 9]}
          color={"#e7c68c"}
          scale={[10, 1, 1]}
        />
        {/* Sides */}
        <Lightformer
          intensity={10}
          rotation-y={Math.PI / 2}
          position={[-50, 2, 0]}
          color={"#e7c68c"}
          scale={[100, 2, 1]}
        />
        <Lightformer
          intensity={10}
          rotation-y={-Math.PI / 2}
          position={[50, 2, 0]}
          color={"#e7c68c"}
          scale={[100, 2, 1]}
        />

        <Lightformer
          form="ring"
          color="#e7c68c"
          intensity={20}
          scale={2}
          position={[10, 5, 10]}
        />
      </Environment>
      <fog attach="fog" args={["#15151a", 5, 10]} />
      {/* <color attach="background" args={["#15151a"]} /> */}

      <GR3_RS />
    </>
  );
};
