import { Navigate } from "react-router-dom";
import useGlobalUser from "../context/usuario/user.context";
import Estudantes from "../pages/geral/Estudantes";
import EstudantesSemLogado from "../pages/geral/EstudantesSemLogado";

export function PrivateRouteEstudantes() {
  const [user] = useGlobalUser()

  if(user.permissao == "Estudante") {
    return <EstudantesSemLogado />
  } else if (user.permissao == "Empresa") {
    return <Estudantes />
  }

  return <Navigate to="/" />
}