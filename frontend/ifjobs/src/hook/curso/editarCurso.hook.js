import { useState } from "react";
import { toast } from "react-toastify";
import { editarCursoApi } from "../../constants";

export function useEditarCurso(){

    const [error] = useState();

    async function editarCurso(cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao, id){

        try{
            await editarCursoApi(cargaHoraria, cidade, descricao, dataInicial, dataFinal, instituicao, id);
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {editarCurso, error};

}