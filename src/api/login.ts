
import { api } from "../utils/api";

export interface loginBody{
    email : string,
    password : string
}

export async function LoginAPI({email, password}: loginBody) {

    const response = await api.post('/sessions', { email, password });


    const token = response.data.token;
    localStorage.setItem('authToken', token);
    console.log(token);
}