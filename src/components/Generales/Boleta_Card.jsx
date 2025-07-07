const Boleta_Card = ({ titulo, descripcion, imagenUrl, onImageClick }) => {
  return (
    <div className="w-full max-w-xs mx-auto mb-8">
      <img
        className="rounded-lg shadow cursor-pointer w-full"
        src={imagenUrl}
        alt={`Boleta ${titulo}`}
        onClick={() => onImageClick(imagenUrl)}
      />
      <div className="bg-white p-3 rounded-lg shadow mt-4">
        <h2 className="text-md font-bold text-[#500778] tracking-wide leading-tight mb-2">
          {titulo}
        </h2>
        <p className="text-sm text-justify text-gray-600">{descripcion}</p>
      </div>
    </div>
  );
};

export default Boleta_Card;
