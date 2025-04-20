import styled from 'styled-components'

export const TitleBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem; /* Espaçamento abaixo do título, caso desejado */
`

export const TitleText = styled.h1`
  font-size: 58px;
  font-weight: 600;
  color: #333;
  margin: 0; /* Remove margens padrão do h1 */
`

export const TitleBarLine = styled.div`
  width: 100%;         /* Ocupa toda a largura do container */
  max-width: 1028px;    /* Opcional: define uma largura máxima */
  height: 2px;
  background-color: #FF751F;
  margin-top: 0.5rem;  /* Espaço entre o texto e a barra */
`
