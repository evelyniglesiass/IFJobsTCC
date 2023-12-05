import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarExperienciaApi(descricao, empresa, cargo, dataInicial, dataFinal) {

    try {
        const response = await axiosInstance.post("/experiencias", {
            descricao, empresa, cargo, dataInicial, dataFinal
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}