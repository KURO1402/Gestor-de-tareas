import { BrowserRouter, useRoutes } from "react-router-dom";

import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Register from "./pages/auth/registro";
import Login from "./pages/auth/Login";

const AppRoutes = () => {
  const routers = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routers;
};

const App = () => {
  return (
    <BrowserRouter>
    <AppRoutes >
      <AppRoutes />
      <NavBar />
    </AppRoutes>
    </BrowserRouter>
  );
};
export default App;
