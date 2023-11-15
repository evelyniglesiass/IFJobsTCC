import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarHabilidadesApi(descricao){

    try{
        const response = await axiosInstance.put("/habilidades", {
            descricao
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}