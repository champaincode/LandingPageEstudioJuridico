import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageHero from "../assets/Juridico.png";

function HeroOne() {
  // Estado para controlar el elemento del carrusel activo
  const [activeSlide, setActiveSlide] = useState(0);

  // Función para avanzar al siguiente elemento del carrusel
  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % 2);
  };

  return (
    <div className="hero bg-gradient-to-r from-blue-100 to-cyan-500 h-[100vh] max-w-screen overflow-hidden flex justify-start relative">
      <div className="carousel">
        <div
          className={`carousel-item ${activeSlide === 0 ? "active" : "hidden"}`}
        >
          <div className="hero-content   flex-col h-[680px]  justify-start">
            <div className="w-full lg:w-1/2  flex-col md:flex justify-center items-start  ">
              <h1
                id="elegirnos"
                className="text-4xl lg:text-5xl py-5 font-bold text-stone font-sans"
              >
                ¿POR QUE ELEGIRNOS?
              </h1>

              <p className="text-1xl lg:text-3xl py-5  font-medium font-sans  text-white ">
                Somos un estudio juridico especilizado en tramites de la
                propiedad inmuble en CABA & Provincia de Buenos Aires
              </p>
              <p className="text-1xl lg:text-2xl  py-5  font-lato font-regular  text-white ">
                Nos dedicamos a ofrecer las mejores soluciones legales con un
                enfoque profesional y dedicado, logrando resultaodos exitosos y
                satisfaccion, a traves de nuestro enfoque profesional y
                dedicado.
              </p>
              <p className="text-1xl lg:text-2xl py-5  font-lato font-regular  text-white ">
                Entendemos que cada caso es único y requiere una atención
                personalizada. Brindamos soluciones adaptadas a las necesidades
                individuales de cada cliente, ofreciendo soluciones
                especilizadas que se adaptan a las necesidades y objetivos de
                cada uno.
              </p>
            </div>
          </div>
          <div className="w-[30vw]  ">
            {" "}
            <div className="w-full   2xl:h-full xl:w-3/4 md:h-1/2 sm:h-1/2 ">
              <img src={ImageHero} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
        <div
          className={`carousel-item ${activeSlide === 1 ? "active" : "hidden"}`}
        >
          <div className="hero-content  flex-col h-[680px]  justify-start">
            <div className="w-full lg:w-1/2  flex-col md:flex justify-center items-start  ">
              <h1 className="text-4xl lg:text-7xl py-5 font-bold text-white font-sans">
                Aseguramos tu <br />
                escrituración
              </h1>

              <p className="text-1xl lg:text-2xl py-5 font-lato font-regular  text-white ">
                Acomodá la situación de tu propiedad ahora mismo ✅
              </p>
              <p className="text-1xl lg:text-2xl  py-5  font-lato font-regular  text-white ">
                Nuestro equipo de destacados profesionales está aquí para
                asistirte en la regularización de la situación de tu propiedad
                de manera ágil y eficiente.📜🔒
              </p>
              <p className="text-1xl lg:text-2xl py-5  font-lato font-regular  text-white ">
                No dudes en dar un paso adelante y garantizar la tranquilidad y
                seguridad de tu propiedad. Ponte en contacto con nosotros hoy
                mismo y permítenos ocuparnos de cada detalle de forma
                profesional. 😊📞
              </p>
            </div>
          </div>
          <div className="w-[800px]"></div>
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="bg-yellow-400 rounded-full p-4 px-5 absolute bottom-13 right-5"
      >
        {" "}
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default HeroOne;
