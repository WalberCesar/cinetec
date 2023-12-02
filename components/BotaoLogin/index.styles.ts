import styled from "styled-components";

export const Container = styled.button`
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