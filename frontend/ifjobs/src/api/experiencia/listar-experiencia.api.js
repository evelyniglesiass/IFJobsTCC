import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarExperienciaApi(estudante){

    try{
        const response = await axiosInstance.get(`/experiencias/listar/${estudante}`);
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}