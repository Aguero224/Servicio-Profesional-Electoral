import React, { useState, useEffect } from "react";

const Consejos_Distritales_Electorales = () => {
  const [activeTab, setActiveTab] = useState("mexicali");  // Estado para las tabs
  const [districtData, setDistrictData] = useState([]);  // Estado para los datos de los distritos

  // Cargar los datos del JSON según la tab seleccionada
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/proceso-2025/data.json");
      const data = await response.json();
      setDistrictData(data[activeTab]);
    };
  
    fetchData();
  }, [activeTab]);
  
  return (
    <div className="container mx-auto p-8">
      {/* Sección de Título y Descripción */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black-700">Consejos Distritales</h1>
        <p className="text-xl text-black-600 mt-4">
        Los Consejos Distritales Electorales, son órganos operativos y dependientes del Consejo General, responsables en el ámbito de su competencia, de la preparación, organización, desarrollo, vigilancia y cómputo de las elecciones de Gobernador, munícipes y diputados, por ambos principios.En cada Distrito Electoral en que se divida el territorio del Estado funcionará un Consejo, con residencia en la cabecera del mismo.
        </p>
      </div>

      {/* Imagen */}
      <div className="flex justify-center mb-8">
        <img src="Consejos.png" alt="Consejos Distritales" className="w-[1000px] h-auto mx-auto"  />
      </div>

      {/* Tabs de los Distritos */}
<div className="flex justify-center space-x-6 mb-6">
  <button
    className={`py-2 px-6 text-lg font-semibold rounded-md ${activeTab === "mexicali" ? "bg-[#500778] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-[#500778]/20"}`}
    onClick={() => setActiveTab("mexicali")}
  >
    Mexicali
  </button>
  <button
    className={`py-2 px-6 text-lg font-semibold rounded-md ${activeTab === "tecate" ? "bg-[#500778] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-[#500778]/20"}`}
    onClick={() => setActiveTab("tecate")}
  >
    Tecate
  </button>
  <button
    className={`py-2 px-6 text-lg font-semibold rounded-md ${activeTab === "tijuana" ? "bg-[#500778] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-[#500778]/20"}`}
    onClick={() => setActiveTab("tijuana")}
  >
    Tijuana
  </button>
  <button
    className={`py-2 px-6 text-lg font-semibold rounded-md ${activeTab === "rosarito" ? "bg-[#500778] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-[#500778]/20"}`}
    onClick={() => setActiveTab("rosarito")}
  >
    Playas de Rosarito
  </button>
  <button
    className={`py-2 px-6 text-lg font-semibold rounded-md ${activeTab === "ensenada" ? "bg-[#500778] text-white shadow-md" : "bg-gray-200 text-gray-700 hover:bg-[#500778]/20"}`}
    onClick={() => setActiveTab("ensenada")}
  >
    Ensenada
  </button>
</div>


      {/* Tabla de los distritos */}
      <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
  <thead className="bg-[#500778]">
    <tr>
      <th className="py-3 px-4 text-left text-white">Distrito</th>
      <th className="py-3 px-4 text-left text-white">Domicilio</th>
      <th className="py-3 px-4 text-left text-white">Integración</th>
      <th className="py-3 px-4 text-left text-white">Sesiones</th>
      <th className="py-3 px-4 text-left text-white">Memorias</th>
    </tr>
  </thead>
  <tbody>
    {districtData.length > 0 ? (
      districtData.map((district, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="py-3 px-4 border-b">{district.distrito}</td>
          <td className="py-3 px-4 border-b">{district.domicilio}</td>
          <td className="py-3 px-4 border-b">
            {district.integracion.url ? (
              <a
                href={district.integracion.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-bold"
              >
                {district.integracion.contenido}
              </a>
            ) : null} {/* Si no hay URL, no muestra nada */}
          </td>
          <td className="py-3 px-4 border-b">
            {district.sesiones.url ? (
              <a
                href={district.sesiones.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-bold"
              >
                {district.sesiones.contenido}
              </a>
            ) : null} {/* Si no hay URL, no muestra nada */}
          </td>
          <td className="py-3 px-4 border-b">
            {district.memorias.url ? (
              <a
                href={district.memorias.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-bold"
              >
                {district.memorias.contenido}
              </a>
            ) : null} {/* Si no hay URL, no muestra nada */}
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="5" className="text-center py-4 text-gray-500">No hay datos disponibles.</td>
      </tr>
    )}
  </tbody>
</table>


       {/* Sección de Convocatorias con Imagen */}
<div className="mt-12 text-center">
  <a href="https://ieebc.mx/consejos-distritales-2025/" target="_blank" rel="noopener noreferrer">
    <img 
      src="Convocatorias.png" 
      alt="Convocatorias" 
      className="w-[1000px] h-auto mx-auto cursor-pointer" 
    />
  </a>
</div>


    </div>
  );
};

export default Consejos_Distritales_Electorales;
