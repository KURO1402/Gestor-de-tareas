import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import NavBar from "../components/dashboard/NavBar";
import ButtonDashboard from "../components/dashboard/ButtonDashboard";
import { useNavigate } from "react-router-dom";

const Usuarios = () => {
  const { fetchUsers } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchUsers();
        setUsers(response.data);
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, [fetchUsers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-6">
      {/* Navbar */}
      <div className="mb-10">
        <NavBar />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <svg className="w-6 h-6 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Gestión de Usuarios
          </h2>
          <ButtonDashboard title="Volver" onClick={() => navigate("/Dashboard")} />
        </div>

        {/* Tabla */}
        <div className="backdrop-blur-lg bg-indigo-900/30 border border-indigo-500/20 rounded-xl overflow-hidden">
          {loading ? (
            <p className="text-center text-cyan-300 py-6">Cargando usuarios...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-indigo-500/20">
                <thead className="bg-indigo-900/40">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Nombres</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Apellidos</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Correo</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-cyan-400 uppercase tracking-wider">Rol</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-indigo-500/20">
                  {users.map((user) => (
                    <tr key={user.idUsuario} className="hover:bg-indigo-900/20 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                        {user.idUsuario}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                        {user.nombres}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-200">
                        {user.apellidos}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-200">
                        {user.correo}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          user.tipoUsuario === "admin"
                            ? "bg-green-600/20 text-green-400"
                            : "bg-blue-600/20 text-blue-400"
                        }`}>
                          {user.tipoUsuario}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Usuarios;
