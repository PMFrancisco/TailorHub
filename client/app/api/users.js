import { config } from "./config";

export const createUser = async (username, email, password) => {
  const url = `${config.baseURL}/users/register`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: config.headers,
      credentials: config.credentials,
      body: JSON.stringify({ username, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Registration error:", error.message);
    throw error;
  }
};

export const loginEmail = async (email, password) => {
  const url = `${config.baseURL}/users/login`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: config.headers,
      credentials: config.credentials,
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to login");
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error.message);
    throw error;
  }
};


export const fetchUserData = async () => {
  const url = `${config.baseURL}/users/user`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: config.headers,
      credentials: config.credentials,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch user data");
    }

    return await response.json();
  } catch (error) {
    console.error("User data fetch error:", error.message);
    throw error;
  }
};

export const logout = async () => {
  const url = `${config.baseURL}/users/logout`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: config.headers,
      credentials: config.credentials,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to logout");
    }
  } catch (error) {
    console.error("Logout error:", error.message);
    throw error;
  }
};


export const toggleFavorite = async (restaurantId) => {
  const url = `${config.baseURL}/users/favorites/toggle`;
  console.log("URL being called:", url);
  console.log("Data being sent:", { restaurantId });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: config.headers,
      credentials: config.credentials,
      body: JSON.stringify({ restaurantId })
    });

    console.log("Full response from server:", response);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Non-JSON error response:", errorText);
      throw new Error('Response not OK. Status: ' + response.status);
    }

    const data = await response.json(); 
    console.log("Response JSON:", data);
    return data;
  } catch (error) {
    console.error("Toggle favorite error:", error);
    throw error;
  }
};


