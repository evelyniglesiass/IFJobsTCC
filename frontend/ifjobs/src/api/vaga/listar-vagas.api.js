import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarVagasApi(){

    try{
        const response = await axiosInstance.get("/vagas/listar");

        //toast.success(response.data.mensagem)
        
        return response.data;
    } catch(error){
        toast.error(error.response.data.message);
        console.log(error)
        throw new Error(error.response.data.message)

    }
}