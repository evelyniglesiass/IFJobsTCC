import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function excluirHabilidadeApi(){

    try{
        const response = await axiosInstance.delete(`/habilidades`);

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}