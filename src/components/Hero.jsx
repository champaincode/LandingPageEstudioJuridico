import React from "react";
import Imagen from "../assets/Estudio.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Hero() {
  return (
    <div
      id="inicio"
      className="hero bg-gray lg:h-[100vh] 2xl:h-[100vh] xl:h-[100vh] h-[180vh] max-w-screen overflow-hidden"
    >
      <div className="hero-content flex flex-col sm:flex-row-reverse justify-between md:flex-row-reverse lg:h-[800px] h-[680px]">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-auto sm:h-[50vh] md:h-[60vh] xl:mb-12 xl:h-2/3 lg:w-full 2xl:h-3/4 lg:3/4 xl:w-3/4 md:h-1/2 sm:h-1/2"
        >
          <img
            src={Imagen}
            className="h-full w-full object-cover"
            alt="Estudio"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-1/2 xl:h-[200px]flex flex-col md:flex justify-center items-start p-5"
        >
          <h1 className="text-4xl xl:mb-6 sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl xl:py-0 py-5 font-bold text-blue-100 font-sans leading-tight ">
            Hacemos <br /> simple tu
            <br /> escrituración
          </h1>
          <h3 className="text-2xl   lg:text-4xl xl:text-3xl font-medium font-sans leading-tight">
            Estudio jurídico
          </h3>
          <p className="text-xl xl:py-2 xl:mb-6 lg:text-2xl py-5 font-lato font-regular leading-relaxed ">
            ¡Despreocúpate y obtén asesoría <br /> y servicio profesional!
          </p>
          <p className="text-xl lg:text-2xl  xl:mb-20 font-lato font-regular leading-relaxed">
            Garantizamos que cumplas con <br /> todas las regulaciones.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
