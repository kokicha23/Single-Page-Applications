import { clearUserData, setUserData } from "../utils/sessionStorage.js";
import { get, post } from "../api/api.js";

export async function login(username, password) {
    const result = await post('/users/login', { username, password });
    const userData = parseUserData(result);

    setUserData(userData);
    return result;

}

export async function register(username, password) {
    const result = await post('/users/register', { username, password });
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
        username: userData.username,
        id: userData._id,
        token: userData.accessToken
    };
}
