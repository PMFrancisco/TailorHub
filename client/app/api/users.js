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


export const addFavorite = async (username, restaurantId) => {
  const url = `${config.baseURL}/users/${username}/favorites/add`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: config.headers,
      credentials: config.credentials,
      body: JSON.stringify({ restaurantId })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to add favorite");
    }

    return await response.json();
  } catch (error) {
    console.error("Add favorite error:", error.message);
    throw error;
  }
};

export const removeFavorite = async (username, restaurantId) => {
  const url = `${config.baseURL}/users/${username}/favorites/remove`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: config.headers,
      credentials: config.credentials,
      body: JSON.stringify({ restaurantId })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to remove favorite");
    }

    return await response.json();
  } catch (error) {
    console.error("Remove favorite error:", error.message);
    throw error;
  }
};
