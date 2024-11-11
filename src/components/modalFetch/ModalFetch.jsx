const ModalFetch = ({ message, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-4 rounded-md shadow-md">
      <p className="text-black">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Cerrar
      </button>
    </div>
  </div>
);

export default ModalFetch;
