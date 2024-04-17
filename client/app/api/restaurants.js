import { config } from "./config";

export const getRestaurants = async () => {
  const url = `${config.baseURL}/restaurants`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: config.headers,
      credentials: config.credentials,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al cargar los restaurantes:", error.message);
    throw new Error(error.message);
  }
};

export const getRestaurantById = async (id) => {
  const url = `${config.baseURL}/restaurants/${id}`;
  console.log("Fetching URL:", url);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: config.headers,
      credentials: config.credentials,
    });

    console.log("Response Status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error al cargar el restaurante:", error.message);
    throw new Error(error.message);
  }
};

export const addRestaurant = async (restaurantData, imageFile) => {
  const url = `${config.baseURL}/restaurants`;
  const formData = new FormData();
  formData.append("name", restaurantData.name);
  formData.append("address", restaurantData.address);
  formData.append("description", restaurantData.description);
  formData.append("image", imageFile);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
      credentials: config.credentials,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al añadir el restaurante:", error.message);
    throw new Error(error.message);
  }
};
