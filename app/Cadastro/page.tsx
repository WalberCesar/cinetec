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
                        <div>
                            <p>Nome:</p>
                            <Input placeholder="Nome" />
                        </div>
                        <div>
                            <p>CPF:</p>
                            <Input minLength={11} maxLength={11} type="number" placeholder="CPF" />

                        </div>
                        <div>
                            <p>Data de nascimento:</p>
                            <Input placeholder="Data de Nascimento" />
                        </div>
                        <div>
                            <p>Celular:</p>
                            <Input placeholder="Celular" />
                        </div>
                        <div>
                            <p>Email:</p>
                            <Input placeholder="Email" />
                        </div>
                        <div>
                            <p>Senha:</p>
                            <Input type="password" placeholder="Senha" />
                        </div>

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