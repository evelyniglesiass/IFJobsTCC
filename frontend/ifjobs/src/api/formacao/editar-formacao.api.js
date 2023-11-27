import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarFormacaoApi(descricao, cidade, instituicao, dataInicial, dataFinal, nivel, formacao){

    try{
        const response = await axiosInstance.put(`/formacoes`, {
            formacao, descricao, cidade, instituicao, dataInicial, dataFinal, nivel
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}