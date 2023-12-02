import Image from "next/image";
import { HeaderContainer, HeaderLogin, HeaderMenu, LogoHeader } from "./index.style";
import Logo from '../../public/assets/cinetec_logo.png'
import Link from "next/link";

export function Header() {
    return (
        <HeaderContainer>

            <HeaderMenu>
                <LogoHeader>
                    <Image src={Logo} alt="" />
                </LogoHeader>
                <Link href={''}>INÍCIO</Link>
                <Link href={''}>PROGRAMAÇÃO</Link>
                <Link href={''}>SOBRE NÓS</Link>
            </HeaderMenu>

            <HeaderLogin>
                <Link href={''}>LOGIN</Link>
                <Link href={''}>CADASTRO</Link>
            </HeaderLogin>


        </HeaderContainer>
    )
}

