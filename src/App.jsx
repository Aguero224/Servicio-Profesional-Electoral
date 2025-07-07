import React, { useState } from "react";
import Sidebar from "./components/menu/Sidebar";
import Content from "./components/menu/Content";
import Header from "./components/menu/Header";

const App = () => {
  const [seccion, setSeccion] = useState("");
  const [menuAbierto, setMenuAbierto] = useState(true);

  return (
    <div className="flex flex-col min-h-screen h-auto">
      {/* Encabezado normal (ya no es fijo) */}
      <Header />

      {/* Contenedor principal que toma en cuenta el Sidebar */}
      <div className="flex flex-1 transition-all duration-300">
        {/* Menú lateral */}
        <Sidebar 
          setSeccion={setSeccion} 
          menuAbierto={menuAbierto} 
          setMenuAbierto={setMenuAbierto} 
        />

        {/* Contenido principal */}
        <main className="p-6 bg-gray-100 transition-all duration-300 flex-grow flex flex-col">
          <div className="w-full bg-gray-100">
            <Content seccion={seccion} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
