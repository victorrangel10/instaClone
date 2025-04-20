import styled from 'styled-components'

/* Container geral que centraliza a box na tela */
export const PublicarContainer = styled.div`
  width: 100%;
  min-height: 80vh;       /* Altura mínima da área principal */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent; 
  /* Caso você queira uma cor de fundo, ajuste aqui.
     Se o layout pai já tem cor, deixe transparente. */
`

/* Box principal onde fica o formulário */
export const PublicarBox = styled.div`
  background-color: #fff; 
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 500px;           /* Largura fixa - ajuste conforme necessário */
  padding: 2rem;
  text-align: center;     /* Centraliza textos dentro */
  box-shadow: 0 2px 6px rgba(0,0,0,0.1); /* Sombra sutil */
`

/* Rótulo para "Descrição (Opcional)" */
export const Label = styled.label`
  display: block;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-align: left; /* Alinha o texto do label à esquerda */
  color: #333;
`

/* Campo de texto para descrição */
export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;             /* Impede redimensionamento manual */
  border-radius: 6px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-family: inherit;     /* Usa a mesma fonte do site */
  color: #333;
`

/* Box que simula a área de preview da foto */
export const PreviewBox = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.2rem;
`

/* Container para agrupar os botões */
export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

/* Botão "Selecionar foto" (borda laranja, fundo branco) */
export const SelectButton = styled.button`
  border: 2px solid #FF751F;
  background-color: #fff;
  color: #FF751F;
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #FF751F;
    color: #fff;
  }
`

/* Botão "Enviar foto" (fundo laranja) */
export const SendButton = styled.button`
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
