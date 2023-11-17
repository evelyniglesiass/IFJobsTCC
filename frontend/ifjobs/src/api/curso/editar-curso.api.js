import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarCursoApi(titulo, cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao){

    try{
        const response = await axiosInstance.put("/cursos", {
            titulo, cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}