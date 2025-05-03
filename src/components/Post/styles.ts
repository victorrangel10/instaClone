import styled from 'styled-components'

// Contêiner principal do Post
export const PostContainer = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: auto;
  max-width: 600px;    /* Largura máxima para o post */
  overflow: hidden; /* Evita que conteúdo extrapole bordas arredondadas */
  margin: 1.5rem auto;  /* Centraliza horizontalmente ao usar display block */
  overflow: hidden;     /* Evita que conteúdo extrapole bordas arredondadas */
  justify-content: space-between; /* Espaça o conteúdo uniformemente */
   height: 550px; /* Altura fixa para todos os posts */
`


export const TrashIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;  
`

export const EllipsisMenu = styled.div` 
  cursor: pointer;
  font-size: 1.5rem;  
  margin-left: auto; /* Adiciona margem à esquerda para empurrar o menu para a direita */
` 

// Cabeçalho do Post: avatar, nome e data
export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`

export const PostAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 1rem;
  object-fit: cover;  /* Garante que a imagem se ajuste ao círculo */
`

export const PostUserInfo = styled.div`
  flex: 1;
  color: #333;
  font-size: 1rem;
  font-weight: 600;  /* Semibold */
  
  span {
    display: block;
  }
`

export const PostDate = styled.span`
  color: #999;
  font-size: 0.875rem;
`

// Área principal de imagem (ou placeholder)
export const PostImage = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  /* Placeholder para quando não houver imageUrl */
  .placeholder {
    width: 100%;
    height: 400px;          /* Altura padrão do espaço reservado */
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ccc; /* Cor de fundo */
    color: #333;
    font-size: 1.5rem;
  }
`

// Rodapé do Post (descrição)
export const PostFooter = styled.div`
  padding: 1rem;
  border-top: 1px solid #ccc;
  color: #333;
  font-size: 1rem;

  strong {
    margin-right: 0.5rem;
  }
`
