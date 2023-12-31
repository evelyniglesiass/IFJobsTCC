import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarIdiomaApi(estudante) {

    try {
        const response = await axiosInstance.get(`/idiomas/listar/${estudante}`);
        return response.data;

    } catch (error) {
        throw new Error(error.response.data.message)

    }
}