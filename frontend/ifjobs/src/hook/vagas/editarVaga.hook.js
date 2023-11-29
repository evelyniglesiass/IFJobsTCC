import { useState } from "react";
import { toast } from "react-toastify";
import { editarVagaApi } from "../../constants";

export function useEditarVaga(){

    const [error] = useState();

    async function editarVaga(titulo, descricao, salario, idadeMinima, cidade, curso, status, dataPublicacao, id){

        try{
            await editarVagaApi(titulo, descricao, salario, idadeMinima, cidade, curso, status, dataPublicacao, id);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarVaga, error};

}