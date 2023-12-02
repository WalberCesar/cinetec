'use client'
import styled from 'styled-components';

export const Container = styled.div`
    background: #8B0000;
    width: 100%;
    min-height: 100vh;
    

    main {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: center;
        gap: 3rem;
        padding: 2rem 0;


        width: 100%;
    }

    p {
	    display: none;
    }
`;

export const MenuFilmes = styled.div`
    display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-top: 6rem;

    h1 {
        cursor: default;
        margin-bottom: 0.4rem;
        font-size: 30px;
        font-family: Arial, Helvetica, sans-serif;
        color: #8B0000;
        -webkit-text-stroke: 1.5px #F0E68C;
    }
`;

export const ListaFilmes = styled.div`
    display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 1.5rem;
	height: 285px;

    a {
        text-decoration: none;
    }
  
`;

export const CardFilme = styled.div`
    	cursor: pointer;

        max-height: 285px;
        max-width: 200px;

        img {
        transition: .2s;
        max-width: 100%;
        border-radius: 10px;
        border: 3px solid #F0E68C;
    }
    
    &:hover {
        div {
            opacity: 1;
        }
    }

`;

export const NomeFilme = styled.div`
    display: flex;
	font-family: Arial, Helvetica, sans-serif;
	justify-content: flex-start;
	padding: 20px;
	background: linear-gradient(180deg, rgba(146, 17, 17, 0.1) 0%, rgba(146, 17, 17, 0.6) 30%, rgba(146, 17, 17, 1) 100%);
	height: 100px;
	width: 100%;
	max-width: 200px;
	text-align: center;
	justify-content: center;
	border-bottom-left-radius: 9px;
	border-bottom-right-radius: 9px;
	transition: .3s;

	opacity: 0;
	margin-top: -100;
	position: relative;
	z-index: 10;

    strong {
        color: #DCDCDC;
        font-weight: 900;
        font-size: 0.75rem;
        display: flex;
        justify-content: center;
        align-items: end;
    }
`;
