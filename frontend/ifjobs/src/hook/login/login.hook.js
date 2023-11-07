import { logarApi } from '../../constants';
import useGlobalUsuario from '../../context/usuario/user.context';
import { useState } from 'react';

import { toast } from 'react-toastify';

export function useLogin(){

    const {setUser} = useGlobalUsuario();
    const [error, setError] = useState();

    async function fazerLogin(email, senha){

        try{
            const response = await logarApi(email, senha);
            console.log(response);

            setUser(response);
        }
        catch(errorApi){
            console.log(errorApi)
            toast.error(errorApi);
        }
    }

    return {fazerLogin, error};
}