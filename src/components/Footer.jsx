import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="footer p-10 bg-blue text-base-content max-w-screen ">
      <div>
        <span className="footer-title">Servicios</span>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Escrituras de propiedad
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Usurpación de inmuebles
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Título de propiedad
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Registro de inmueble{" "}
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Usurpación
        </Link>
      </div>
      <div>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter mt-9 cursor-pointer"
        >
          Certificado de dominio
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Partidas de defunción
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Partidas de divorcio{" "}
        </Link>
        <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={0}
          to="serviceonfooter"
          className="linkfooter cursor-pointer"
        >
          Documentación extranjeros{" "}
        </Link>
      </div>
      <div>
        <span className="footer-title">Dirección</span>
        <p className="">
          Av. Libertador 999999 <br></br> Cuidad Autónoma de Buenos Aires,
          Argentina{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
