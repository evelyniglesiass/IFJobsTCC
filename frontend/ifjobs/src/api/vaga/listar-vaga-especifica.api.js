import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarVagaEspecificaApi(vaga) {

    try {
        const response = await axiosInstance.get(`/vagas/listar/id/${vaga}`);
        console.log("aqui 1", response.data);
        return response.data;

    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}