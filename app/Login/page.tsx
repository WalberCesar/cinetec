'use client'

import { Header } from "@/components/header";
import { BotaoLogin, ContainerLogin, Conteudo, Formulario, HeaderConteudo, InputEmail, InputSenha } from "./page.styles";
import { Footer } from "@/components/Footer";

export default function Login() {
    return (
        <ContainerLogin>
            <Header />
            <main>
                <Conteudo>
                    <HeaderConteudo>
                        <h1>Faça Login</h1>
                        <h3>Cadastre-se ou informe seu e-mail e senha para prosseguir</h3>
                    </HeaderConteudo>


                    <Formulario >
                        <div>
                            <p>Email:</p>
                            <InputEmail placeholder="Digite seu email" />
                        </div>

                        <div>
                            <p>Senha:</p>
                            <InputSenha type="password" placeholder="Digite sua senha" />
                        </div>

                        <BotaoLogin>
                            Entrar
                        </BotaoLogin>
                    </Formulario>

                </Conteudo>
            </main>
            <Footer />
        </ContainerLogin>
    )
}