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
		padding-left: 6rem;
		padding-right: 6rem;
        width: 100%;
        margin-top: 6rem;
		margin-bottom: 2rem ;
    }

`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
`;

export const WrapperSidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    > img {
        width: 250px;
        height: 300px;
        border: 3px solid #F0E68C;
        border-radius: 10px;
        object-fit: cover;
    }
`;


export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    gap: 2rem;
    min-width: 300px;
    border-radius: 16px;
    border: 2px solid #F0E68C;


    > h1 {
        width: 130%;
        font-size: 50px;
        font-family: Arial, Helvetica, sans-serif;
        color:#8B0000 ;
        -webkit-text-stroke: 1.5px #F0E68C ;
        margin: 0;
        padding: 0;
        text-align: center;
    }

     a {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        color: #F0E68C;
        transition: 0.2s;

        &:hover{
            color: white;
        }
    }
    
`;

export const Divider = styled.button`
    width: 100%;
    height: 0.25rem;
    border-radius: 8px;
    background-color: #F0E68C;
    cursor: default;
`;

export const ContainerCardFilme = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1em;	
	width: 40%;
	color: #F0E68C;
	font-family: Arial, Helvetica, sans-serif;
	background-color: #400000;
	padding: 2em 2em 2em 2em;
	border-radius: 30px;
	border: solid 3px rgba(0, 0, 0, 0.527);
	box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.5);

    > h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        color: #F0E68C;
    }

    > img {
        width: 22%;
    }

    iframe {
        border: 3px black solid;
        height: 340px;
        width: 90%;
    }
`;