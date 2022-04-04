import { get, post, del, put } from "./api.js"

const endpoint = '/data/cars';

export const getAllCars = async () => await get(`${endpoint}?sortBy=_createdOn%20desc`);

export const createCar = async (brand, model, description, year, imageUrl, price) =>
    await post(endpoint, { brand, model, description, year, imageUrl, price })

export const getById = async (carId) => await get(`${endpoint}/${carId}`)

export const deleteById = async (carId) => await del(`${endpoint}/${carId}`)

export const editById = async (carId, brand, model, description, year, imageUrl,
    price) => await put(`${endpoint}/${carId}`, { brand, model, description, year, imageUrl, price })

export const getUserCars = async (userId) => await get(`${endpoint}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)