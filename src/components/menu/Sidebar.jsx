import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Proceso-Electoral-2025.png";

const Sidebar = ({ setSeccion, menuAbierto, setMenuAbierto }) => {
  const [SPENIEEBCAbierto, setSPENIEEBCAbierto] = useState(false);
  const [comisionAbierto, setComisionAbierto] = useState(false);
  const [instrumentosAbierto, setinstrumentosAbierto] = useState(false);  
  const [concursosAbierto, setConcursosAbierto] = useState(false);

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
        className={`bg-white p-6 shadow-lg z-50 relative flex flex-col transition-all duration-300 ${menuAbierto ? "w-80 opacity-100 visible" : "w-0 opacity-0 hidden"
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
            <button onClick={() => setComisionAbierto(!comisionAbierto)} className="w-full text-left flex justify-between items-center hover:text-[#FF6A13]">
              Comisión de Seguimiento al Servicio Profesional Electoral Nacional y de la Rama
              Administrativa <span>{comisionAbierto ? "▲" : "▼"}</span>
            </button>
            {comisionAbierto && (
              <ul className="mt-3 ml-5 space-y-3 text-lg font-bold text-[#500778]">
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Integración")}>Integración</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Atribuciones")}>Atribuciones</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Sesiones_2025")}>Sesiones 2025</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Histórico_de_sesiones")}>Histórico de sesiones</button></li>
              </ul>
            )}
          </li>

          <li>
            <button onClick={() => setinstrumentosAbierto(!instrumentosAbierto)} className="w-full text-left flex justify-between items-center hover:text-[#FF6A13]">
              Instrumentos normativos <span>{instrumentosAbierto ? "▲" : "▼"}</span>
            </button>
            {instrumentosAbierto && (
              <ul className="mt-3 ml-5 space-y-3 text-lg font-bold text-[#500778]">
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Estatuto_del_Servicio_Profesional_Electoral")}>Estatuto del Servicio Profesional Electoral y del personal de la Rama Administrativa</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Lineamientos")}>Lineamientos</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Catálogo_de_cargos_y_puestos")}>Catálogo de cargos y puestos</button></li>
              </ul>
            )}
          </li>

          <li>
            <button onClick={() => setConcursosAbierto(!concursosAbierto)} className="w-full text-left flex justify-between items-center hover:text-[#FF6A13]">
              Concursos Públicos <span>{concursosAbierto ? "▲" : "▼"}</span>
            </button>
            {concursosAbierto && (
              <ul className="mt-3 ml-5 space-y-3 text-lg font-bold text-[#500778]">
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Com2022_2023")}>2022-2023</button></li>
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
