import React, { useState, useEffect } from 'react';

import {
  PublicarContainer,
  PublicarBox,
  Label,
  Textarea,
  PreviewBox,
  ButtonGroup,
  SelectButton,
  SendButton
} from './styles'

import { TitleBar } from "../../components/TitleBar";
import { getProfile } from '../../api/get-profile';
import { SendPhotoAPI } from '../../api/send-photo';
import { GetProfileResponse } from '../../api/get-profile';

export function Publicar() {

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
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
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setPreview(URL.createObjectURL(file)) // Gera um preview da imagem
    }
  }

  async function handleUpload() {
    if (!selectedFile) {
      alert('Por favor, selecione uma foto antes de enviar.');
      return;
    }

    try {
      await SendPhotoAPI({
        file: selectedFile,
        status: userId, // Envia o ID do usuário como "status"
      });
      alert('Foto enviada com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar a foto:', error);
      alert('Erro ao enviar a foto.');
    }
  }


  return (
    <div>
      <TitleBar text="Publicar nova foto" />
      <PublicarContainer>

        <PublicarBox>
          {/* Descrição */}
          <Label>Descrição (Opcional)</Label>
          <Textarea placeholder="Escreva algo sobre a foto..." />

          {/* Área de preview da foto (apenas um box no momento) */}
          <PreviewBox>
            <img
              src={preview}
              alt="Foto"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </PreviewBox>

          {/* Botões */}
          <ButtonGroup>
            <SelectButton>
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
            </SelectButton>
            <SendButton onClick={handleUpload}>
              Enviar foto
            </SendButton>
          </ButtonGroup>
        </PublicarBox>
      </PublicarContainer>
    </div>
  )
}


