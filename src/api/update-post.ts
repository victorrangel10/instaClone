import { api } from "../utils/api";

export interface UpdatePostBody {
  id: string; // ID do post a ser atualizado
  description: string; // Nova descrição do post
}

export async function updatePost({ id, description }: UpdatePostBody): Promise<void> {
  try {
    await api.patch(`/update/${id}`, { description });
  } catch (error) {
    console.error("Erro ao atualizar o post:", error);
    throw new Error("Não foi possível atualizar o post.");
  }
}