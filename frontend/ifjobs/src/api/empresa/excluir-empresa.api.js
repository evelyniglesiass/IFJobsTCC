import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function excluirEmpresaApi() {

    try {
        const response = await axiosInstance.delete(`/empresas`);

        toast.success(response.data.mensagem)
        return response.data;

    } catch (error) {
        throw new Error(error.response.data.message)

    }
}