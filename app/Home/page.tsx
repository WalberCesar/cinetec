'use client'

import { Header } from "@/components/header";
import { CardFilme, Container, ListaFilmes, MenuFilmes, NomeFilme } from "./page.style";
import { filmesEmCartaz } from "@/informacoesFilme/filmesEmCartaz";
import Link from "next/link";
import Image from "next/image";


import air from '../../public/assets/filmesEmCartaz/air.png';
import belodesastre from '../../public/assets/filmesEmCartaz/belodesastre.jpg';
import dungeons from '../../public/assets/filmesEmCartaz/dungeons.jpg';
import papa from '../../public/assets/filmesEmCartaz/papa.jpg';
import suzume from '../../public/assets/filmesEmCartaz/suzume.jpg';

import ninguem from '../../public/assets/filmesEmBreve/ninguem.jpg';
import mosqueteiros from '../../public/assets/filmesEmBreve/mosqueteiros.jpg';
import beau from '../../public/assets/filmesEmBreve/beau.png';
import mortedodemonio from '../../public/assets/filmesEmBreve/mortedodemonio.png';
import renfield from '../../public/assets/filmesEmBreve/renfield.jpg';
import { filmesEmBreve } from "@/informacoesFilme/filmesEmBreve";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { z } from "zod";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/navigation";




const filmeFormSchema = z.object({
    titulo: z.string(),
    genero: z.string(),
    duracao: z.string(),
    link: z.string(),
    classificacao: z.string(),
    sinopse: z.string(),
    id: z.string(),
    imagem: z.string()
})

type filmeFormSchema = z.infer<typeof filmeFormSchema>

export default function Home() {



    const [filmes, setFilmes] = useState<filmeFormSchema[]>()

    useEffect(() => {
        const q = query(collection(db, 'Filmes'))

        const buscarFilmes = onSnapshot(q, (querySnapshot) => {
            let listaDeFilmes: filmeFormSchema[] = []
            querySnapshot.forEach((doc) => {
                listaDeFilmes.push({ ...doc.data() })
            })
            setFilmes(listaDeFilmes)
        })

    }, [])

    const { push } = useRouter()

    return (
        <Container>
            <Header />
            <main>
                <MenuFilmes>
                    <h1>FILMES EM CARTAZ</h1>
                    <ListaFilmes>
                        {filmes?.map(filme => {
                            return (
                                <CardFilme key={filme.id}>
                                    <nav onClick={() => push(`/Filme/${filme.id}`)} >
                                        <Image
                                            src={
                                                filme.imagem == 'air' ? air
                                                    :
                                                    filme.imagem == 'belodesastre' ? belodesastre
                                                        :
                                                        filme.imagem == 'dungeons' ? dungeons
                                                            :
                                                            filme.imagem == 'papa' ? papa :
                                                                filme.imagem == 'suzume' && suzume
                                            }
                                            width={200}
                                            height={285}
                                            alt=""
                                        />
                                    </nav>
                                    <p>{filme.titulo} <br /> {filme.genero}</p>
                                </CardFilme>
                            )
                        })}
                    </ListaFilmes>
                </MenuFilmes>

                <MenuFilmes>
                    <h1>FILMES EM BREVE</h1>
                    <ListaFilmes>


                        {filmesEmBreve.map(filme => {
                            return (
                                <CardFilme key={filme.nome}>
                                    <nav>
                                        <Image
                                            style={{ cursor: 'default' }}
                                            src={
                                                filme.nome == 'ninguem' ? ninguem
                                                    :
                                                    filme.nome == 'mosqueteiros' ? mosqueteiros
                                                        :
                                                        filme.nome == 'beau' ? beau
                                                            :
                                                            filme.nome == 'mortedodemonio' ? mortedodemonio :
                                                                filme.nome == 'renfield' && renfield
                                            }
                                            width={200}
                                            height={285}
                                            alt=""
                                        />
                                    </nav>
                                </CardFilme>
                            )
                        })}
                    </ListaFilmes>
                </MenuFilmes>
            </main>

            <Footer />
        </Container>
    )
}
