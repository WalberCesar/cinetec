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


export default function Home() {
    return (
        <Container>
            <Header />
            <main>
                <MenuFilmes>
                    <h1>FILMES EM CARTAZ</h1>
                    <ListaFilmes>
                        {filmesEmCartaz.map(filme => {
                            return (
                                <CardFilme key={filme.nome}>
                                    <Link href={""}>
                                        <Image
                                            src={
                                                filme.nome == 'air' ? air
                                                    :
                                                    filme.nome == 'belodesastre' ? belodesastre
                                                        :
                                                        filme.nome == 'dungeons' ? dungeons
                                                            :
                                                            filme.nome == 'papa' ? papa :
                                                                filme.nome == 'suzume' && suzume
                                            }
                                            width={200}
                                            height={285}
                                            alt=""
                                        />
                                        <NomeFilme>
                                            <strong>{filme.titulo}<br />{filme.genero}</strong>
                                        </NomeFilme>
                                    </Link>
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
                                    <Link href={""}>
                                        <Image
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
                                        <NomeFilme>
                                            <strong>{filme.titulo}<br />{filme.genero}</strong>
                                        </NomeFilme>
                                    </Link>
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
