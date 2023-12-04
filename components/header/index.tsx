import Image from "next/image";
import { HeaderContainer, HeaderLogin, HeaderMenu, LogoHeader } from "./index.style";
import Logo from '../../public/assets/cinetec_logo.png'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export function Header() {
    const { push } = useRouter();
    const path = usePathname();
    const [nomeUsuario, setNomeUsuario] = useState<any>()
    useEffect(() => {
        const buscarUsuario = localStorage.getItem('cinetec-usuario-logado')
        if (buscarUsuario) {
            setNomeUsuario(buscarUsuario)
        }

    }, [setNomeUsuario])


    async function sairDaConta() {
        await localStorage.removeItem('cinetec-usuario-logado')
        alert('Você saiu da sua conta!')

        push('/Home')




    }

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
                {
                    nomeUsuario ?
                        <>
                            <Link style={{ textTransform: 'uppercase' }} href={""}>{nomeUsuario}</Link>
                            <Link href={""} onClick={sairDaConta}>SAIR</Link>
                        </>
                        :

                        <>
                            <Link style={{ color: path === '/Login' && '#8B0000' }} href={"../Login"}>LOGIN</Link>
                            <Link style={{ color: path === '/Cadastro' && '#8B0000' }} href={"../Cadastro"}>CADASTRO</Link>
                        </>

                }
            </HeaderLogin>


        </HeaderContainer>
    )
}

