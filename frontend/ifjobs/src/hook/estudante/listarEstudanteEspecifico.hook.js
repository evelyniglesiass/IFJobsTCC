import { useState } from "react";
import { toast } from "react-toastify";
import { listarEstudanteEspecificoApi } from "../../api/estudante/listar-estudante-especifico.api";

export function useListarEstudanteEspecifico(){

    const [error] = useState();

    async function listarEstudanteEspecifico(estudante){

        try{
            const response = await listarEstudanteEspecificoApi(estudante);

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarEstudanteEspecifico, error};

}