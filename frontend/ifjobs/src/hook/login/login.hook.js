import { logarApi } from '../../constants';
import useGlobalUsuario from '../../context/usuario/user.context';
import { useState } from 'react';

import { toast } from 'react-toastify';

export function useLogin(){

    const [user, setUser] = useGlobalUsuario();
    const [error] = useState();

    async function fazerLogin(email, senha){

        try{
            const response = await logarApi(email, senha);
            console.log(response);
            setUser(response);
            console.log("oi")
            console.log(user)
        }
        catch(errorApi){
            console.log(errorApi)
            toast.error(errorApi);
        }
    }

    return {fazerLogin, error};
}