import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarEstudantesEstApi() {

    try {
        const response = await axiosInstance.get("/estudantes/listar");

        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}