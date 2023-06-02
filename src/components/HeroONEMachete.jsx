import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageHero from "../assets/Juridico.png";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function HeroOne() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  return (
    <div className="h-[100vh] w-[100%] xl:h-[120vh] 2xl:h-[120vh] bg-gradient-to-r from-blue-100 to-cyan-500  overflow-hidden flex justify-start 2xl:justify-center 2xl:flex relative 2xl:relative">
      <div className="carousel">
        <div
          className={`carousel-item ${activeSlide === 0 ? "active" : "hidden"}`}
        >
          <div className="hero  lg:h-[800px] h-[180vh] w-[100%] overflow-hidden">
            <div className="pt-4 gap-4  z-0 max-w-screen-2xl justify-center  items-center flex flex-col-reverse ajuste sm:flex-row-reverse  md:flex-row-reverse lg:h-[800px] h-[880px]">
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full sm:h-[50vh] md:h-[60vh] 2xl:mt-40 xl:h-[100vh] xl:mb-12 lg:w-full  lg:3/4 xl:w-3/4 2xl:w-[80%] 2xl:h-[100vh]"
              >
                <img
                  src={ImageHero}
                  className="h-full w-full  xl:w-[100%] 2xl:h-[100%] lg:w-full  lg:mt-12  2xl:w-full object-cover"
                  alt="Estudio"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full  lg:w-1/2 flex flex-col md:flex justify-center items-start p-5 "
              >
                <h1
                  id="elegirnos"
                  className="text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl py-5 mt-6 lg:mt-0 font-bold text-white font-sans"
                >
                  ¿Por qué elegirnos?
                </h1>
                <h3 className="text-2xl xl:py-2 xl:mb-6 lg:text-3xl py-5 font-lato font-regular leading-relaxed 2xl:text-4xl text-white">
                  Somos un estudio juridico especilizado en tramites de la
                  propiedad inmuble en CABA & Provincia de Buenos Aires
                </h3>
                <p className="text-xl lg:text-2xl  xl:mb-5 font-lato font-regular leading-relaxed 2xl:text-2xl  text-white">
                  Entendemos que cada caso es único y requiere atención
                  personalizada. Nuestros servicios se adaptan a las necesidades
                  individuales de cada cliente, ofreciendo soluciones
                  especializadas y orientadas a objetivos concretos.
                </p>
                <p className="text-xl lg:text-2xl  2xl:text-2xl  font-lato font-regular leading-relaxed  text-white">
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
          <div className=" hero lg:h-[800px] h-[180vh] w-[100%] overflow-hidden">
            <div className=" gap-4  z-0  justify-center xl:flex xl:justify-center items-center flex flex-col-reverse ajuste sm:flex-row-reverse  md:flex-row-reverse lg:h-[800px] h-[880px]">
              <motion.span
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl  2xl:text-8xl py-5 mt-6 lg:mt-0 font-bold text-white font-sans"
              >
                Más de 15 años de experiencia <br /> en propiedades inmuebles
              </motion.span>
            </div>
          </div>
        </div>
        <div
          className={`carousel-item ${activeSlide === 2 ? "active" : "hidden"}`}
        >
          <div className="hero  lg:h-[800px] h-[180vh] w-[100%] overflow-hidden">
            <div className="pt-4 gap-4  z-0 max-w-screen-2xl justify-center  items-center flex flex-col-reverse ajuste sm:flex-row-reverse  md:flex-row-reverse lg:h-[800px] h-[880px]">
              <motion.div
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full sm:h-[50vh] md:h-[60vh] 2xl:mt-40 xl:h-[100vh] xl:mb-12 lg:w-full  lg:3/4 xl:w-3/4 2xl:w-[80%] 2xl:h-[100vh]"
              >
                <img
                  src={ImageHero}
                  className="h-full w-full  xl:w-[100%]  imagen-transparente 2xl:h-[100%] lg:w-full  lg:mt-12  2xl:w-full object-cover"
                  alt="Estudio"
                />
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-full  lg:w-1/2 flex flex-col md:flex justify-center items-start p-5 "
              >
                <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-8xl py-5 mt-6 lg:mt-0 font-bold text-white font-sans">
                  Todas las <br></br> reglamentaciones al día
                </h1>
                <h3 className="text-2xl xl:py-2 xl:mb-6 lg:text-3xl py-5 font-lato font-regular leading-relaxed 2xl:text-4xl text-white">
                  ¡Solucioná la situación de tu propiedad ahora mismo!
                </h3>
                <p className="text-xl lg:text-2xl  xl:mb-5 font-lato font-regular leading-relaxed 2xl:text-3xl  text-white">
                  Si todavía no lograste poner en regla tus inmuebles, estás a
                  tiempo de hacerlo. Nuestro equipo profesional de abogados se
                  encargará de:
                </p>
                <ul className="list-disc text-white">
                  <li className="custom-disc">
                    <p className=" text-xl mb-3 lg:text-2xl 2xl:text-3xl font-lato font-regular leading-relaxed text-white">
                      Gestionar en tiempo y forma los trámites necesarios para
                      legalizar tus inmuebles.
                    </p>
                  </li>
                  <li className="custom-disc">
                    <p className=" text-xl mb-3 lg:text-2xl 2xl:text-3xl font-lato font-regular leading-relaxed text-white">
                      {" "}
                      Realizar la documentación legal para brindarte protección
                      y tranquilidad.
                    </p>
                  </li>
                  <li className="custom-disc">
                    <p className=" text-xl lg:text-2xl 2xl:text-3xl font-lato font-regular leading-relaxed text-white">
                      {" "}
                      Garantizar tus derechos como propietario.
                    </p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
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
