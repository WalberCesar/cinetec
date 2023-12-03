'use client'

import { Header } from "@/components/header";
import { Container, ContainerCardFilme, Divider, Sidebar, Wrapper, WrapperSidebar } from "./page.styles";
import { Footer } from "@/components/Footer";
import Image from "next/image";

import ImageAir from '../../public/assets/filmesEmCartaz/air.png'
import Link from "next/link";
import ImagemClassificacao from "../../public/assets/classificacao/12.png"

export default function Filme() {
    return (
        <Container>
            <Header />


            <main>
                <Wrapper>

                    <WrapperSidebar>
                        <Sidebar>

                            <h1>AIR</h1>
                            <Divider />
                            <h1><Link href={"../Programacao"}>Compre já</Link></h1>

                        </Sidebar>

                        <Image src={ImageAir} alt="" />
                    </WrapperSidebar>


                    <ContainerCardFilme>
                        <h1>Trailer</h1>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/Euy4Yu6B3nU"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                        >
                        </iframe>
                        <h1>Sinopse</h1>
                        Do premiado diretor Ben Affleck, AIR: A História Por Trás do Logo revela a inacreditável parceria
                        revolucionária entre o então novato Michael Jordan e o incipiente departamento de basquete da Nike, um
                        verdadeiro divisor de águas no mundo dos esportes e da cultura contemporânea com a marca Air Jordan.
                        Esta história comovente retrata a arriscada aposta que definiu a trajetória de um time nada
                        convencional, a visão intransigente de uma mãe que conhece o valor do imenso talento de seu filho e o
                        fenômeno das quadras que se tornaria o maior jogador de basquete todos os tempos.
                        <h1>Elenco</h1>
                        Matt Damon, Ben Affleck, Jason Bateman, Chris Messina, Chris Tucker, Gustaf Skarsgård, Marlon Wayans,
                        Matthew Maher, Viola Davis.
                        <h1>Duração</h1>
                        110 min
                        <h1>Genêro</h1>
                        Drama
                        <h1>Distribuidora</h1>
                        Warner Bros. pictures
                        <Image src={ImagemClassificacao} alt="" />
                    </ContainerCardFilme>
                </Wrapper>
            </main>

            <Footer />
        </Container>
    )
}