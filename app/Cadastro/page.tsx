'use client'

import { Header } from "@/components/header";
import { ContainerLogin, Conteudo, Formulario, HeaderConteudo } from "./page.styles";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/input";
import { Botao } from "@/components/BotaoLogin";

export default function Cadastro() {
    return (
        <ContainerLogin>
            <Header />
            <main>
                <Conteudo>
                    <HeaderConteudo>
                        <h1>Faça seu cadastro</h1>
                        <h3>Preencha os campos abaixo com suas informações</h3>
                    </HeaderConteudo>


                    <Formulario>
                        <Input placeholder="Nome" />
                        <Input minLength={11} maxLength={11} type="number" placeholder="CPF" />
                        <Input placeholder="Data de Nascimento" />
                        <Input placeholder="Celular" />
                        <Input placeholder="Email" />
                        <Input type="password" placeholder="Senha" />
                        <Botao>
                            Cadastrar
                        </Botao>
                    </Formulario>

                </Conteudo>
            </main>
            <Footer />
        </ContainerLogin>
    )
}