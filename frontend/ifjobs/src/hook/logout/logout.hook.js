import { useState } from 'react';
import { toast } from 'react-toastify';
import { logoutApi } from '../../constants';

export function useLogout(){

    const [error] = useState(); // tirei o setError pq não estava sendo usado

    async function fazerLogout(){

        try{
            await logoutApi();
        }
        catch(errorApi){
            toast.error(errorApi);
        }
    }

    return {fazerLogout, error};
}