import { useState } from "react";
import Modal_Imagen from "./Modal_Imagen";
import Boleta_Card from "./Boleta_Card";
const Como_Votar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="p-8 text-center">
      <h2 className="text-3xl font-bold text-[#500778] mb-6">Cómo Votar</h2>
      <p className="mb-8 text-lg text-justify mx-auto">
        El 31 de diciembre de 2024, se publicó en el Periódico Oficial del
        Estado de Baja California el Decreto No. 36, por el cual se reforman
        diversos artículos de la Constitución Política del Estado Libre y
        Soberano de Baja California, destacando que el artículo 5, apartado B,
        vincula a este Instituto Electoral a organizar las elecciones del Poder
        Judicial del Estado de Baja California. Por otro lado, la fracción IV
        del artículo transitorio Quinto del Decreto No. 36, define las
        modalidades de votación para el PELE 2025, estableciendo que para la
        elección de Magistraturas Numerarias y Supernumerarias del Tribunal
        Superior de Justicia, así como del Tribunal de Disciplina Judicial, será
        a nivel estatal, mientras que la elección de Juezas y Jueces de Primera
        Instancia del Poder Judicial se realizará por cada partido judicial, con
        la precisión de que cada municipio en la entidad conforma un partido
        judicial. Asimismo, el 17 de abril de 2025, el Consejo General de este
        Instituto mediante Acuerdo IEEBC/CGE68/2025 autorizó la impresión de
        boletas electorales con la identificación de los nombres de las
        candidaturas definitivas, a utilizarse en el Proceso Electoral Local
        Extraordinario 2025, para la elección de personas juzgadoras del Poder
        Judicial del Estado (PELE 2025). Por lo que, a continuación, se
        presentan los diseños finales de las referidas boletas:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <Boleta_Card
          titulo="Tribunal Superior de Justicia"
          descripcion="Boleta para la elección de Magistraturas del Tribunal Superior de
              Justicia del Poder Judicial del Estado de Baja California"
          imagenUrl="0 TDJ.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="Tribunal de Disciplina Judicial"
          descripcion="Boleta para la elección de Magistraturas del Tribunal de
              Disciplina Judicial del Poder Judicial del Estado de Baja
              California"
          imagenUrl="0 TSJ.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="Mexicali"
          descripcion="Boleta para la elección de Juezas y Jueces de Primera Instancia
              del Poder Judicial del Estado de Baja California"
          imagenUrl="1 Mxli.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="Tijuana"
          descripcion="Boleta para la elección de Juezas y Jueces de Primera Instancia
              del Poder Judicial del Estado de Baja California"
          imagenUrl="2 Tijuana.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="Ensenada"
          descripcion="Boleta para la elección de Juezas y Jueces de Primera Instancia
              del Poder Judicial del Estado de Baja California"
          imagenUrl="3 Ensenada.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="Tecate"
          descripcion="Boleta para la elección de Juezas y Jueces de Primera Instancia
              del Poder Judicial del Estado de Baja California"
          imagenUrl="4 Tkt.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="Playas de Rosarito"
          descripcion="Boleta para la elección de Juezas y Jueces de Primera Instancia
              del Poder Judicial del Estado de Baja California"
          imagenUrl="5 PROS.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="San Quintín"
          descripcion="Boleta para la elección de Juezas y Jueces de Primera Instancia
              del Poder Judicial del Estado de Baja California"
          imagenUrl="6 SQ.png"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="San Felipe"
          descripcion="Boleta para la elección de Juezas y Jueces de Primera Instancia
              del Poder Judicial del Estado de Baja California"
          imagenUrl="7 SF.png"
          onImageClick={openModal}
        />
      </div>

      <Modal_Imagen
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default Como_Votar;
