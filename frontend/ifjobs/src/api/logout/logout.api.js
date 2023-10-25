import { axiosInstance } from "../_base/axios-instance";

export async function logout() {
  await axiosInstance.post("/logout", {});
}
