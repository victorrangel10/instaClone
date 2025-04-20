import styled from 'styled-components'

/* Contêiner geral do perfil */
export const PerfilContainer = styled.div`
  width: 100%;
  padding: 2rem;
  /* Ajuste se quiser centralizar ou criar margens, 
     lembrando que o layout pai já tem sidebar e título */
`

/* Header com a foto de perfil e descrição à direita */
export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`

/* Foto de perfil */
export const ProfileAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  /* Se quiser alguma borda ou sombra, defina aqui */
`

/* Container do texto (descrição, OBS etc.) */
export const DescriptionContainer = styled.div`
  h2 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
  }

  p {
    margin: 0.25rem 0;
    color: #666;
  }
`

/* Grade de Posts (3 colunas) */
export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas */
  gap: 1rem; /* Espaço entre as colunas e as linhas */

  /* Responsividade simples */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
