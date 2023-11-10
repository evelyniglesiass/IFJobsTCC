import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function listarVagasEmpresaApi(){

    try{
        const response = await axiosInstance.get("/vagas/listar");
        
        return response.data;
    } catch(error){
        toast.error(error.response.data.message);
        console.log(error.response.data.message)
        throw new Error(error.response.data.message)

    }
}