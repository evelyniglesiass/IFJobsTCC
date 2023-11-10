import { useState } from "react";
import { listarEstudantesEmpApi } from "../../constants";
import { toast } from "react-toastify";

export function useListarEstudantesEmp(){

    const [error] = useState();

    async function listarEstudantesEmp(){

        try{
            const response = await listarEstudantesEmpApi();

            return response
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {listarEstudantesEmp, error};

}