import React, { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const Procesol_Electorall_Locall_Extraordinariol_2025 = () => {
  const [documentos, setDocumentos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/proceso-2025/proceso-electoral-extraordinario-2025.json")
      .then((res) => {
        if (!res.ok) throw new Error("404 - No se encontró el archivo JSON");
        return res.json();
      })
      .then((data) => setDocumentos(data.documentos))  // Asumiendo que la lista de documentos está en la propiedad 'documentos'
      .catch((err) => {
        console.error("Error al cargar el documento:", err);
        setError(true);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Proceso Electoral Local Extraordinario 2025</h2>

      {error ? (
        <p className="text-red-600">No se pudo cargar los documentos. Intenta más tarde.</p>
      ) : documentos.length === 0 ? (
        <p className="text-gray-600">Cargando documentos...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentos.map((documento, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{documento.titulo}</h3>
                <p className="text-gray-600">{documento.descripcion}</p>
              </div>
              <a
                href={documento.enlace}
                download={documento.nombreArchivo}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-xl transition"
              >
                <FaFilePdf size={20} />
                Descargar PDF
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Procesol_Electorall_Locall_Extraordinariol_2025;