import { useState } from "react";
import { toast } from "react-toastify";
import { editarCursoApi } from "../../constants";

export function useEditarCurso(){

    const [error] = useState();

    async function editarCurso(titulo, cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao){

        try{
            await editarCursoApi(titulo, cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarCurso, error};

}