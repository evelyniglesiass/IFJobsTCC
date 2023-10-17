import {axiosInstance} from '../';

export async function logarApi(email, senha){

    try{
        const response = await axiosInstance.post("/login", {}, 
        {
            auth: {
                username: email,
                password: senha
            }
        });

        return response.data;
    }
    catch(error){

        if(error.response.status === 401){

            throw new Error("Acesso não autorizado");
        }

        throw new Error(error.response.data.message);
    }
}