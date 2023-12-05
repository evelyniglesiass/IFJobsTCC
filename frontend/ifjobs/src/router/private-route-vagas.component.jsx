import { Navigate } from "react-router-dom";
import useGlobalUser from "../context/usuario/user.context";
import DetalhesVagaEstudante from "../pages/estudante/DetalhesVagaEstudante";
import DetalhesVaga from "../pages/empresa/DetalhesVaga";

export function PrivateRouteVagas() {
  const [user] = useGlobalUser()

  if (user.permissao == "Estudante") {
    return <DetalhesVagaEstudante />
  } else if (user.permissao == "Empresa") {
    return <DetalhesVaga />
  }

  return <Navigate to="/" />
}