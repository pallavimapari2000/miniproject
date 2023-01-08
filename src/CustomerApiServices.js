import axios from 'axios';

const BASE_URL = 'http://localhost:9800/CustomerRecharge';

export async function saveCustomer(customer)
{
    return axios.post(BASE_URL,customer)
}

export async function getAllCustomer()
{
    return axios.get(BASE_URL);
}
