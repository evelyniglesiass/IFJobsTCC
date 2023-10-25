import { Navigate } from "react-router-dom";
import useGlobalUser from "../context/user/user.context";

export function PrivateRoute({ Screen }) {
  const [user] = useGlobalUser()

  if(user) {
    return <Screen />
  }

  return <Navigate to="/" />
}