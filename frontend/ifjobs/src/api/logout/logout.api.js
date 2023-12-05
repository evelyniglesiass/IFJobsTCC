import { axiosInstance } from '../../constants';

export async function logoutApi() {

    try {
        await axiosInstance.post("/logout");
        localStorage.clear();
    }
    catch (error) {
        throw error.response.data.message;
    }
}