import api from "./axios";

export const getRestaurants = async () => {
    try {
        const response = await api.get("/restaurants");
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}