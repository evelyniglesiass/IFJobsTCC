import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarIdiomaApi(descricao, id){

    try{
        const response = await axiosInstance.put(`/idiomas`, {
            descricao, id
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}