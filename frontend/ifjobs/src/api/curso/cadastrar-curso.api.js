import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarCursoApi(cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao) {

    try {
        const response = await axiosInstance.post("/cursos", {
            cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}