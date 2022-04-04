import { clearUserData, setUserData } from "../utils/sessionStorage.js";
import { get, post } from "../api/api.js";

export async function login(email, password) {
    const result = await post('/users/login', { email, password });
    const userData = parseUserData(result);

    setUserData(userData);
    return result;
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password });
    const userData = parseUserData(result);

    setUserData(userData);
    return result;
}

export async function logout() {
    await get('/users/logout');
    clearUserData();
}

function parseUserData(userData) {
    return {
        email: userData.email,
        id: userData._id,
        token: userData.accessToken
    };
}
