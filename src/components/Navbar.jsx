import React, { useState } from "react";
import { useScrollPosition } from "../hook/useScrollPosition";
import { Link } from "react-scroll";

function Navbar() {
  const scrollPosition = useScrollPosition();
  const [selectedSection, setSelectedSection] = useState("inicio");
  return (
    <div
      className={`navbar sticky max-w-screen  top-0 duration-300 h-12 min-h-0 z-50 ${
        scrollPosition > 75
          ? "bg-gradient-to-r from-blue-100 to-cyan-500"
          : "bg-gray"
      }`}
    >
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                to="inicio"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                to="elegirnos"
              >
                ¿Por que elegirnos?
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                to="servicios"
              >
                Servicios
              </Link>
            </li>
          </ul>
        </div>
        <a
          className={`text-xl navbar-center ${
            scrollPosition > 100 ? "text-gray" : "text-stone"
          }`}
        >
          Estudio Juridico
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className=" menu-horizontal px-2 mr-4">
          <li>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              to="inicio"
              className={`link mr-4  ${
                scrollPosition > 100 ? "text-gray" : "text-stone"
              } ${selectedSection === "inicio" ? "selected" : ""}`}
              onClick={() => setSelectedSection("inicio")}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              to="elegirnos"
              className={`link mr-4 ${
                scrollPosition > 100 ? "text-gray" : "text-stone"
              } ${selectedSection === "elegirnos" ? "selected" : ""}`}
              onClick={() => setSelectedSection("elegirnos")}
            >
              ¿Por que elegirnos?
            </Link>
          </li>

          <li></li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              to="servicios"
              className={`link ${
                scrollPosition > 100 ? "text-gray" : "text-stone"
              }  ${selectedSection === "servicios" ? "selected" : ""}`}
              onClick={() => setSelectedSection("servicios")}
            >
              Servicios
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
