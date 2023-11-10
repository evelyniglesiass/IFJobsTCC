import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function criarEmpresaApi(nome, nomeUsuario, descricao, telefone, email, senha, cidade){

    try{
        const response = await axiosInstance.post("/empresas", {
            nome, nomeUsuario, descricao, telefone, email, senha, cidade
        });

        toast.success(response.data.mensagem)
        return response.data;
    } catch(error){
        toast.error(error.response.data.message);
        throw new Error(error);
    }
}