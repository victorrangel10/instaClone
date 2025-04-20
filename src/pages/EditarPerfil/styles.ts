import styled from 'styled-components'

/* Container geral, centralizado na tela */
export const EditarContainer = styled.div`
  width: 100%;
  min-height: 80vh; /* Ajuste conforme a altura disponível no layout */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`

/* Caixa principal de edição */
export const EditarBox = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 600px;    /* Largura fixa - ajuste conforme necessário */
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

/* Label para títulos das seções (foto, bio, etc.) */
export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 1rem;
  margin: 1rem 0 0.5rem;
  text-align: left;
  color: #333;
`

/* Area de preview da foto de perfil */
export const FotoPreview = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1rem;
`

/* Botão para envio da imagem */
export const UploadButton = styled.button`
  border: 2px solid #FF751F;
  background-color: #fff;
  color: #FF751F;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #FF751F;
    color: #fff;
  }
`

/* Textarea para biografia (desabilitado) */
export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-family: inherit;
  color: #333;

  &[disabled] {
    background-color: #f9f9f9;
    cursor: not-allowed;
  }
`

/* Botão Salvar */
export const SalvarButton = styled.button`
  border: 2px solid #FF751F;
  background-color: #FF751F;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #fff;
    color: #FF751F;
  }
`
