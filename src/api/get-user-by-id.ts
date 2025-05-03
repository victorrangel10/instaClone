import { api } from "../utils/api";

export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string; // Campo opcional para imagem de perfil, se existir
}

export async function getUserById(userId: string): Promise<User> {
  const response = await api.get<User>(`/allusers/${userId}`);
  return response.data; // Retorna os dados do usuário
}