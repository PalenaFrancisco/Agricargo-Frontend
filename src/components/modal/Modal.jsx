import React from 'react';

const Modal = ({ show, onClose, onLogin }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-black">Acceso Restringido</h2>
        <p className="mb-4 text-black">Debes iniciar sesión para acceder a esta página.</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
          >
            Cerrar
          </button>
          <button
            onClick={onLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
