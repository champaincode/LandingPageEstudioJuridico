import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

// import { useInView } from "react-intersection-observer";

const Card = ({ title, description }) => (
  <motion.div
    variants={fadeIn("up", 0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0.3 }}
    className="max-w-sm  overflow-hidden shadow-lg servicios h-64 lg:h-[40vh] xl:h-[45vh] bg-white rounded-lg"
  >
    <div className="px-6 py-4 ">
      <div className="font-bold text-xl mb-2 text-blue-100">{title}</div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </motion.div>
);

function Servicios() {
  //   const [ref, inView] = useInView({
  //   threshold: 0.5,
  // });
  return (
    <section className="h-[400vh] xl:h-[150vh] md:h-[130vh]  lg:h-[130vh]   bg-gray mb-5 ">
      <div>
        <div className="container mx-auto text-center  ">
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold   text-center text-blue-100 pt-[120px]   "
          >
            Servicios
          </motion.h2>
          <div className="flex flex-wrap -mx-2" id="servicios">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Regulacion de situacion dominal de inmubles (CABA Y GBA)"
                description="Nos encargamos de gestionar y
                resolver los trámites necesarios
                para regularizar la situación legal
                de tus inmuebles.
                "
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Escritura notarial"
                description="Realizamos documentos
                legales para brindar
                protección y validez a los
                acuerdos y las transacciones
                legales,"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Escritura judicial"
                description="Registramos los actos y las
                decisiones del juez en documentos
                legales para proteger tus derechos."
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Usucapion"
                description="Llevamos adelante la
                obtención de tu propiedad
                inmueble cuando ha sido
                ocupada y utilizada por un
                tiempo prolongado."
              />
            </div>
          </div>

          <motion.h3
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="text-3xl font-bold mt-8 xl:mt-0 xl:mb-2 text-blue-100 pt-[120px] "
          >
            Otras soluciones personalizadas
          </motion.h3>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Certificado de dominio"
                description="Otorgamos documentación
                legal para establecer y
                confirmar la propiedad de un
                inmueble, proporcionando así
                la evidencia de quién es el
                legítimo dueño de la
                propiedad."
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Partida de defuncion"
                description="Necesaria para realizar
                trámites legales y
                administrativos relacionados
                con el fallecimiento, como la
                sucesión de bienes y la
                cancelación de documentos
                y servicios a nombre de la
                persona fallecida."
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Partida de divorcio"
                description="Garantizamos la distribución
                equitativa de los activos y
                propiedades adquiridos
                durante el matrimonio."
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 p-2">
              <Card
                title="Documentacion para extranjeros"
                description="Llevamos a cabo la
                documentación de
                residencia y la gestión de
                pedidos de antecedentes
                penales para extranjeros."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
