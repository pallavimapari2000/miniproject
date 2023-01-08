import axios from 'axios';

const BASE_URL = 'http://localhost:9800/Contacthere';

export async function setFormData(contact)
{
    return axios.post(BASE_URL,contact)
}

export async function getAllCustomer()
{
    return axios.get(BASE_URL);
}