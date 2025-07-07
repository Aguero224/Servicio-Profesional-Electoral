const Modal_Imagen = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="rounded-lg max-w-full max-h-[95vh] object-contain"
          src={imageUrl}
          alt="Imagen Ampliada"
        />
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-white bg-red-600 rounded-full p-2"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal_Imagen;
