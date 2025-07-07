import React from "react";
import Funciones from "../SPEN-IEEBC/Funciones";
import Plaza_sy_adscripciones from "../SPEN-IEEBC/Plaza_sy_adscripciones";
import Atribuciones from "../Comisión de Seguimiento al Servicio Profesional/Atribuciones"; 
import Histórico_de_sesiones from "../Comisión de Seguimiento al Servicio Profesional/Histórico_de_sesiones";
import Integración from "../Comisión de Seguimiento al Servicio Profesional/Integración";
import Sesiones_2025 from "../Comisión de Seguimiento al Servicio Profesional/Sesiones_2025"; 
import Catálogo_de_cargos_y_puestos from "../Instrumentos normativos/Catálogo_de_cargos_y_puestos";
import Estatuto_del_Servicio_Profesional_Electoral from "../Instrumentos normativos/Estatuto_del_Servicio_Profesional_Electoral";
import Lineamientos from "../Instrumentos normativos/Lineamientos"; 
import Com2022_2023 from "../Concursos Públicos/Com2022_2023";

/* Este componente muestra dinámicamente los contenidos dependiendo de la sección seleccionada en el menú. */

const Content = ({ seccion }) => {
  switch (seccion) {
    case "Funciones":
      return <Funciones />;
    case "Plaza_sy_adscripciones":
      return <Plaza_sy_adscripciones />;
    case "Atribuciones":
      return <Atribuciones />;
      case "Histórico_de_sesiones":
      return <Histórico_de_sesiones />;
      case "Integración":
      return <Integración />;
      case "Sesiones_2025":
      return <Sesiones_2025 />;
      case "Estatuto_del_Servicio_Profesional_Electoral":
      return <Estatuto_del_Servicio_Profesional_Electoral />;
    case "Lineamientos":
      return <Lineamientos />;
    case "Catálogo_de_cargos_y_puestos":       
      return <Catálogo_de_cargos_y_puestos />;  
      case "Com2022_2023":       
      return <Com2022_2023 />;           

    default:
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold">Selecciona una opción del menú</h2>
        </div>
      );
  }
};

export default Content;
