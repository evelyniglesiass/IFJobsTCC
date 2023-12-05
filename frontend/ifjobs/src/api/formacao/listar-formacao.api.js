import { axiosInstance } from "../_base/axiosInstance";

export async function listarFormacaoApi(estudante) {

    try {
        const response = await axiosInstance.get(`/formacoes/listar/${estudante}`);
        return response.data;

    } catch (error) {
        throw new Error(error.response.data.message)

    }
}