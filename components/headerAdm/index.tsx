import Image from "next/image";
import { HeaderContainer, HeaderLogin, HeaderMenu, LogoHeader } from "./index.style";
import Logo from '../../public/assets/cinetec_logo.png'
import Link from "next/link";
import { usePathname } from "next/navigation";


export function HeaderAdm() {

    const path = usePathname();

    return (
        <HeaderContainer>

            <HeaderMenu>
                <LogoHeader>
                    <Image src={Logo} alt="" />
                </LogoHeader>
                <Link style={{ color: path === '/Administrador' && '#8B0000' }} href={"../Administrador"}>ADICIONAR FILME</Link>
                <Link style={{ color: path === '/Administrador/Filmes' && '#8B0000' }} href={"../Administrador/Filmes"}>FILMES</Link>
            </HeaderMenu>

            <HeaderLogin>
                <Link href={"../Home"} >SAIR</Link>
            </HeaderLogin>

        </HeaderContainer>
    )
}

