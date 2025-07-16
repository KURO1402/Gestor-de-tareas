import NavBar from '../components/dashboard/NavBar';
import CardDashboard from '../components/dashboard/CardDashboard';
import TasksList from '../components/dashboard/TasksList';

const Dashboard = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">

      <NavBar />

      <div className="container mx-auto px-6 py-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <CardDashboard  
            title="Tareas Pendientes"
            number={5}
          />
          <CardDashboard 
            title="Tareas Completadas"
            number={3}
          />
          <CardDashboard 
            title="Resumen de Tareas"
            number={"3 de 5"}
          />
        </div>
        
        <TasksList />
      </div>
    </div>
  );
};

export default Dashboard;