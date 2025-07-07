import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Proceso-Electoral-2025.png";

const Sidebar = ({ setSeccion, menuAbierto, setMenuAbierto }) => {
  const [SPENIEEBCAbierto, setSPENIEEBCAbierto] = useState(false);
  const [etapasAbierto, setEtapasAbierto] = useState(false);

  const handleMenuClick = (seccion) => {
    setSeccion(seccion);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        className="bg-[#500778] text-white p-2 rounded-md fixed transition-all duration-300 z-50 hover:bg-[#FF6A13]"
        style={{
          left: menuAbierto ? "20.5rem" : "1.5rem",
          top: "5px"
        }}
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <FaBars size={22} />
      </button>

      <aside
        className={`bg-white p-6 shadow-lg z-50 relative flex flex-col transition-all duration-300 ${
          menuAbierto ? "w-80 opacity-100 visible" : "w-0 opacity-0 hidden"
        } flex-shrink-0 min-h-screen`}
      >
        <div className="flex flex-col w-full">
          <img src={logo} alt="Proceso Electoral" className="w-100" />
        </div>

        <ul className="space-y-6 font-bold text-[#500778] mt-6 text-base flex-grow">
          <li>
            <button onClick={() => setSPENIEEBCAbierto(!SPENIEEBCAbierto)} className="w-full text-left flex justify-between items-center hover:text-[#FF6A13]">
             Estructura SPEN-IEEBC <span>{SPENIEEBCAbierto ? "▲" : "▼"}</span>
            </button>
            {SPENIEEBCAbierto && (
              <ul className="mt-3 ml-5 space-y-3 text-lg font-bold text-[#500778]">
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Plaza_sy_adscripciones")}>Plazas y Adscripciones</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Funciones")}>Funciones</button></li>
              </ul>
            )}
          </li>

          <li>
            <button onClick={() => setEtapasAbierto(!etapasAbierto)} className="w-full text-left flex justify-between items-center hover:text-[#FF6A13]">
              Etapas <span>{etapasAbierto ? "▲" : "▼"}</span>
            </button>
            {etapasAbierto && (
              <ul className="mt-3 ml-5 space-y-3 text-lg font-bold text-[#500778]">
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("preparacion")}>Preparación de la Elección</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("convocatoria")}>Convocatoria y postulación de candidaturas</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("jornada")}>Jornada Electoral</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("computo")}>Cómputos</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("asignacion")}>Asignación de Cargos</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("constancias")}>Entrega de Constancias de Mayoría y Declaración de validez de la elección</button></li>
              </ul>
            )}
          </li>
        </ul>

        <div className="text-base text-gray-700 mt-8 leading-6">
          <p><strong>Mexicali:</strong> Calzada Cuauhtémoc # 801 y Rio Mocorito, Colonia Pro-Hogar, C.P. 21240</p>
          <p>(686) 568-4174, (686) 568-4176</p>
          <p className="mt-4"><strong>Tijuana:</strong> Blvd. Diaz Ordaz 4508, Las Palmas, CP 22106</p>
          <p>(664) 688-6413</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
