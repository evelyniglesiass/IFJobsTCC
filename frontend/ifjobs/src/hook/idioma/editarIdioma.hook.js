import { useState } from "react";
import { toast } from "react-toastify";
import { editarIdiomaApi } from "../../constants";

export function useEditarIdioma() {

    const [error] = useState();

    async function editarIdioma(descricao, id) {

        try {
            await editarIdiomaApi(descricao, id);
        }
        catch (errorApi) {
            toast.error(errorApi);
        }
    }

    return { editarIdioma, error };

}