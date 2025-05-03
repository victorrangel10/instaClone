import { api } from "../utils/api";

export interface UpdateProfileImageBody {
  file: File; // Arquivo de imagem a ser enviado
}

export async function updateProfileImage({ file }: UpdateProfileImageBody) {
  const formData = new FormData();
  formData.append("file", file); // Adiciona o arquivo ao FormData

  const response = await api.post("users/profile-image", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Define o tipo de conteúdo
    },
  });

  return response.data; // Retorna os dados da resposta
}