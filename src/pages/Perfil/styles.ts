import styled from 'styled-components'

/* Contêiner geral do perfil */
export const PerfilContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* Define uma largura máxima para o conteúdo */
  margin: 0 auto; /* Centraliza horizontalmente */
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

/* Grade de Posts */
export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsivo */
  gap: 1.5rem; /* Espaço entre os posts */
  width: 100%; /* Garante que a grade não ultrapasse a largura do contêiner */
  align-items: start; /* Garante alinhamento consistente dos itens */
  margin-top: 2rem; /* Espaço entre o cabeçalho e os posts */
`;

/* Estilo para cada Post */
export const PostContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Garante que o post ocupe todo o espaço disponível */
`;
