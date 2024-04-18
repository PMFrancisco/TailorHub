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

export const getRestaurantById = async (restaurantId) => {
  const url = `${config.baseURL}/restaurants/${restaurantId}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: config.headers,
      credentials: config.credentials,
    });


    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
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


export const addReviewToRestaurant = async (restaurantId, review) => {
  const url = `${config.baseURL}/restaurants/${restaurantId}/reviews`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        ...config.headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review),
      credentials: config.credentials,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error al añadir comentario:", error.message);
    throw new Error(error.message);
  }
};
