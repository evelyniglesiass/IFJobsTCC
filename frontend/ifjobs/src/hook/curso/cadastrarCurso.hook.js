import { useState } from "react";
import { toast } from "react-toastify";
import { criarCursoApi } from "../../constants";

export function useCadastrarCurso(){

    const [error] = useState();

    async function cadastrarCurso(titulo, cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao){

        try{
            await criarCursoApi(titulo, cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {cadastrarCurso, error};

}