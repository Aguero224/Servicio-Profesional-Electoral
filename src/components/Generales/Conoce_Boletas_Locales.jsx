import { useState } from "react";
import Modal_Imagen from "./Modal_Imagen";
import Boleta_Card from "./Boleta_Card";

const Conoce_Boletas_Locales = () => {
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
    <div className="p-4 text-center">
      <h2 className="text-3xl font-bold text-[#500778] mb-6">
        Conoce Tus Boletas Locales
      </h2>
      <p className="mb-8 text-xl max-w-full mx-auto text-justify">
        Atendiendo los principios rectores de la función electoral: la certeza,
        imparcialidad y máxima publicidad, te presentamos la manera en la que
        podrás ejercer tu voto:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <Boleta_Card
          titulo="Conoce tu Boleta"
          imagenUrl="conocetuboleta.jpg"
          onImageClick={openModal}
        />
        <Boleta_Card
          titulo="Cómo Votar"
          imagenUrl="comodebovotar.jpg"
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

export default Conoce_Boletas_Locales;
