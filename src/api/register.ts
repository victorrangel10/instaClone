
import { api } from "../utils/api";

export interface registerBody{
    name : string,
    email : string,
    password : string,
}

export async function RegisterAPI({name,email, password}: registerBody) {
    await api.post('/users', {name,email, password})
}