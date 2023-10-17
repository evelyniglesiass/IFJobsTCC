import useGlobalUsuario from '../../context/usuario/usuario.context';
import { logarApi } from '../../api';
import { useState } from 'react';

export function useLogin(){

    const {setUsuario} = useGlobalUsuario();
    const [error, setError] = useState();

    async function fazerLogin(email, senha){

        try{
            const response = await logarApi(email, senha);
            console.log(response);

            setUsuario(response);
        }
        catch(errorApi){
            setError(errorApi);
        }
    }

    return {fazerLogin, error};
}