import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarPalavraChaveApi(palavra, id, idVaga){

    try{
        const response = await axiosInstance.put(`/palavrasChaves/${idVaga}`, {
            id, palavra
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}