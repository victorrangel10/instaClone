import styled from "styled-components";

export const SidebarContainer = styled.main`   
      min-height: 100vh;
      border-right: 2px solid #ccc;
      width: 270px;
      img {
        width: calc(100% - 20px); /* A largura será a do container menos 20px */
        height: 147.88px;         /* Mantém a altura desejada */
        margin: 30px auto 50px auto; /* Centraliza horizontalmente, mas a largura já está diminuída para deixar espaço */
      }
    }
`;

export const ItemContainer = styled.div`
display: flex;              /* Define que os elementos internos ficarão em linha */
  align-items: center;        /* Alinha verticalmente os itens */
  gap: 0.5rem;                /* Espaçamento entre os elementos */
  padding: 30px;              /* Espaço interno */
  cursor: pointer;            /* Muda o cursor quando passar o mouse */
  justify-content: left;

  /* Estilizando o ícone <i> interno */
  i {
    font-size: 46px;
    color: #333;
    padding:0.5rem;
  }

  /* Estilizando o link <a> interno */
  a {
    text-decoration: none;    /* Remove o sublinhado */
    color: #333;
    font-size: 30px;
      padding:0.5rem;
  }

  /* Exemplo de efeito para quando o usuário passar o mouse */
  &:hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }

`