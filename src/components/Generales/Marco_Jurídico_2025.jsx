import React, { useEffect, useState } from "react";

const Marco_Juridico_2025 = () => {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    fetch("/proceso-2025/MarcoJuridico.json")
      .then((res) => res.json())
      .then((data) => setDocumentos(data))
      .catch((err) => console.error("Error al cargar documentos:", err));
  }, []);

  return (
    <div className="p-6 ">
      <h2 className="text-3xl font-bold text-black-800 mb-6 text-center">Marco Jurídico</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {documentos.map((doc, i) => (
          <a
            key={i}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-gray-50 hover:bg-gray-100 flex flex-col justify-between"
          >
            <div>
              <div className="text-sm text-gray-500 mb-1">{doc.categoria}</div>
              <div className="text-lg font-semibold text-[#500778]">{doc.nombre}</div>
            </div>
            <div className="mt-4 text-sm text-right text-[#500778]">Ver documento →</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Marco_Juridico_2025;
