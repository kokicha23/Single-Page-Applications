import { clearUserData, setUserData } from "../utils/user-data.js";
import { get, post } from "../api/api.js";

export async function login(email, password) {
    const result = await post('/users/login', { email, password });
    const userData = parseUserData(result);

    setUserData(userData);
    return result;
}

export async function register(username, email, password, gender) {
    const result = await post('/users/register', {username, email, password, gender});
    const userData = parseUserData(result);

    setUserData(userData);
    return result;
}

export async function logout(){
    await get('/users/logout');
    clearUserData(); 
}

function parseUserData(userData) {
    return {
        username: userData.username,
        email: userData.email,
        id: userData._id,
        gender: userData.gender,
        token: userData.accessToken
    };
}
