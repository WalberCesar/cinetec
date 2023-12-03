'use client'

import { Header } from "@/components/header";
import { BotaoLogin, ContainerLogin, Conteudo, Formulario, HeaderConteudo, InputEmail, InputSenha } from "./page.styles";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"

const loginFormSchema = z.object({
    email: z.string().min(3),
    senha: z.string().min(3)
})

type LoginFormSchema = z.infer<typeof loginFormSchema>
export default function Login() {

    const { handleSubmit, register } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    });

    function login(data: LoginFormSchema) {
        console.log(data)
    }
    return (
        <ContainerLogin>
            <Header />
            <main>
                <Conteudo>
                    <HeaderConteudo>
                        <h1>Faça Login</h1>
                        <h3>Cadastre-se ou informe seu e-mail e senha para prosseguir</h3>
                    </HeaderConteudo>


                    <Formulario onSubmit={handleSubmit(login)} >
                        <div>
                            <p>Email:</p>
                            <InputEmail placeholder="Digite seu email" {...register('email')} />
                        </div>

                        <div>
                            <p>Senha:</p>
                            <InputSenha type="password" placeholder="Digite sua senha" {...register('senha')} />
                        </div>

                        <BotaoLogin type="submit">
                            Entrar
                        </BotaoLogin>
                    </Formulario>

                </Conteudo>
            </main>
            <Footer />
        </ContainerLogin>
    )
}