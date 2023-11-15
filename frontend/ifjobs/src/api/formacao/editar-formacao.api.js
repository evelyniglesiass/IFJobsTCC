import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarFormacaoApi(descricao, cidade, instituicao, dataInicial, dataFinal, nivel){

    try{
        const response = await axiosInstance.put("/formacoes", {
            cdescricao, cidade, instituicao, dataInicial, dataFinal, nivel
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}