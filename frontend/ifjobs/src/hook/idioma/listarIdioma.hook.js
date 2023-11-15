import { useState } from "react";
import { toast } from "react-toastify";
import { listarIdiomaApi } from "../../constants";

export function useListarIdioma(){

    const [error] = useState();

    async function listarIdioma(estudante){

        try{
            const response = await listarIdiomaApi(estudante);
            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarIdioma, error};

}