import Image from "next/image";
import styled from "styled-components";
import { Plus } from 'phosphor-react'

export const Container = styled.div`
    background: #8B0000;
    width: 100%;
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        padding-top: 2rem;
        padding-left: 6rem;
        padding-right: 6rem;
        width: 100%;
        margin-top: 6rem;
		margin-bottom: 2rem ;


    }

`;

export const FormularioAdm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 2rem;
    width: 100%;
	line-height: 1.5em;
	background-color: #440000;
	border-radius: 20px;
	border: solid rgba(0, 0, 0, 0.527);
	
	box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.5);
    color: #F0E68C  ;

    h1 {
        font-size: 3rem;
        margin-bottom: 3rem;
        align-self: center;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        gap: 0.5rem;
        margin-bottom: 1rem;

    }

    p {
        font-size: 1.5rem;

    }
`;

export const InputAdm = styled.input`
        padding: 10px;
        width: 100%;
        height: 2rem;

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

export const TextAreaSinopse = styled.textarea`
    width: 100%;
    background:  #440000;
    border: 2px solid #DCDCDC;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 0.25rem;
    color: white;
    line-height: 1.4;
`;

export const BotaoCadastrarAdm = styled.button`
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-self: flex-end;
        align-items: center;
        justify-content: center;

        padding: 10px;
        width: 250px;
        height: 3rem;

        background-color: #32CD32;

        border-radius: 8px;
        outline: none;

        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        transition: 0.2s;

        &:hover {
            opacity: 0.9;
        }
        
`;
