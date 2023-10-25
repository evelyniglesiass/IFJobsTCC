import { createBrowserRouter } from "react-router-dom";
import { PerfilScreen, LoginScreen } from "../ui/screens";
import { PrivateRoute } from "./private-route.component";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/perfil",
    element: <PrivateRoute Screen={PerfilScreen} />,
  },
]);
