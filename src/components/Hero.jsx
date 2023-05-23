import React from "react";
import Imagen from "../assets/Estudio.png";

function Hero() {
  return (
    <div
      id="inicio"
      className="hero bg-gray lg:h-[800px] h-[110vh] max-w-screen  overflow-hidden"
    >
      <div className="hero-content   flex flex-col sm:flex-row-reverse justify-between md:flex-row-reverse  lg:h-[800px] h-[680px]">
        <div className="w-full  h-2/4  lg:w-full 2xl:h-3/4 lg:3/4 xl:w-3/4 md:h-1/2 sm:h-1/2">
          <img
            src={Imagen}
            className="h-[45vh] lg:h-[60vh] md:h-[50vh] lg:w-full 2xl:h-full  2xl:w-full object-cover"
            alt="Estudio"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col md:flex justify-center items-start p-5">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl py-5 font-bold text-blue-100 font-sans">
            Hacemos <br /> simple tu
            <br /> escrituración
          </h1>
          <h3 className="text-2xl lg:text-4xl xl:text-3xl font-medium font-sans">
            Estudio juridico
          </h3>
          <p className="text-1xl lg:text-2xl py-5 font-lato font-regular">
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
