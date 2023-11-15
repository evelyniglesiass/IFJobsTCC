import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarCurriculoApi(resumo){

    try{
        const response = await axiosInstance.put("/curriculos", {
            resumo
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}