import { get, post, put, del } from "./api.js";

const endpoint = '/data/memes'

const querys = {
    creationSort: 'sortBy=_createdOn%20desc',
    memeByOwner: (userId) => `where=_ownerId%3D%22${userId}%22`
};

export const createMeme = async (title, description, imageUrl) => 
    await post(`${endpoint}`, { title, description, imageUrl });

export const editMeme = async (memeId, title, description, imageUrl) => 
    await put(`${endpoint}/${memeId}`, { title, description, imageUrl });

export const getAllUserMemes = async (userId) => await get(`${endpoint}?${querys.memeByOwner(userId)}&${querys.creationSort}`);
export const getAllMemes = async () => await get(`${endpoint}?${querys.creationSort}`);
export const getOneMeme = async (memeId) => await get(`${endpoint}/${memeId}`);
export const deleteMeme = async (memeId) => await del(`${endpoint}/${memeId}`);
