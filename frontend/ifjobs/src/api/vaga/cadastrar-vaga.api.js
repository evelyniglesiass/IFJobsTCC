import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarVagaApi(titulo, descricao, status, salario, idadeMinima, cidade, curso, dataPublicacao){

    try{
        const response = await axiosInstance.post("/vagas", {
            titulo, descricao, status, salario, idadeMinima, cidade, curso, dataPublicacao
        });

        toast.success(response.data.mensagem)
        return response.data; 

    } catch(error){
        console.log(error)
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}