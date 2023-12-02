import styled from "styled-components";

export const ContainerLogin = styled.div`
    background: #8B0000;
    width: 100%;
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: calc(100vh - 12rem);
        color: #DCDCDC;
    }
`;

export const Conteudo = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
`;

export const HeaderConteudo = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 1.5rem;
        font-weight: 600;
    }
    
`;

export const Formulario = styled.form`
       display: flex;
        flex-direction: column;
        gap: 1rem;
`;

