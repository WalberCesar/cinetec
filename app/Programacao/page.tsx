'use client'

import { Header } from "@/components/header";
import { Botao3D, BotaoDublado, BotaoHorario, Container, ContainerBotoes, ContainerProgramacao, HeaderData, Horarios, Informacoes, ListaFilmes } from "./page.styles";
import { Footer } from "@/components/Footer";
import Image from "next/image";


import Link from "next/link";

import { z } from "zod";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



import air from '../../public/assets/filmesEmCartaz/air.png';
import belodesastre from '../../public/assets/filmesEmCartaz/belodesastre.jpg';
import dungeons from '../../public/assets/filmesEmCartaz/dungeons.jpg';
import papa from '../../public/assets/filmesEmCartaz/papa.jpg';
import suzume from '../../public/assets/filmesEmCartaz/suzume.jpg';

import Imagem12 from "../../public/assets/classificacao/12.png"
import Imagem10 from "../../public/assets/classificacao/10.png"
import Imagem14 from "../../public/assets/classificacao/14.png"
import Imagem16 from "../../public/assets/classificacao/16.png"
import Imagem18 from "../../public/assets/classificacao/18.png"

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

export default function Programacao() {

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


    const { } = useForm<filmeFormSchema>({
        resolver: zodResolver(filmeFormSchema)
    });

    return (
        <Container>
            <Header />


            <main>
                <ContainerProgramacao>
                    <HeaderData>
                        <label for="inputDatas">Data</label>
                        <input type="text" name="data" placeholder="06/jun - Terça" list="dataProgramacao" />
                        <datalist id="dataProgramacao">
                            <option>07/abr - Quarta</option>
                            <option>08/abr - Quinta</option>
                            <option>09/abr - Sexta</option>
                            <option>10/abr - Sabado</option>
                            <option>11/abr - Domingo</option>
                        </datalist>
                    </HeaderData>

                    {
                        filmes?.map((item) => {
                            return (
                                <ListaFilmes key={item.id}>
                                    <Image
                                        src={
                                            item.imagem == 'air' ? air
                                                :
                                                item.imagem == 'belodesastre' ? belodesastre
                                                    :
                                                    item.imagem == 'dungeons' ? dungeons
                                                        :
                                                        item.imagem == 'papa' ? papa :
                                                            item.imagem == 'suzume' && suzume
                                        }
                                        alt=""
                                    />

                                    <Informacoes>
                                        <h1>{item.titulo}</h1>

                                        <Horarios>
                                            <p>Sala 1</p>
                                            <ContainerBotoes>
                                                <BotaoDublado>Dublado</BotaoDublado>
                                                <Botao3D>3D</Botao3D>
                                                <Link href={''}><BotaoHorario>18:00</BotaoHorario></Link>
                                            </ContainerBotoes>
                                        </Horarios>
                                        <Horarios>
                                            <p>Sala 1</p>
                                            <ContainerBotoes>
                                                <BotaoDublado>Dublado</BotaoDublado>
                                                <Botao3D>3D</Botao3D>
                                                <Link href={''}><BotaoHorario>18:00</BotaoHorario></Link>
                                            </ContainerBotoes>

                                            <Image
                                                alt=""
                                                src={
                                                    item?.classificacao === '10' ? Imagem10
                                                        :
                                                        item?.classificacao === '12' ? Imagem12
                                                            :
                                                            item?.classificacao === '14' ? Imagem14
                                                                :
                                                                item?.classificacao === '16' ? Imagem16
                                                                    :
                                                                    item?.classificacao === '18' && Imagem18
                                                }
                                            />
                                        </Horarios>
                                    </Informacoes>
                                </ListaFilmes>
                            )
                        })
                    }

                </ContainerProgramacao>
            </main>

            <Footer />
        </Container>
    )
}

