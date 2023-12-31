'use client'


import { Container, TabelaFilmes, BotaoExcluir } from "./page.styles";
import { Footer } from "@/components/Footer";
import { Trash } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { addDoc, collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
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



    async function deletarFilme(id: string) {
        await alert('Filme excluido com sucesso!')
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