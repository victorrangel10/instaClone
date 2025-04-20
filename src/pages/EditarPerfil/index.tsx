import React from 'react'
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


export function EditarPerfil() {
  return (
    <div>
      <TitleBar text="Editar Perfil" />
      <EditarContainer>
        <EditarBox>
          {/* Alterar foto de perfil */}
          <Label>Alterar foto de perfil</Label>
          <FotoPreview>
            {/* Aqui você poderia mostrar a foto atual do usuário ou um placeholder */}
            enviar foto
          </FotoPreview>

          {/* Caso queira um botão para selecionar arquivo */}
          <UploadButton>Enviar foto</UploadButton>

          {/* Botão Salvar */}
          <SalvarButton>Salvar</SalvarButton>
        </EditarBox>
      </EditarContainer>
    </div>
  )
}

