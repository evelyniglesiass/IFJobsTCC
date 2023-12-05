import { axiosInstance } from '../../constants';

export async function logarApi(email, senha) {

    try {
        const response = await axiosInstance.post("/login", {},
            {
                auth: {
                    username: email,
                    password: senha
                }
            });

        return response.data;
    }
    catch (error) {
        console.log(error)
        if (error.response.status === 401) {

            throw "Acesso não autorizado";
        }

        throw error.response.data.message;
    }
}