// src/services/apiService.js
import axios from 'axios';

const baseURL = process.env.VUE_APP_BACKEND_URL

export async function test() {
    return await axios.get(`${baseURL}`); 
}

export async function getFormStructure(payload) {
    return await axios.post(
        `${baseURL}/formStructure`,
        payload
    );
}
