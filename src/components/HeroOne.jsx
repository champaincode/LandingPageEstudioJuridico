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
    <div className="hero h-[150vh] lg:h-[120vh] xl:h-[120vh] 2xl:h-[100vh] w-[100%] bg-gradient-to-r from-blue-100 to-cyan-500  overflow-hidden flex justify-start 2xl:justify-center 2xl:flex relative 2xl:relative">
      <div className="carousel">
        <div
          className={`carousel-item ${activeSlide === 0 ? "active" : "hidden"}`}
        >
          <div className="hero  lg:h-[900px] h-[180vh] w-[100%] overflow-hidden">
            <div className="hero-content w-screen  flex flex-col-reverse sm:flex-col-reverse justify-between md:flex-row-reverse  lg:h-[800px] h-[750px]">
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full   lg:w-full 2xl:h-3/4 xl:w-3/4"
              >
                <img
                  src={ImageHero}
                  className="h-[40vh]  lg:h-[80vh] md:h-[50vh] lg:w-full 2xl:h-full lg:mt-12  2xl:w-full object-cover"
                  alt="Estudio"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full  lg:w-1/2 flex flex-col md:flex justify-center items-start p-5"
              >
                <h1
                  id="elegirnos"
                  className="text-3xl text-white lg:text-4xl sm:text-3xl md:text-5xl  xl:text-5xl 2xl:text-6xl py-5 mt-6 lg:mt-0 font-bold font-sans"
                >
                  ¿POR QUE ELEGIRNOS ?
                </h1>
                <h3 className="text-xl lg:text-2xl xl:text-2xl text-white font-medium font-sans">
                  Somos un estudio juridico especilizado en tramites de la
                  propiedad inmuble en CABA & Provincia de Buenos Aires
                </h3>
                <p className="text-1xl lg:text-lg py-5 font-lato font-regular text-white">
                  Entendemos que cada caso es único y requiere atención
                  personalizada. Nuestros servicios se adaptan a las necesidades
                  individuales de cada cliente, ofreciendo soluciones
                  especializadas y orientadas a objetivos concretos.
                </p>
                <p className="text-1xl lg:text-lg font-lato font-regular text-white">
                  Queremos garantizarte tranquilidad y bienestar al ocuparnos de
                  tus asuntos legales. Por esa razón, nos comprometemos a
                  mantenerte informado de tu caso y gestionar tus documentos a
                  tiempo.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className={`carousel-item ${activeSlide === 1 ? "active" : "hidden"}`}
        >
          <div className="hero-content flex-col h-[750px] justify-start">
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="w-[90vw] lg:w-1/2 flex-col md:flex justify-center items-start "
            >
              <h1 className="text-4xl lg:text-6xl xl:mt-12 xl:text-6xl 2xl:text-7xl py-5 font-bold text-white font-sans">
                Todas las <br></br> reglamentaciones al día
              </h1>

              <p className="text-1xl lg:text-2xl 2xl:text-3xl  py-5 font-lato font-regular text-white">
                Si todavía no lograste poner en regla tus inmuebles, estás a
                tiempo de hacerlo. Nuestro equipo profesional de abogados se
                encargará de:
              </p>
              <ul className="list-disc text-white">
                <li className="custom-disc">
                  <p className=" text-xs mb-3 lg:text-lg  2xl:text-3xl font-lato font-regular leading-relaxed text-white">
                    Gestionar en tiempo y forma los trámites necesarios para
                    legalizar tus inmuebles.
                  </p>
                </li>
                <li className="custom-disc">
                  <p className="text-xs mb-3 lg:text-xl  2xl:text-3xl font-lato font-regular leading-relaxed text-white">
                    {" "}
                    Realizar la documentación legal para brindarte protección y
                    tranquilidad.
                  </p>
                </li>
                <li className="custom-disc">
                  <p className=" text-xs lg:text-xl  2xl:text-3xl font-lato font-regular leading-relaxed text-white">
                    {" "}
                    Garantizar tus derechos como propietario.
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="2xl:w-[400px] lg:w-[500px]"></div>
        </div>
        <button
          onClick={nextSlide}
          className="bg-yellow-400 rounded-full p-4 px-5 absolute mt-2 bottom-13 top-12  right-5   sm:top-4 md:top-[50vh]  xl:top-[50vh]   2xl:top-[50vh]    "
        >
          {" "}
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default HeroOne;
