'use client'

import { Header } from "@/components/header";
import { Container, ContainerCardFilme, Divider, Sidebar, Wrapper, WrapperSidebar } from "./page.styles";
import { Footer } from "@/components/Footer";
import Image from "next/image";

import ImageAir from '../../../public/assets/filmesEmCartaz/air.png'
import Imagebelodesastre from '../../../public/assets/filmesEmCartaz/belodesastre.jpg'
import ImageDungeons from '../../../public/assets/filmesEmCartaz/dungeons.jpg'
import ImagePapa from '../../../public/assets/filmesEmCartaz/papa.jpg'
import ImageSuzume from '../../../public/assets/filmesEmCartaz/suzume.jpg'

import Imagem12 from "../../../public/assets/classificacao/12.png"
import Imagem10 from "../../../public/assets/classificacao/10.png"
import Imagem14 from "../../../public/assets/classificacao/14.png"
import Imagem16 from "../../../public/assets/classificacao/16.png"
import Imagem18 from "../../../public/assets/classificacao/18.png"



import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { z } from "zod";
import { db } from "@/app/firebase";

interface FilmeProps {
    params: {
        id: string
    }
}

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


export default function Filme({ params }: FilmeProps) {

    const [filmes, setFilmes] = useState<filmeFormSchema[]>()
    const [filme, setFilme] = useState<filmeFormSchema>()


    useEffect(() => {
        const q = query(collection(db, 'Filmes'))

        const buscarFilmes = onSnapshot(q, (querySnapshot) => {
            let listaDeFilmes: filmeFormSchema[] = []
            let filmeBuscado
            querySnapshot.forEach((doc) => {
                listaDeFilmes.push({ ...doc.data() })
                filmeBuscado = doc.data()
            })
            setFilmes(listaDeFilmes)

            listaDeFilmes.map((item) => {
                if (item.id === params.id) {
                    setFilme(item)
                }
            })
        })

    }, [params])

    console.log(filme)

    return (
        <Container>
            <Header />


            <main>
                <Wrapper>

                    <WrapperSidebar>
                        <Sidebar>

                            <h1>{filme?.titulo}</h1>
                            <Divider />
                            <h1><Link href={"../Programacao"}>Compre já</Link></h1>

                        </Sidebar>

                        <Image
                            src={filme?.imagem === 'air' ? ImageAir
                                :
                                filme?.imagem === 'belodesastre' ? Imagebelodesastre
                                    :
                                    filme?.imagem === 'dungeons' ? ImageDungeons
                                        :
                                        filme?.imagem === 'papa' ? ImagePapa
                                            :
                                            filme?.imagem === 'suzume' && ImageSuzume
                            }
                            alt="" />
                    </WrapperSidebar>


                    <ContainerCardFilme>
                        <h1>Trailer</h1>
                        <iframe
                            width="560"
                            height="315"
                            src={filme?.link}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        >
                        </iframe>
                        <h1>Sinopse</h1>
                        {filme?.sinopse}
                        <h1>Duração</h1>
                        {filme?.duracao}
                        <h1>Genêro</h1>
                        {filme?.genero}
                        <Image
                            src={
                                filme?.classificacao === '10' ? Imagem10
                                    :
                                    filme?.classificacao === '12' ? Imagem12
                                        :
                                        filme?.classificacao === '14' ? Imagem14
                                            :
                                            filme?.classificacao === '16' ? Imagem16
                                                :
                                                filme?.classificacao === '18' && Imagem18
                            }
                            alt=""
                        />
                    </ContainerCardFilme>
                </Wrapper>
            </main>

            <Footer />
        </Container>
    )
}