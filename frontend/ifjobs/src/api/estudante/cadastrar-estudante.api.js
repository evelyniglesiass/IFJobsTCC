import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarEstudanteApi(nome, nomeUsuario, idade, telefone, email, senha, cidade){

    try{
        const response = await axiosInstance.post("/estudantes", {
            nome, email, senha, cidade, nomeUsuario, idade, telefone
        });

        toast.success(response.data.mensagem)
        console.log(response.data.mensagem)
        return response.data;
    } catch(error){
        toast.error(error.response.data.message);
        console.log(error)
        throw new Error(error)

    }
}