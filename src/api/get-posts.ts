import { api } from "../utils/api";

// Interface para representar um único post
export interface Post {
  id: string;
  date: string;
  description: string | null;
  USER_ID: string;
  postImage: string;
}

// A resposta será um array de posts
export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>('/posts');
  return response.data; // Retorna o array de posts
}