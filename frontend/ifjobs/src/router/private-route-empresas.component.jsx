import { Navigate } from "react-router-dom";
import useGlobalUser from "../context/usuario/user.context";
import Empresas from "../pages/geral/Empresas";
import EmpresasSemLogada from "../pages/geral/EmpresasSemLogada";

export function PrivateRouteEmpresas() {
  const [user] = useGlobalUser()

  if (user.permissao == "Estudante") {
    return <Empresas />
  } else if (user.permissao == "Empresa") {
    return <EmpresasSemLogada />
  }

  return <Navigate to="/" />
}