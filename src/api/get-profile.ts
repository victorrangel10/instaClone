import { api } from "../utils/api";

export interface GetProfileResponse {
    id : string,
    name : string,
    email : string
}

export async function getProfile(){
    const response = await api.get<GetProfileResponse>('/me')
    return response.data
}