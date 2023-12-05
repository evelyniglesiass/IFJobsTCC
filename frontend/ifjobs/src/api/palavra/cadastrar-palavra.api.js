import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarPalavraChaveApi(palavra, id) {

    try {
        const response = await axiosInstance.post(`/palavrasChaves/${id}`, {
            palavra
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}