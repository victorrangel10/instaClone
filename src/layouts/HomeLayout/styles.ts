import styled from "styled-components";

export const LayoutContainer = styled.div`
display: flex;
min-height: 100vh;
`;


export const SidebarContainer = styled.aside`
 position: fixed;       /* Fixa a sidebar na posição */
  top: 0;                /* Começa no topo */
  left: 0;               /* Alinhada à esquerda */
  width: 250px;         /* Largura fixa */
  height: 100vh;        /* Ocupa toda a altura da viewport */
  background: #fff;
  padding: 1rem;
  z-index: 10;          /* Garante que fique acima de outros elementos */

`;

export const ContentContainer = styled.main`
  flex: 1; 
  padding: 2rem;
  overflow-y: auto;     /* Scroll vertical */
  margin-left: 270px;   /* Espaço para a sidebar fixa */  
`;
