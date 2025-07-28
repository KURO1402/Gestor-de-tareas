import NavBar from '../components/dashboard/NavBar';
import CardDashboard from '../components/dashboard/CardDashboard';
import TasksList from '../components/dashboard/TasksList';
import { useTasks } from '../context/useTask';
import { useEffect } from 'react';

const Dashboard = () => {
  const { totalTask, classifyTask, tasks } = useTasks();
  useEffect(() => {
    classifyTask();
  }, [tasks])
  
  const pendientes = totalTask.find(t => t.estado === "pendiente")?.totalTareas || 0;
  const completada = totalTask.find(t => t.estado === "completada")?.totalTareas || 0;
  const total = pendientes + completada;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">

      <NavBar />

      <div className="container mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <CardDashboard  
            title="Tareas Pendientes"
            number={pendientes}
          />
          <CardDashboard 
            title="Tareas Completadas"
            number={completada}
          />
          <CardDashboard 
            title="Resumen de Tareas"
            number={`${completada} de ${total}`}
          />
        </div>
        
        <TasksList />
      </div>
    </div>
  );
};

export default Dashboard;