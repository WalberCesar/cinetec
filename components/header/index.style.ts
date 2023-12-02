import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
	align-items: center;
	justify-content: space-between;
	padding-right: 2rem;
	width: 100%;
	height: 96px;
	background-color: black;
	font-family: Arial, Helvetica, sans-serif;
`;

export const HeaderMenu = styled.div`
    font-family: Arial, Helvetica, sans-serif;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	font-size: 1.5rem;
	transition: 0.2s;

    a {
        text-decoration: none;
        color: #DCDCDC;
        transition: 0.2s;
        cursor: pointer;
        margin-left: 2rem;
        font-size: 25px;
    }


`;
export const HeaderLogin = styled.div`
    display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	transition: 0.2s;
	font-size: 18px;
`;

export const LogoHeader = styled.div`
    img {
        width: 130px;
	height: 6rem;
    }
`;