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
      <div className="pt-4 gap-4  z-0 max-w-screen-2xl justify-center  items-center flex flex-col-reverse ajuste sm:flex-row-reverse  md:flex-row-reverse lg:h-[800px] h-[880px] ">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full sm:h-[50vh] md:h-[60vh] 2xl:mb-10 xl:h-[100vh] xl:mb-12 lg:w-full  lg:3/4 xl:w-3/4 2xl:w-full 2xl:h-[100vh] "
        >
          <img
            src={Imagen}
            className="h-full w-full  xl:w-[100%] 2xl:h-[100%] "
            alt="Estudio"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full  lg:w-1/2 xl:h-[200px]flex flex-col md:flex justify-center items-start p-5"
        >
          {" "}
          <h2 className="text-3xl  mt-10 lg:text-4xl xl:text-5xl font-normal  font-sans leading-tight 2xl:text-6xl">
            Estudio jurídico
          </h2>
          <h1 className="text-4xl  xl:mb-6 sm:text-5xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-8xl xl:py-0  font-bold text-blue-100 font-sans leading-tight ">
            Hacemos <br /> simple tu
            <br /> escrituración
          </h1>
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
