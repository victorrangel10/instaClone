import { api } from "../utils/api";

export async function deletePost(postId: string): Promise<void> {
  try {
    await api.delete(`/posts/${postId}`);
    console.log("Post excluído com sucesso!");
  } catch (error) {
    console.error("Erro ao excluir o post:", error);
    throw new Error("Não foi possível excluir o post.");
  }
}