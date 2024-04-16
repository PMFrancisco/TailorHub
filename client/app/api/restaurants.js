import { config } from './config';

export const getRestaurants = async () => {
    const url = `${config.baseURL}/restaurants`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: config.headers,
            credentials: config.credentials
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error al cargar los restaurantes:", error.message);
        throw new Error(error.message);
    }
}
