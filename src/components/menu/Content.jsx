import React from "react";
import Calendario_Electoral_2025 from "../Generales/Calendario_Electoral_2025";
import PreparacionEleccion from "../etapas/PreparacionEleccion";
import Convocatoria from "../etapas/Convocatoria";
import JornadaElectoral from "../etapas/JornadaElectoral";
import Computos from "../etapas/Computos";
import Asignación_de_Cargos from "../etapas/Asignación_de_Cargos";
import Entrega_de_constancias from "../etapas/Entrega_de_constancias";
import Consejos_Distritales_Electorales from "../Generales/Consejos_Distritales_Electorales";
import Observadores_Electorales from "../Generales/Observadores_Electorales";
import SICOD from "../sistemas_proceso/SICOD";
import SIRSC from "../sistemas_proceso/SIRSC";
import Candidatas_y_Candidatos_Conoceles from "../sistemas_proceso/Candidatas_y_Candidatos_Conoceles";
import Marco_Jurídico_2025 from "../Generales/Marco_Jurídico_2025";
import Videos from "../Generales/videos";
import Convenios from "../Generales/Convenios";
import Geografía_Electoral_2025 from "../Generales/Geografía_Electoral_2025";
import Ubica_tu_casilla_2025 from "../Generales/Ubica_tu_casilla_2025";
import Como_Votar from "../Generales/Como_Votar";
import Quejas_Denuncias from "../Generales/Quejas_Denuncias";
import OchoContraViolencia from "../Generales/OchoContraViolencia";
import Infografías from "../Generales/Infografías";
import Procesol_Electorall_Locall_Extraordinariol_2025 from "../Generales/Procesol_Electorall_Locall_Extraordinariol_2025";
import Conoce_Boletas_Locales from "../Generales/Conoce_Boletas_Locales";
import Casillas_Seccionales_a_Instalar_por_Municipio from "../Generales/Casillas_Seccionales_a_Instalar_por_Municipio";

/* Este componente muestra dinámicamente los contenidos dependiendo de la sección seleccionada en el menú. */

const Content = ({ seccion }) => {
  switch (seccion) {
    case "Calendario":
      return <Calendario_Electoral_2025 />;
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
    case "consejos":
      return <Consejos_Distritales_Electorales />;
    case "observadores":
      return <Observadores_Electorales />;
    case "sicod":
      return <SICOD />;
    case "sirsc":
      return <SIRSC />;
    case "candidatos_conoceles":
      return <Candidatas_y_Candidatos_Conoceles />;
    case "Marco_Jurídico_2025":
      return <Marco_Jurídico_2025 />;
    case "Videos":
      return <Videos />;
    case "Convenios":
      return <Convenios />;
    case "Geografía_Electoral_2025":
      return <Geografía_Electoral_2025 />;
    case "Ubica_tu_casilla_2025":
      return <Ubica_tu_casilla_2025 />;
      case "Casillas_Seccionales_a_Instalar_por_Municipio":
      return <Casillas_Seccionales_a_Instalar_por_Municipio />;
    case "Quejas_Denuncias":
      return <Quejas_Denuncias />;
    case "Infografías":
      return <Infografías />;
    case "OchoContraViolencia":
      return <OchoContraViolencia />;
    case "Conoce_Boletas_Locales":
      return <Conoce_Boletas_Locales />;
    case "Como_Votar":
      return <Como_Votar />;
    case "Procesol_Electorall_Locall_Extraordinariol_2025":
      return <Procesol_Electorall_Locall_Extraordinariol_2025 />;
    default:
      return (
        <div className="p-4">
          <h2 className="text-2xl font-bold">Selecciona una opción del menú</h2>
        </div>
      );
  }
};

export default Content;
