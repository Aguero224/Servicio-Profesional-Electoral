import React, { useState, useEffect } from "react";

const Geografía_Electoral_2025 = () => {
  // Estado para almacenar los datos del archivo JSON
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Aquí especificamos la ruta del archivo JSON
        const response = await fetch("/proceso-2025/Geografía-Electoral-2025.json");
        const jsonData = await response.json();
        setData(jsonData.data); // Guardamos los datos en el estado
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData(); // Llamamos a la función para cargar los datos
  }, []); // Este useEffect solo se ejecuta cuando el componente se monta

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2 text-center">Geografía Electoral</h2>
      <p className="mb-3 text-center">
        El 6 de marzo de 2025, el Consejo General del INE emitió el Acuerdo INE/CG202/2025 por el
        que aprobó el marco geográfico para el PELE 2025, conformando 7 Distritos Judiciales
        Electorales locales, denominados de la siguiente manera:
      </p>

      <div className="mt-6">
        <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded-lg">
          <thead className="bg-[#500778]">
          <tr>
              <th className="py-3 px-4 text-center text-white">ENTIDAD</th>
              <th className="py-3 px-4 text-center text-white">NOMBRE ENTIDAD</th>
              <th className="py-3 px-4 text-center text-white">TIPO AREA JUDICIAL</th>
              <th className="py-3 px-4 text-center text-white">MUNICIPIO</th>
              <th className="py-3 px-4 text-center text-white">NOMBRE MUNICIPIO</th>
              <th className="py-3 px-4 text-center text-white">AREA JUDICIAL</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((district, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b text-center">{district.entidad}</td>
                  <td className="py-3 px-4 border-b text-center">{district.nombreEntidad}</td>
                  <td className="py-3 px-4 border-b text-center">{district.tipoAreaJudicial}</td>
                  <td className="py-3 px-4 border-b text-center">{district.municipio}</td>
                  <td className="py-3 px-4 border-b text-center">{district.nombreMunicipio}</td>
                  <td className="py-3 px-4 border-b text-center">{district.areaJudicial}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  No hay datos disponibles.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-6">
  Además, se pone a su disposición para consulta el siguiente{" "}
  <a
    href="/proceso-2025/archivos/1_02_COBERTURA_JUDICIAL_LOCAL.pdf"  // Asegúrate de que la ruta sea correcta
    className="text-[#500778] hover:text-[#FF6A13] transition-colors duration-200 font-bold"
    aria-label="Consulta el mapa de cobertura judicial local"
  >
    MAPA DE COBERTURA JUDICIAL LOCAL
  </a>
</p>
    </div>
  );
};

export default Geografía_Electoral_2025;
