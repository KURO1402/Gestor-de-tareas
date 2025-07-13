import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

import NavBar from "./components/NavBar";

const AppRoutes = () => {
  const routers = useRoutes([
    /* Rutas publicas */
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/*", element: <NotFound /> },
    /* Rutas privadas */
    {
      path: "/dashboard",
      element: (
        <PrivateRoutes>
          <Dashboard />
        </PrivateRoutes>
      ),
    },
  ]);
  return routers;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes>
          <AppRoutes />
          <NavBar />
        </AppRoutes>
      </BrowserRouter>
    </AuthProvider>
  );
};
export default App;
