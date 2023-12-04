'use client'


import { FormularioAdm, Container, InputAdm, TextAreaSinopse, BotaoCadastrarAdm, TabelaFilmes, BotaoExcluir } from "./page.styles";
import { Footer } from "@/components/Footer";
import { Plus, Trash } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { addDoc, collection, deleteDoc, doc, getDoc, onSnapshot, query, QuerySnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { HeaderAdm } from "@/components/headerAdm";
import { useEffect, useState } from "react";

const filmeFormSchema = z.object({
    titulo: z.string(),
    genero: z.string(),
    duracao: z.string(),
    link: z.string(),
    classificacao: z.string(),
    sinopse: z.string(),
})

type filmeFormSchema = z.infer<typeof filmeFormSchema>


export default function FilmesCadastrados() {

    const [filmes, setFilmes] = useState<filmeFormSchema[]>()

    useEffect(() => {
        const q = query(collection(db, 'Filmes'))

        const buscarFilmes = onSnapshot(q, (querySnapshot) => {
            let listaDeFilmes: filmeFormSchema[] = []
            querySnapshot.forEach((doc) => {
                listaDeFilmes.push({ ...doc.data(), id: doc.id })
            })
            setFilmes(listaDeFilmes)
        })

    }, [])


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

    async function deletarFilme(id: string) {
        await deleteDoc(doc(db, 'Filmes', id))
    }
    return (
        <Container>
            <HeaderAdm />


            <main>
                <TabelaFilmes>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Gênero</th>
                            <th>Duração</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>

                        {filmes &&
                            filmes!.map((filme) => {
                                return (
                                    <tr key={filme.id} >
                                        <td width="50%">{filme.titulo}</td>
                                        <td>
                                            {filme.genero}
                                        </td>
                                        <td>{filme.duracao}</td>
                                        <td>
                                            {filme.classificacao}
                                            <BotaoExcluir onClick={() => deletarFilme(filme.id)}>
                                                Excluir
                                                <Trash alt="excluir" weight="light" size={25} />
                                            </BotaoExcluir>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </TabelaFilmes>
            </main>

            <Footer />
        </Container>
    )
}