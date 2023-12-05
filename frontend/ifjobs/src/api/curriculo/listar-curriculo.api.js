import { axiosInstance } from "../_base/axiosInstance";

export async function listarCurriculoApi(estudante) {

    try {
        const response = await axiosInstance.get(`/curriculos/listar/${estudante}`);
        return response.data;

    } catch (error) {
        throw new Error(error.response.data.message)

    }
}