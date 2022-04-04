import { get, post, put, del } from "./api.js"

const endpoint = '/data/pets'


export const getAllPets = async () => await get('/data/pets?sortBy=_createdOn%20desc&distinct=name');

export const createPostCard = async (name, breed, age, weight, image) =>
    await post(endpoint, { name, breed, age, weight, image });

export const getById = async (petId) => await get(`${endpoint}/${petId}`);

export const deleteById = async (petId) => await del(`${endpoint}/${petId}`);

export const editById = async (petId, name, breed, age, weight, image) =>
    await put(`${endpoint}/${petId}`, { name, breed, age, weight, image })


export const postDonation = async (petId) => await post(`/data/donation`, {petId});

export const getTotalDonation = async (petId) => await get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);

export const getDonationFromUser = async (petId, userId) => await get (`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)