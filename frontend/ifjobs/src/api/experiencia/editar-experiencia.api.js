import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarExperenciaApi(descricao, empresa, cargo, dataInicial, dataFinal, experiencia){

    try{
        const response = await axiosInstance.put(`/experiencias/${experiencia}`, {
            descricao, empresa, cargo, dataInicial, dataFinal
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}