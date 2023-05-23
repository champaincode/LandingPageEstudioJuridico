import React from "react";
import Imagen from "../assets/Estudio.png";

function Hero() {
  return (
    <div
      id="inicio"
      className="hero bg-gray h-[90vh] max-w-screen overflow-hidden"
    >
      <div className="hero-content flex flex-col justify-between lg:flex-row-reverse h-[680px]">
        <div className="w-full 2xl:h-full xl:w-3/4 md:h-1/2 sm:h-1/2 ">
          <img src={Imagen} className="h-full w-full object-cover" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col  md:flex justify-center items-start p-5">
          <h1 className="text-4xl lg:text-7xl py-5 font-bold text-blue-100 font-sans">
            Hacemos <br /> simple tu
            <br /> escrituración
          </h1>
          <h3 className="text-1xl lg:text-4xl font-medium font-sans">
            Estudio juridico
          </h3>
          <p className="text-1xl  lg:text-2xl  py-5 font-lato font-regular">
            ¡Despreocúpate y obtené asesoría <br /> y servicio profesional!
          </p>
          <p className="text-1xl lg:text-2xl font-lato font-regular">
            Garantizamos que cumplas con <br /> todas las regulaciones.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
