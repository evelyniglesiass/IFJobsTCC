import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarCandidaturaApi(vaga){

    try{
        const response = await axiosInstance.put(`/estudantes/candidatura/${vaga}`);

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}