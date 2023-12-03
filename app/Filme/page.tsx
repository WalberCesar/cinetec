'use client'

import { Header } from "@/components/header";
import { Container, Wrapper } from "./page.styles";
import { Footer } from "@/components/Footer";
import Image from "next/image";

import ImageAir from '../../public/assets/filmesEmCartaz/air.png'
import Link from "next/link";
import ImagemClassificacaoLivre from "../../public/assets/classificacao/livre.png"

export default function Filme() {
    return (
        <Container>
            <Header />


            <main>
                <Wrapper>

                </Wrapper>
            </main>

            <Footer />
        </Container>
    )
}