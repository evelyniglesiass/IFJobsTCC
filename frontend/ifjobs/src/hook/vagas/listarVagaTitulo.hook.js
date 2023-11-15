import { useState } from "react";
import { listarVagaTituloApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarVagaTitulo(){

    const [error] = useState();

    async function listarVagaTitulo(titulo){

        try{
            const response = await listarVagaTituloApi(titulo);

            return response
        }
        catch(errorApi){
            console.log(errorApi)
            toast.error(errorApi);
        }
    }

    return {listarVagaTitulo, error};

}