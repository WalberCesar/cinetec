'use client'

import { Header } from "@/components/header";
import { BotaoCadastro, ContainerLogin, Conteudo, Formulario, HeaderConteudo } from "./page.styles";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase";


const cadastroFormSchema = z.object({
    nome: z.string(),
    cpf: z.string(),
    dataNascimento: z.string(),
    celular: z.string(),
    email: z.string(),
    senha: z.string(),
})

type CadastroFormSchema = z.infer<typeof cadastroFormSchema>



export default function Cadastro() {

    const { handleSubmit, register } = useForm<CadastroFormSchema>({
        resolver: zodResolver(cadastroFormSchema)
    });

    const [ usuario, setUsuario] = useState<CadastroFormSchema>({} as CadastroFormSchema)

     async function cadastrar(data: CadastroFormSchema) {
        const usuario = data
         await addDoc(collection(db, 'usuarios'), {
            nome : usuario.nome,
            cpf: usuario.cpf,
            data_nasc: usuario.dataNascimento,
            celular : usuario.celular,
            email: usuario.email,
            senha: usuario.senha
         })
    }


    

    return (
        <ContainerLogin>
            <Header />
            <main>
                <Conteudo>
                    <HeaderConteudo>
                        <h1>Faça seu cadastro</h1>
                        <h3>Preencha os campos abaixo com suas informações</h3>
                    </HeaderConteudo>


                    <Formulario onSubmit={handleSubmit(cadastrar)}>
                        <div>
                            <p>Nome:</p>
                            <Input placeholder="Nome" nameInput="nome" register={register} />
                        </div>
                        <div>
                            <p>CPF:</p>
                            <Input placeholder="CPF" nameInput="cpf" register={register} />

                        </div>
                        <div>
                            <p>Data de nascimento:</p>
                            <Input placeholder="Data de Nascimento" nameInput="dataNascimento" register={register} />
                        </div>
                        <div>
                            <p>Celular:</p>
                            <Input placeholder="Celular" nameInput="celular" register={register} />
                        </div>
                        <div>
                            <p>Email:</p>
                            <Input placeholder="Email" nameInput="email" register={register} />
                        </div>
                        <div>
                            <p>Senha:</p>
                            <Input type="password" placeholder="Senha" nameInput="senha" register={register} />
                        </div>

                        <BotaoCadastro type="submit">
                            Cadastrar
                        </BotaoCadastro>
                    </Formulario>

                </Conteudo>
            </main>
            <Footer />
        </ContainerLogin>
    )
}