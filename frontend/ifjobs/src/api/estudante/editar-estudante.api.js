import { toast } from "react-toastify";
import { axiosInstance } from "../_base/axiosInstance";

export async function editarEstudanteApi(nome, nomeUsuario, idade, curso, telefone, email, cidade, senha) {

    try {
        const response = await axiosInstance.put("/estudantes", {
            nome, nomeUsuario, idade, curso, telefone, email, cidade, senha
        });

        toast.success(response.data.mensagem)
        return response.data;

    } catch (error) {
        toast.error(error.response.data.message);
        throw new Error(error)

    }
}