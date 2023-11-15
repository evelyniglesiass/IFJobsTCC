import { useState } from "react";
import { toast } from "react-toastify";
import { criarVagaApi } from "../../constants";

export function useCadastrarVaga(){

    const [error] = useState();

    async function cadastrarVaga(titulo, descricao, status, salario, idadeMinima, cidade, curso){

        try{
            await criarVagaApi(titulo, descricao, status, salario, idadeMinima, cidade, curso);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarVaga, error};

}