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

export const InputEmail = styled.input`
        padding: 10px;
        width: 250px;
        height: 30px;

        color: #DCDCDC;
        background-color: transparent;
    
        border: 2px solid #DCDCDC;

        border-radius: 8px;
        outline: none;

        &::placeholder {
            color: #DCDCDC;
            font-size: 1rem;
        }
`;
export const InputSenha = styled.input`
    padding: 10px;
        width: 250px;
        height: 30px;

        color: #DCDCDC;
        background-color: transparent;

        border-radius: 8px;
    
        border: 2px solid #DCDCDC;
        outline: none;


        &::placeholder {
            color: #DCDCDC;
            font-size: 1rem;
        }
`;

export const BotaoLogin = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;
        width: 250px;
        height: 30px;

        background-color: white;

        border-radius: 8px;
    
        outline: none;

        color: #8B0000;
        font-size: 1rem;
        font-weight: 600;
        transition: 0.2s;

        &:hover {
            opacity: 0.9;
        }
        
`;
