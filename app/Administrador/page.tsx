'use client'


import { FormularioAdm, Container, InputAdm, TextAreaSinopse, BotaoCadastrarAdm } from "./page.styles";
import { Footer } from "@/components/Footer";
import { Plus } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { HeaderAdm } from "@/components/headerAdm";

const filmeFormSchema = z.object({
    titulo: z.string(),
    genero: z.string(),
    duracao: z.string(),
    link: z.string(),
    classificacao: z.string(),
    sinopse: z.string(),
})

type filmeFormSchema = z.infer<typeof filmeFormSchema>


export default function Administrador() {

    const { handleSubmit, register, reset } = useForm<filmeFormSchema>({
        resolver: zodResolver(filmeFormSchema)
    });

    async function adicionarFilme(data: filmeFormSchema) {

        await addDoc(collection(db, 'Filmes'), {
            titulo: data.titulo,
            genero: data.genero,
            duracao: data.duracao,
            link: data.link,
            classificacao: data.classificacao,
            sinopse: data.sinopse
        })

        reset()
        alert('Filme adicionado com sucesso!')
    }
    return (
        <Container>
            <HeaderAdm />


            <main>
                <FormularioAdm onSubmit={handleSubmit(adicionarFilme)} >
                    <h1>Administrador</h1>
                    <div>
                        <p>Titulo do filme:</p>
                        <InputAdm {...register('titulo')} />
                    </div>
                    <div>
                        <p>Gênero:</p>
                        <InputAdm {...register('genero')} />
                    </div>
                    <div>
                        <p>Duração:</p>
                        <InputAdm {...register('duracao')} />
                    </div>
                    <div>
                        <p>Link do trailer:</p>
                        <InputAdm {...register('link')} />
                    </div>
                    <div>
                        <p>Classificação:</p>
                        <InputAdm {...register('classificacao')} />
                    </div>
                    <div>
                        <p>Sinopse:</p>
                        <TextAreaSinopse {...register('sinopse')} />
                    </div>

                    <BotaoCadastrarAdm type="submit">
                        Adicionar
                        <Plus weight="bold" color="white" />
                    </BotaoCadastrarAdm>
                </FormularioAdm >
            </main>

            <Footer />
        </Container>
    )
}