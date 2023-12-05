import { Navigate } from "react-router-dom";
import PerfilEstudante from "../pages/estudante/PerfilEstudante";
import PerfilEmpresa from "../pages/empresa/PerfilEmpresa";
import useGlobalUser from "../context/usuario/user.context";

export function PrivateRoutePerfil() {
  const [user] = useGlobalUser()

  if (user.permissao == "Estudante") {
    return <PerfilEstudante />
  } else if (user.permissao == "Empresa") {
    return <PerfilEmpresa />
  }

  return <Navigate to="/" />
}