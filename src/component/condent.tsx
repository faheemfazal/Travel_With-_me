import React, { useState } from "react";

function Condent() {
  const [duration, setDuration] = useState<string>("duration-700");

  const handleMouseEnter = () => {
    setDuration("duration-500");
  };

  return (
    <div className=" h-full">
      <div className="w-full h-full flex-col justify-center">
        <div className="w-full h-60 ">
          <h1 className="text-center text-4xl text-gray-800 font-bold p-5 mt-10">
            The official travel site of the frendly india
          </h1>
          <h1 className="text-center text-xl text-gray-400 font-semibold ">
            when an unknow printer took a family official travel site{" "}
          </h1>
        </div>
        <div className="w-full h-[570px] flex-col justify-center p-5 ">
          <div className="flex justify-center gap-2">
            <div
              className={`h-64 w-16 bg-cover bg-center relative   bg-munnar items-end  overflow-hidden rounded-3xl hover:w-52 hover:rounded-3xl ${duration}  hover:duration-700 `}
              onMouseEnter={handleMouseEnter}
            >
              <h1 className={`absolute bottom-3 ${duration && ' hover:rotate-0' } -rotate-90  text-white font-semibold `}> outer islend</h1>
            </div>
            <div
              className={`h-64 w-16 bg-red-700 bg-cover  relative  bg-center bg-fortkochi overflow-hidden rounded-3xl hover:w-52 hover:rounded-3xl ${duration}  hover:duration-700 `}
              onMouseEnter={handleMouseEnter}
            >
              <h1 className="absolute bottom-3 mx-2 text-white font-semibold -rotate-90 p-2  hover:-rotate-180"> outer islend</h1>
            </div>  
             <div
              className={`h-64 w-16 bg-red-700 bg-cover  relativebg-center bg-alappuzha overflow-hidden rounded-3xl hover:w-52 hover:rounded-3xl ${duration}  hover:duration-700 `}
              onMouseEnter={handleMouseEnter}
            >
              <h1  className="absolute bottom-3 mx-2 text-white font-semibold"> outer islend</h1>
            </div>   <div
              className={`h-64 w-16 bg-red-700 bg-cover relative bg-center bg-kovalam overflow-hidden rounded-3xl hover:w-52 hover:rounded-3xl ${duration}  hover:duration-700 `}
              onMouseEnter={handleMouseEnter}
            >
              <h1 className="absolute bottom-3 mx-2  text-white font-semibold"> outer islend</h1>
            </div>   <div
              className={`h-64 w-16 bg-red-700 bg-cover relative bg-center bg-kumarakam overflow-hidden rounded-3xl hover:w-52 hover:rounded-3xl ${duration}  hover:duration-700 `}
              onMouseEnter={handleMouseEnter}
            >
              <h1 className="absolute bottom-3 mx-2  text-white font-semibold"> outer islend</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Condent;
