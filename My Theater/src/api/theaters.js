import { get, post, del, put } from "./api.js"

const endpoint = '/data/theaters';

export const getAllTheaters = async () => await get(`${endpoint}?sortBy=_createdOn%20desc&distinct=title`);

export const createEvent = async (title, date, author, imageUrl, description) =>
    await post(endpoint, { title, date, author, imageUrl, description });

export const getById = async (theaterId) => await get(`${endpoint}/${theaterId}`);

export const deleteById = async (theaterId) => await del(`${endpoint}/${theaterId}`);

export const editById = async (theaterId, title, date, author, description, imageUrl) =>
    await put(`${endpoint}/${theaterId}`, { title, date, author, description, imageUrl });

export const getMyEvents = async (userId) => await get (`${endpoint}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
