import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarEmpresaNomeSemApi(nomeEmpresa) {

    try {
        const response = await axiosInstance.get(`empresas/listar/pesquisa/sem/${nomeEmpresa}`);

        return response.data;
    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}