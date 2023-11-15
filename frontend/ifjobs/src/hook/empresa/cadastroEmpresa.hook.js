import { useState } from "react";
import { toast } from "react-toastify";
import { criarEmpresaApi } from "../../constants";

export function useCadastroEmpresa(){

    const [error] = useState();

    async function cadastroEmpresa(nome, nomeUsuario, descricao, telefone, email, senha, cidade){

        try{
            await criarEmpresaApi(nome, nomeUsuario, descricao, telefone, email, senha, cidade);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastroEmpresa, error};

}