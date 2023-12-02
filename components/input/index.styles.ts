import styled from "styled-components";

export const Container = styled.input`
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