const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const config = {
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
    },
    credentials: 'include'
};
