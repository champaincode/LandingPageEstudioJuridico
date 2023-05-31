import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageHero from "../assets/Juridico.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function HeroOne() {
  // Estado para controlar el elemento del carrusel activo
  const [activeSlide, setActiveSlide] = useState(0);

  // Función para avanzar al siguiente elemento del carrusel
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  return (
    <div className="hero h-[100vh] w-[100%] bg-gradient-to-r from-blue-100 to-cyan-500  overflow-hidden flex justify-start 2xl:justify-center 2xl:flex relative 2xl:relative">
      <div id="elegirnos" className="carousel">
        <div
          className={`carousel-item ${activeSlide === 0 ? "active" : "hidden"}`}
        >
          <div className="hero  lg:h-[800px] h-[180vh] w-[100%]  overflow-hidden">
            <div className="hero-content w-screen  flex flex-col-reverse sm:flex-row-reverse justify-between md:flex-row-reverse  lg:h-[800px] h-[680px]">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full    xl:h-3/4   lg:w-full 2xl:h-3/4 xl:w-3/4"
              >
                <img
                  src={ImageHero}
                  className="h-[100vh] lg:h-[300px]   xl:h-[500px] md:h-[300px] lg:w-full 2xl:h-full lg:mt-12  2xl:w-full object-cover"
                  alt="Estudio"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full  p lg:w-1/2 flex flex-col md:flex justify-center items-start p-5"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-6xl py-5 mt-6 lg:mt-0 font-bold text-stone font-sans">
                  ¿POR QUE ELEGIRNOS ?
                </h1>
                <h3 className=" lg:text-4xl xl:text-3xl text-white font-medium font-sans">
                  Somos un estudio juridico especilizado en tramites de la
                  propiedad inmuble en CABA & Provincia de Buenos Aires
                </h3>
                <p className="text-1xl lg:text-2xl py-5 font-lato font-regular">
                  ¡Despreocúpate y obtené asesoría <br /> y servicio
                  profesional!
                </p>
                <p className="text-1xl lg:text-2xl font-lato font-regular">
                  Garantizamos que cumplas con <br /> todas las regulaciones.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className={`carousel-item ${activeSlide === 1 ? "active" : "hidden"}`}
        >
          <div className="hero-content  flex-col h-[680px]  justify-start">
            <div className=" w-[90vw] lg:w-full lg:w-1/2  flex-col md:flex justify-center items-start  ">
              <h1 className="text-4xl lg:text-7xl py-5 font-bold text-white font-sans">
                Aseguramos tu <br />
                escrituración
              </h1>

              <p className="text-1xl lg:text-2xl  py-5 font-lato font-regular  text-white ">
                Acomodá la situación de tu propiedad ahora mismo ✅
              </p>
              <p className="text-1xl lg:text-2xl  py-5  font-lato font-regular  text-white ">
                Nuestro equipo de destacados profesionales está aquí para
                asistirte en la regularización de la situación de tu propiedad
                de manera ágil y eficiente.📜🔒
              </p>
              <p className="text-1xl lg:text-2xl  py-5  font-lato font-regular  text-white ">
                No dudes en dar un paso adelante y garantizar la tranquilidad y
                seguridad de tu propiedad. Ponte en contacto con nosotros hoy
                mismo y permítenos ocuparnos de cada detalle de forma
                profesional. 😊📞
              </p>
            </div>
            <div className="2xl:w-[680px] 2xl:bg-gray "></div>
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="bg-yellow-400 rounded-full p-4 px-5 absolute mt-2 bottom-13 top-4  right-5   sm:top-4 md:top-[50vh]  xl:top-[50vh]   2xl:top-[50vh]    "
        >
          {" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default HeroOne;
