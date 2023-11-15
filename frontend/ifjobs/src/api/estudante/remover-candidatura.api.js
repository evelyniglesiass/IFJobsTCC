import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function removerCandidaturaApi(vaga){

    try{
        const response = await axiosInstance.put(`/estudantes/remover/candidatura/${vaga}`);

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}