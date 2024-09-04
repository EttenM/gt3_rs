import { Html, useProgress } from "@react-three/drei";
import { useEffect, useLayoutEffect } from "react";

const CanvasLoader = ({ setperloadState }) => {
  const { progress, loaded, active } = useProgress();
  useEffect(() => {
    setperloadState(progress);
    return () => {
      setperloadState(100);
    };
  }, [progress]);
  return (
    // <div className="preloader w-screen h-screen fixed bottom-0 left-0 flex justify-center items-center bg-[#15151a] z-[999]">
    //   <div className="">Porsche</div>
    //   <div className={`w-[${progress}%] max-w-[40%] h-[3px] bg-white`}>
    //     {progress.toFixed(2)}%
    //   </div>
    // </div>
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <div className="">Porsche</div>
      <div className={`w-[${progress}%] max-w-[40%] h-[3px] bg-white`}>
        {progress.toFixed(2)}%
      </div>
      <span className="canvas-loader"></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p> */}
    </Html>
  );
};

export default CanvasLoader;
