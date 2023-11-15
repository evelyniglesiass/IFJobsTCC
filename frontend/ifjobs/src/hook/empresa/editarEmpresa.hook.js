import { useState } from "react";
import { toast } from "react-toastify";
import { editarEmpresaApi } from "../../constants";

export function useEditarEmpresa(){

    const [error] = useState();

    async function editarEmpresa(nome, nomeUsuario, descricao, telefone, email, senha, cidade){

        try{
            await editarEmpresaApi(nome, nomeUsuario, descricao, telefone, email, senha, cidade);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarEmpresa, error};

}