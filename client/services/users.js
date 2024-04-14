import api from "./axios";

export const createUser = async (username, email, password) => {
    try {
      const response = await api.post("/users/register", { username, email, password });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        throw new Error(error.response.data.message);
      } else {
        // Manejar otros tipos de errores que no tienen la estructura esperada
        throw new Error('Error de registro: ' + error.message);
      }
    }
  };

export const loginEmail = async (email, password) => {
  try {
    const response = await api.post("/users/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
