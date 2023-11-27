import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function excluirPalavraChaveApi(palavraId){

    try{
        const response = await axiosInstance.delete(`/palavrasChaves/${palavraId}`);

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}