import React from "react";
import Imagen from "../assets/Estudio.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Hero() {
  return (
    <div
      id="inicio"
      className="2xl:hero md:hero lg:hero xl:hero  bg-gray lg:h-[100vh]  2xl:h-[100vh] xl:h-[150vh] h-[150vh] sm:h-[100vh] max-w-screen overflow-hidden"
    >
      <div className="hero-content w-screen lg:ml-10  xl:w-[80%]  2xl:w-[100%] flex flex-col-reverse sm:flex-col-reverse justify-between md:flex-row-reverse  lg:h-[800px] h-[750px] ">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full   lg:w-[100%] lg:h-[100%]  2xl:h-3/4 2xl:w-[100%] xl:w-3/4 "
        >
          <img
            src={Imagen}
            className="h-[40vh]  lg:h-[80%] md:h-[50vh] lg:w-[500px] 2xl:h-full lg:mt-12   2xl:w-full object-cover"
            alt="Estudio"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full  lg:w-1/2  xl:h-[200px] flex flex-col md:flex justify-center items-start p-5"
        >
          {" "}
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-normal  font-sans leading-tight 2xl:text-6xl">
            Estudio jurídico
          </h1>
          <h2 className="text-3xl  xl:mb-6 sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-8xl xl:py-0  font-bold text-blue-100 font-sans leading-tight ">
            Hacemos <br /> simple tu
            <br /> escrituración
          </h2>
          <p className="text-xl xl:py-2 xl:mb-6 lg:text-2xl py-5 font-lato font-regular leading-relaxed 2xl:text-4xl text-blue-100">
            ¡No te preocupes de más! Asesorate con nuestro equipo de abogados.
          </p>
          <p className="text-xl lg:text-2xl  xl:mb-20 font-lato font-regular leading-relaxed 2xl:text-3xl">
            Te ayudamos a gestionar tu documentación legal y garantizamos que
            cumplas con todas las regulaciones.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
