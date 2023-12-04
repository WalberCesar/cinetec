'use client'

import { Header } from "@/components/header";
import { BotaoLogin, ContainerLogin, Conteudo, Formulario, HeaderConteudo, InputEmail, InputSenha } from "./page.styles";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useRouter } from "next/navigation";

const loginFormSchema = z.object({
    email: z.string(),
    senha: z.string()
})

type LoginFormSchema = z.infer<typeof loginFormSchema>
export default function Login() {

    const { push } = useRouter()

    const [listaDeUsuarios, setListaDeUsuarios] = useState<any>()
    const [usuario, setUsuario] = useState<any>()


    const { handleSubmit, register, reset } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    });

    async function login(data: LoginFormSchema) {


        if (data.email === 'administrador' && data.senha === '1234') {
            alert('logado como administrador!')
            push('/Administrador')
        } else {
            const q = await query(collection(db, 'usuarios'))

            await onSnapshot(q, (querySnapshot) => {
                let listaDeUsuarios: any = []
                let user
                querySnapshot.forEach((doc) => {
                    listaDeUsuarios.push({ ...doc.data() })
                    user = doc.data()
                })
                setUsuario(user)
                setListaDeUsuarios(listaDeUsuarios)

            })

            if (usuario) {

                if (data.email === usuario.email && data.senha === usuario.senha) {
                    await alert('Login Efetuado com sucesso')
                    localStorage.setItem('cinetec-usuario-logado', usuario.nome)
                    push(`../Home`)

                } else {
                    alert('Dados incorretos')
                    reset();
                }
            }


        }





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