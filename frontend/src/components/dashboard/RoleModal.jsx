import { useEffect, useState } from "react";

const RoleModal = ({ isOpen, onClose, currentRole, onRoleChange }) => {
  const [selectedRole, setSelectedRole] = useState(currentRole);

  useEffect(() => {
    setSelectedRole(currentRole);
  }, [currentRole]);

  const handleSave = () => {
    onRoleChange(selectedRole);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/50">
      <div className="backdrop-blur-lg bg-indigo-900/30 border border-indigo-500/20 rounded-xl shadow-xl shadow-cyan-500/10 w-full max-w-sm p-6">
        <h2 className="text-xl font-semibold text-white mb-6 flex items-center justify-center">
          <svg 
            className="w-5 h-5 mr-2 text-cyan-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          Cambiar Rol
        </h2>
        
        <select
          className="w-full px-4 py-2 bg-indigo-900/40 border border-indigo-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white mb-6 transition-all duration-200"
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="administrador" className="bg-indigo-900 text-white">Administrador</option>
          <option value="usuario" className="bg-indigo-900 text-white">Usuario</option>
        </select>

        <div className="flex justify-end space-x-3 border-t border-indigo-500/20 pt-6">
          <button
            className="px-4 py-2 border border-indigo-500/30 text-indigo-200 hover:bg-indigo-800/30 rounded-lg transition-colors"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleModal;
