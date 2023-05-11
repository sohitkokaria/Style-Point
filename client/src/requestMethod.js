import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;

const persistedState = localStorage.getItem("persist:root");
const TOKEN = persistedState ? JSON.parse(JSON.parse(persistedState).user)?.currentUser?.accessToken : null;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`},
});