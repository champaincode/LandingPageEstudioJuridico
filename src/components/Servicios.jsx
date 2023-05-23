import React from "react";

function Servicios() {
  return (
    <div className="flex bg-gray flex-col items-center h-screen">
      <div className="flex flex-wrap justify-center px-4 sm:px-8 h-1/2">
        <div className="w-full flex justify-center title-container">
          <h1 id="servicios" className="text-3xl font-bold text-blue-100">
            Servicios
          </h1>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2 mt-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">
              Regulacion de situacion dominal de inmubles (CABA Y GBA)
            </h3>
            <p className="text-gray-700">
              Nos encargamos de gestionar y resolver los trámites necesarios
              para regularizar la situación legal de los inmuebles
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">Escritura notarial</h3>
            <p className="text-gray-700">
              Realizamos documentos legales que brinda protección y validez a
              los acuerdos y transacciones legales
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">Escritura judicial</h3>
            <p className="text-gray-700">
              Desarrollamos y llevamos a delante documentos legales para
              registar y documentar los actos y decisiones tomados por el juez
              para proteger tus derechos
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">Usucapion</h3>
            <p className="text-gray-700">
              Llevamos adelante la obtención de tu propiedad inmueble cuando ha
              sido ocupada y utilizada por un tiempo prolongado, tenes derechos
              para ser dueño/a.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center px-4 sm:px-8">
        <div className="w-full flex justify-center title-container">
          <h1 className="text-3xl font-bold text-blue-100">
            Otros soluciones personificadas
          </h1>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">
              Certificado de dominio
            </h3>
            <p className="text-gray-700">
              Otorgamos documento legal que establece y confirma la propiedad de
              un inmueble, proporcionando la evidencia de quién es el legítimo
              dueño de la propiedad.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">Partida de defuncion</h3>
            <p className="text-gray-700">
              Es necesaria para realizar trámites legales y administrativos
              relacionados con el fallecimiento, como la sucesión de bienes y la
              cancelación de documentos y servicios a nombre de la persona
              fallecida.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">Partida de divorcio</h3>
            <p className="text-gray-700">
              En términos de bienes e inmuebles porque permite establecer la
              distribución equitativa de los activos y propiedades adquiridos
              durante el matrimonio.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md p-4 h-full">
            <h3 className="text-lg font-semibold mb-2">
              Documentacion para extranjeros
            </h3>
            <p className="text-gray-700">
              Ofrecemos servicios relacionados con diferentes tipos de
              documentos, como la obtención de documentos de residencia y la
              gestión de pedidos de antecedentes penales para extranjeros.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
