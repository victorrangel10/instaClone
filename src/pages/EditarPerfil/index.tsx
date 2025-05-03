import React, { useState, useEffect } from 'react';
import {
  EditarContainer,
  EditarBox,
  Label,
  FotoPreview,
  UploadButton,
  Textarea,
  SalvarButton
} from './styles'


import { TitleBar } from "../../components/TitleBar";
import { getProfile } from '../../api/get-profile';
import { updateProfileImage } from '../../api/update-profile-image';


export function EditarPerfil() {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const profile = await getProfile();
        setUserId(profile.user.id); // Armazena o ID do usuário
      } catch (error) {
        console.error('Erro ao buscar o perfil do usuário:', error);
      }
    }

    fetchUserProfile();
  }, []); // Executa apenas uma vez ao montar o componente


  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file)); // Gera um preview da imagem
    }
  }
  async function handleUpload() {
    if (!selectedFile) {
      alert('Por favor, selecione uma foto antes de enviar.');
      return;
    }

    try {
          await updateProfileImage({
            file: selectedFile,
          });
          alert('Foto enviada com sucesso!');
        } catch (error) {
          console.error('Erro ao enviar a foto:', error);
          alert('Erro ao enviar a foto.');
        }
  }

  return (
    <div>
      <TitleBar text="Editar Perfil" />
      <EditarContainer>
        <EditarBox>
          {/* Alterar foto de perfil */}
          <Label>Alterar foto de perfil</Label>
          <FotoPreview>
            {preview ? (
              <img
                src={preview}
                alt="Preview da Foto de Perfil"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            ) : (
              'Nenhuma foto selecionada'
            )}
          </FotoPreview>

          {/* Botão para selecionar arquivo */}
          <UploadButton>
            <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
              Selecionar foto
            </label>
            <input
              id="file-input"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </UploadButton>

          {/* Botão Salvar */}
          <SalvarButton onClick={handleUpload}>Salvar</SalvarButton>
        </EditarBox>
      </EditarContainer>
    </div>
  );
}
