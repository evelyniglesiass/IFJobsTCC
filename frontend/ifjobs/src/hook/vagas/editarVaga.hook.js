import { useState } from "react";
import { toast } from "react-toastify";
import { editarVagaApi } from "../../constants";

export function useEditarVaga(){

    const [error] = useState();

    async function editarVaga(titulo, descricao, status, salario, idadeMinima, cidade, curso){

        try{
            await editarVagaApi(titulo, descricao, status, salario, idadeMinima, cidade, curso);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarVaga, error};

}