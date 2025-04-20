import React from 'react'
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

export function Publicar() {
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
            Foto
          </PreviewBox>

          {/* Botões */}
          <ButtonGroup>
            <SelectButton>
              {/* Opcional: ícone Material, Font Awesome, etc. */}
              {/* <i className="material-icons">photo_camera</i> */}
              Selecionar foto
            </SelectButton>
            <SendButton>
              {/* <i className="material-icons">check_circle</i> */}
              Enviar foto
            </SendButton>
          </ButtonGroup>
        </PublicarBox>
      </PublicarContainer>
    </div>
  )
}


