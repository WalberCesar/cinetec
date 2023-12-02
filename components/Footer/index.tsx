import { ContainerGooglePlayIcone, ContainerIconesRedesSociais, FooterContainer } from "./index.styles";
import { FacebookLogo } from 'phosphor-react'
import { InstagramLogo } from 'phosphor-react'
import { TwitterLogo } from 'phosphor-react'
import { GooglePlayLogo, GoogleLogo } from 'phosphor-react'



export function Footer() {
    return (
        <FooterContainer>

            <ContainerGooglePlayIcone>
                <GooglePlayLogo size={60} weight="fill" />
            </ContainerGooglePlayIcone>

            <ContainerIconesRedesSociais>
                <FacebookLogo size={60} />
                <InstagramLogo size={60} />
                <TwitterLogo size={60} />
            </ContainerIconesRedesSociais>
        </FooterContainer>
    )
}