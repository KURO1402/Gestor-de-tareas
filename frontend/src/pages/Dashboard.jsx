import { useAuth } from "../context/AuthContext";

const Dashboard = () => {

  const { user, logout } = useAuth();

  return ( 
    <>  
      <h1>
        Dashboard Page
      </h1> 
      <h2> Hola {user?.nombres} </h2>
      <button onClick={logout}> Salir </button>
    </>
   );
}

export default Dashboard;