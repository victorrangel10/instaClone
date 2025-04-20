import styled from "styled-components";

export const HomeContainer = styled.main`
    overflow: hidden;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: 100%;
    flex:  1;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    background: #39646A;
    
`;

export const BoxContainer = styled.div`
    
    background-color: #003A3D;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 700px;
    height: 800px;
    text-align: center;
    top: 158px;
    left: 514px;
    border-radius: 40px;
    border-width: 2px;
    margin: 100px;
    height:100%;

    border: 2px solid #FFFFFF
    display: flex;
    flex-direction: column;
    gap: 1.0rem;

    img {
      
        width: 507px; /* A imagem ocupará no máximo a largura da box */
        height: 265px;
        display: block;  /* Remove espaço indesejado embaixo da imagem */
        margin: 0 auto 1.5rem auto; /* 1.5rem de margem inferior */
    }

    input {
        display:block;
        width: 600px;
        height: 64px;
        top: 544px;
        left: 564px;
        border-radius: 10px;
        border-width: 2px;
        margin: 0 auto 1.5rem auto; /* 1.5rem de margem inferior */
        font-size: 32px;
        padding:20px;
    }   
    button{
        width: 180px;
        height: 52px;
        top: 736px;
        left: 774px;
        border-radius: 10px;
        border-width: 1px;
        background: #FF751F;
        margin: 0 auto 1.5rem auto; /* 1.5rem de margem inferior */
        border: 1px solid #FFFFFF
        font-family: Montserrat;
        font-weight: 500;
        font-size: 32px;
        line-height: 100%;
        letter-spacing: 0px;
        text-align: center;
        vertical-align: middle;
    }
`;
