import Image from "next/image";
import styled from "styled-components";

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

    h1 {
        font-weight: 600;
    }

    h2 {
        font-weight: 600;
    }

`;

export const CardNomes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    min-height: 300px;
	line-height: 1.5em;
	background-color: #440000;
	border-radius: 20px;
	border: solid rgba(0, 0, 0, 0.527);
	padding: 2rem;
	box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.5);
    color: #F0E68C  ;

    h1 {
        align-self: center;
        font-size: 3rem;
        margin-bottom: 3rem;
    }

    p {
        font-size: 2rem;
        margin-bottom: 1rem;

    }
`;

export const WrapperGrupoImagem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    gap: 2rem;

    width: 100%;

    > img {
        width: 50%;
        height: 350px;
        border-radius: 20px;
        border: 2px solid #F0E68C ;
        box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.5);
    }
`;

export const CardMaior = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: 300px;
	line-height: 1.5em;
	background-color: #440000;
	border-radius: 20px;
	border: solid rgba(0, 0, 0, 0.527);
	padding: 2rem;
	box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.5);
    color: #F0E68C  ;

    h1 {
        font-size: 3rem;
        margin-bottom: 3rem;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.5rem;

        margin-bottom: 1.5rem;
    }

    h2 {
        font-size: 2rem;
        font-weight: 600;
    }

    p {
        font-size: 1.5rem;

    }
`;

export const ImagemGrande = styled(Image)`
    width: 100%;
	border-radius: 20px;
	border: 2px solid #F0E68C ;
	box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.5);
`;

export const CardMissaoVisao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    min-height: 300px;
	line-height: 1.5em;
	background-color: #440000;
	border-radius: 20px;
	border: solid rgba(0, 0, 0, 0.527);
	padding: 2rem;
	box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.5);
    color: #F0E68C  ;

    h1 {
        font-size: 3rem;
        margin-bottom: 3rem;
    }

    p {
        font-size: 2rem;
        line-height: 2rem;
        margin-bottom: 1rem;

    }
`;