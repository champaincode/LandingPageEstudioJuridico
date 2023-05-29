import React from "react";
import Imagen from "../assets/Estudio.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Hero() {
  return (
    <div
      id="inicio"
      className="hero bg-gray lg:h-[100vh] h-[120vh] max-w-screen  overflow-hidden"
    >
      <div className="hero-content   flex flex-col sm:flex-row-reverse justify-between md:flex-row-reverse  lg:h-[800px] h-[680px]">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full  h-2/4  lg:w-full 2xl:h-3/4 lg:3/4 xl:w-3/4 md:h-1/2 sm:h-1/2"
        >
          <img
            src={Imagen}
            className="h-[45vh] lg:h-[60vh] md:h-[50vh] lg:w-full 2xl:h-full  2xl:w-full object-cover"
            alt="Estudio"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full lg:w-1/2 flex flex-col md:flex justify-center items-start p-5"
        >
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
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
