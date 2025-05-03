import { api } from "../utils/api";



export interface SendPhotoBody {
    file: File; // Alterado para File para suportar arquivos
    status: string; }

    export async function SendPhotoAPI({ file, status }: SendPhotoBody) {
        const formData = new FormData();
        formData.append('file', file); // Adiciona o arquivo
        formData.append('status', status); // Adiciona o status
    
        console.log(file)
        await api.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }); 
    }