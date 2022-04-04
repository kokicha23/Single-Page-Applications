import { get, post, put, del } from "./api.js"

const endpoint = "/data/games";

export const getAllHomePageGames = async () => await get(`${endpoint}?sortBy=_createdOn%20desc&distinct=category`);

export const createGame = async (title, category, maxLevel, imageUrl, summary) =>
    await post(endpoint, { title, category, maxLevel, imageUrl, summary });

export const getById = async (gameId) => await get(`${endpoint}/${gameId}`);

export const deleteById = async (gameId) => await del(`${endpoint}/${gameId}`);

export const editGameById = async (gameId, title, category, maxLevel, imageUrl, summary) =>
    await put(`${endpoint}/${gameId}`, { title, category, maxLevel, imageUrl, summary });

export const getAllCatalogGames = async () => await get(`${endpoint}?sortBy=_createdOn%20desc`);