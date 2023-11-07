import { useState } from 'react';

import { toast } from 'react-toastify';
import { logoutApi } from '../../constants';

export function useLogout(){

    const [error, setError] = useState();

    async function fazerLogout(){

        try{
            const response = await logoutApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {fazerLogin, error};
}