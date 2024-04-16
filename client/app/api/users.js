import { config } from './config';

export const createUser = async (username, email, password) => {
  const url = `${config.baseURL}/users/register`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: config.headers,
      credentials: config.credentials,
      body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
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
        method: 'POST',
        headers: config.headers,
        credentials: config.credentials,
        body: JSON.stringify({ email, password })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
      }
  
      return await response.json();
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  };