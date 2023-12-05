import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarVagaTituloApi(titulo) {

    try {
        const response = await axiosInstance.get(`/vagas/listar/pesquisa/${titulo}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}