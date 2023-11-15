import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarVagaApi(titulo, descricao, status, salario, idadeMinima, cidade, curso){

    try{
        const response = await axiosInstance.post("/vagas", {
            titulo, descricao, status, salario, idadeMinima, cidade, curso
        });

        toast.success(response.data.mensagem)
        return response.data; 

    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}