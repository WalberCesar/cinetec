import styled from "styled-components";

export const Container = styled.div`
    background: #8B0000;
    width: 100%;
    min-height: 100vh;

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 2rem;
        width: 100%;
        margin-top: 6rem;
		margin-bottom: 2rem ;
    }

`;

export const ContainerProgramacao = styled.div`
    display: flex;
	flex-direction: column;
	width: 50rem;
	background-color: white;
	border-top-right-radius:20px;
	border-top-left-radius:20px;
	border: 2px solid black;
	border-bottom: none;
`;

export const HeaderData = styled.div`
    display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	padding: 0 2rem;

	width: 100%;
	height: 4.5rem;
	background-color: black;
	border-top-right-radius:15px;
	border-top-left-radius:15px;
	font-family: Arial, Helvetica, sans-serif;

	input {
		display: flex;
		padding-left: 1rem;

		background-color: #8B0000;

		width: 12rem;
		height: 2.5rem;

		border-radius: 6px;
		border: 1px solid white;
		outline: none;
		color: white;
		
		font-size: 1rem;
		font-weight: 400;

		&::placeholder {
			color: white;
		}
	}
`;

export const ListaFilmes = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 2rem;
	padding-left: 1rem;
	padding-top: 2rem;
	padding-bottom: 2rem;

	border-bottom: 2px solid black;

	img {
		width: 200px;
		border: solid 2px black;
		border-radius: 8px;
	}
`;

export const Informacoes = styled.div`
	display: flex;
	flex-direction: column	;
	align-items: flex-start;
	gap: 1rem;

	h1{
		color: #8B0000;
		font-family: Arial, Helvetica, sans-serif;
		align-self: center;
		font-size: 2rem;
		padding: 0;
		margin: 0;
		
	}
`;

export const Horarios = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	p {
		font-family: Arial, Helvetica, sans-serif;
		color: black;
		font-size: 1rem;
	}

	img {
		width: 3.5rem;
		height: 3.5rem;
		border: none;
		margin-top: 0.5rem;
	}
`;

export const ContainerBotoes = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 0.5rem;
`;

export const BotaoDublado = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 7rem;
	height: 2rem;
	background-color: #B22222;
	outline: none;
	border: none;
	border-radius: 4px;

	color: white;
	font-weight: 400;
	font-size: 1rem;
`;
export const Botao3D = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 2.5rem;
	height: 2rem;
	background-color: #20B2AA;
	outline: none;
	border: none;
	border-radius: 4px;

	color: white;
	font-weight: 400;
	font-size: 1rem;

	transition: 0.2s;
`;

export const BotaoHorario = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 7rem;
	height: 2rem;
	cursor: pointer;
	background-color: #228B22;
	outline: none;
	border: none;
	border-radius: 4px;

	color: white;
	font-weight: 400;
	font-size: 1rem;

	transition: 0.2s;

	&:hover {
		background-color: #32CD32;
	}
`;

