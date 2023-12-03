import Image from "next/image";
import { HeaderContainer, HeaderLogin, HeaderMenu, LogoHeader } from "./index.style";
import Logo from '../../public/assets/cinetec_logo.png'
import Link from "next/link";
import { usePathname } from "next/navigation";


export function Header() {

    const path = usePathname();

    return (
        <HeaderContainer>

            <HeaderMenu>
                <LogoHeader>
                    <Image src={Logo} alt="" />
                </LogoHeader>
                <Link style={{ color: path === '/Home' && '#8B0000' }} href={"../Home"}>INÍCIO</Link>
                <Link style={{ color: path === '/Programacao' && '#8B0000' }} href={"../Programacao"}>PROGRAMAÇÃO</Link>
                <Link style={{ color: path === '/Sobre' && '#8B0000' }} href={"../Sobre"}>SOBRE NÓS</Link>
            </HeaderMenu>

            <HeaderLogin>
                <Link style={{ color: path === '/Login' && '#8B0000' }} href={"../Login"}>LOGIN</Link>
                <Link style={{ color: path === '/Cadastro' && '#8B0000' }} href={"../Cadastro"}>CADASTRO</Link>
            </HeaderLogin>


        </HeaderContainer>
    )
}

