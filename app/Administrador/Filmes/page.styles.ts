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
        gap: 3rem;
        padding: 6rem;
        width: 100%;
        min-height: calc(100vh - 12rem);
    }

`;



export const TabelaFilmes = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  th {
    padding: 1.25rem 2rem;
    background-color: #440000;
	border: 2px solid rgba(0, 0, 0, 0.527);

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  td {
    padding: 1.25rem 2rem;
    background-color: #440000;
	border: 2px solid rgba(0, 0, 0, 0.527);

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;

        svg {
            cursor: pointer;
        }
       
    }
  }
`

export const BotaoExcluir = styled.button`
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;

        width: 100px;
        height: 2rem;

        background-color: #8B0000;

        border-radius: 8px;
        outline: none;

        color: white;
        font-size: 1rem;
        transition: 0.2s;

        &:hover {
            opacity: 0.7;
        }
        
`;
