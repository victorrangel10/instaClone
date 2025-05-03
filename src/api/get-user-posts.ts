import { api } from "../utils/api";

// Interface para representar um único post
export interface UserPost {
  id: string;
  date: string;
  description: string | null;
  USER_ID: string;
  postImage: string;
}

// Função para buscar os posts de um usuário específico
export async function getUserPosts(userId: string): Promise<UserPost[]> {
  const response = await api.get<UserPost[]>(`/users/${userId}/posts`);
  return response.data; // Retorna os posts do usuário
}