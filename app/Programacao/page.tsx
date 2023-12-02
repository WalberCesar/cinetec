'use client'

import { Header } from "@/components/header";
import { Botao3D, BotaoDublado, Container, ContainerBotoes, ContainerProgramacao, HeaderData, Horarios, Informacoes, ListaFilmes } from "./page.styles";
import { Footer } from "@/components/Footer";
import Image from "next/image";

import ImageAir from '../../public/assets/filmesEmCartaz/air.png'
import Link from "next/link";

export default function Programacao() {
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

                    <ListaFilmes>
                        <Image src={ImageAir} alt="" />

                        <Informacoes>
                            <h1>AIR</h1>

                            <Horarios>
                                <p>Sala 1</p>
                                <ContainerBotoes>
                                    <BotaoDublado>Dublado</BotaoDublado>
                                    <Botao3D>3D</Botao3D>
                                    <Link href={''}>18:00</Link>
                                </ContainerBotoes>
                            </Horarios>
                        </Informacoes>
                    </ListaFilmes>
                </ContainerProgramacao>
            </main>

            <Footer />
        </Container>
    )
}