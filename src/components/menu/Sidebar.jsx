import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/Proceso-Electoral-2025.png";

const Sidebar = ({ setSeccion, menuAbierto, setMenuAbierto }) => {
  const [etapasAbierto, setEtapasAbierto] = useState(false);
  const [SistemasAbierto, setSistemasAbierto] = useState(false);
  const [ConvenioAbierto, setConvenioAbierto] = useState(false);

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
          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Calendario")}>Calendario del Proceso Electoral Extraordinario 2025</button></li>

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

          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("consejos")}>Consejos Distritales Electorales</button></li>
          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("observadores")}>Observadores Electorales</button></li>

          <li>
            <button onClick={() => setSistemasAbierto(!SistemasAbierto)} className="w-full text-left flex justify-between items-center hover:text-[#FF6A13]">
              Sistemas del Proceso Electoral Local Extraordinario
              <span>{SistemasAbierto ? "▲" : "▼"}</span>
            </button>
            {SistemasAbierto && (
              <ul className="mt-3 ml-5 space-y-3 text-lg font-bold text-[#500778]">
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("sicod")}>Sistema de Registro de Aspirantes al cargo de Consejerías Electorales Distritales (SICOD)</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("sirsc")}>Sistema para el Reclutamiento, Selección y Contratación de SEL y CAEL (SIRSC)</button></li>
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("candidatos_conoceles")}>Sistema de Candidatas y Candidatos “Conóceles”</button></li>
              </ul>
            )}
          </li>

          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Marco_Jurídico_2025")}>Marco Jurídico</button></li>
          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Videos")}>Videos</button></li>

          <li>
            <button onClick={() => setConvenioAbierto(!ConvenioAbierto)} className="w-full text-left flex justify-between items-center hover:text-[#FF6A13]">
              Convenios <span>{ConvenioAbierto ? "▲" : "▼"}</span>
            </button>
            {ConvenioAbierto && (
              <ul className="mt-3 ml-5 space-y-3 text-lg font-bold text-[#500778]">
                <li><button className="w-full text-left text-sm hover:text-[#FF6A13]" onClick={() => handleMenuClick("Procesol_Electorall_Locall_Extraordinariol_2025")}>Procesos Electoral Local Extraordinario 2025</button></li>
              </ul>
            )}
          </li>

          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Geografía_Electoral_2025")}>Geografía Electoral</button></li>

          <li>
            <a href="https://ieebc.mx/archivos/proceso2025/ListaUbicacionMesasDirectivasJL.pdf">
              <button className="w-full text-left hover:text-[#FF6A13]">Ubica tu casilla</button>
            </a>
          </li>

          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Casillas_Seccionales_a_Instalar_por_Municipio")}>Casillas Seccionales a Instalar por Municipio</button></li>

          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Quejas_Denuncias")}>Quejas y Denuncias</button></li>
          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Conoce_Boletas_Locales")}>Conoce Tus Boletas Locales</button></li>
          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Como_Votar")}>Cómo Votar</button></li>
          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("Infografías")}>Infografías</button></li>
          <li><button className="w-full text-left hover:text-[#FF6A13]" onClick={() => handleMenuClick("OchoContraViolencia")}>8 de 8 Contra la violencia de género</button></li>

          <li>
            <a
              href="https://www.ieebc.mx/igualdad/redjuzgadoras.html"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-left text-sm hover:text-[#FF6A13]"
            >
              Red de Mujeres Juzgadoras, Candidatas y Electas en Baja California
            </a>
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
