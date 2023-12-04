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
        padding: 6rem 0;


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
`;

