import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarEstudanteNomeApi(nomeEstudante){

    try{
        const response = await axiosInstance.get(`/estudantes/listar/pesquisa/${nomeEstudante}`);
        return response.data;

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error.response.data.message)

    }
}