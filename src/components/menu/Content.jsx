import React from "react";
import PreparacionEleccion from "../etapas/PreparacionEleccion";
import Convocatoria from "../etapas/Convocatoria";
import JornadaElectoral from "../etapas/JornadaElectoral";
import Computos from "../etapas/Computos";
import Asignación_de_Cargos from "../etapas/Asignación_de_Cargos";
import Entrega_de_constancias from "../etapas/Entrega_de_constancias";
import Funciones from "../SPEN-IEEBC/Funciones";
import Plaza_sy_adscripciones from "../SPEN-IEEBC/Plaza_sy_adscripciones";

/* Este componente muestra dinámicamente los contenidos dependiendo de la sección seleccionada en el menú. */

const Content = ({ seccion }) => {
  switch (seccion) {
    case "Funciones":
      return <Funciones />;
    case "Plaza_sy_adscripciones":
      return <Plaza_sy_adscripciones />;
    case "preparacion":
      return <PreparacionEleccion />;
    case "convocatoria":
      return <Convocatoria />;
    case "jornada":
      return <JornadaElectoral />;
    case "computo":
      return <Computos />;
    case "asignacion":
      return <Asignación_de_Cargos />;
    case "constancias":
      return <Entrega_de_constancias />;
    default:
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold">Selecciona una opción del menú</h2>
        </div>
      );
  }
};

export default Content;
