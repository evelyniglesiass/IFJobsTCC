import { useState } from "react";
import { editarEstudanteApi } from "../../constants";
import { toast } from "react-toastify";

export function useEditarEstudante(){

    const [error] = useState();

    async function editarEstudante(nome, nomeUsuario, idade, telefone, email, senha, cidade){

        try{
            await editarEstudanteApi(nome, nomeUsuario, idade, telefone, email, senha, cidade);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarEstudante, error};

}