import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarPalavraChaveApi(vaga){

    try{
        const response = await axiosInstance.get(`/palavrasChaves/listar/${vaga}`);
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}