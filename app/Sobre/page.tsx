'use client'

import { Header } from "@/components/header";
import { CardNomes, CardMaior, Container, WrapperGrupoImagem, ImagemGrande, CardMissaoVisao } from "./page.styles";
import { Footer } from "@/components/Footer";
import Image from "next/image";

import ImageAir from '../../public/assets/filmesEmCartaz/air.png'
import Link from "next/link";
import ImagemSobre from "../../public/assets/cinemasobre.jpg"
import ImagemCinemaGrande from "../../public/assets/cinema_sala_cc.jpg"

export default function Sobre() {
    return (
        <Container>
            <Header />


            <main>

                <WrapperGrupoImagem>
                    <CardNomes>
                        <h1>Grupo Cinetec</h1>
                        <p>Rodrigo Bastos Amaral</p>
                        <p>Walber Cesar de Sousa Santos</p>
                    </CardNomes>

                    <Image alt="" src={ImagemSobre} />
                </WrapperGrupoImagem>

                <CardMaior>
                    <h1>Princípios</h1>

                    <div>
                        <h2>Foco no cliente</h2>
                        <p>Cuidamos para que do início ao fim haja um atendimento padronizado das interações, troca de
                            informações, entrega e suporte em geral.</p>
                    </div>
                    <div>
                        <h2>Engajamento</h2>sétima arte ao público,
                        <p>Não só os líderes são os responsáveis por seguir os princípios, mas também todos os colaboradores têm a responsabilidade de se engajar e devem seguir nossos princípios e requisitos.</p>
                    </div>
                    <div>
                        <h2>Melhoria contínua</h2>
                        <p>Com a abordagem de sistema e resultâncias, nós definimos e medimos resultados para ser possível melhorá-los.</p>
                    </div>
                    <div>
                        <h2>Determinação</h2>
                        <p>Inovação, participação, trabalho em equipe e responsabilidade.</p>
                    </div>



                </CardMaior>

                <CardMaior>
                    <h1>Valores</h1>

                    <div>
                        <h2>Atender bem para atender sempre</h2>
                        <p>Nosso foco sempre será a experiência do nosso cliente, para que ele se sinta em casa.</p>
                    </div>
                    <div>
                        <h2>Segurança</h2>
                        <p>Trabalhamos incessantemente para mitigar qualquer possível risco, seja ele físico ou virtual, tornando assim o nosso ambiente o mais seguro possível.</p>
                    </div>
                    <div>
                        <h2>Tecnologia</h2>
                        <p>Buscamos inserir as tecnologias mais inovadoras da atualidade para melhorar a imersão à nossa nobre arte.</p>
                    </div>
                </CardMaior>

                <ImagemGrande src={ImagemCinemaGrande} alt="" />

                <WrapperGrupoImagem>
                    <CardMissaoVisao>
                        <h1>Missão</h1>
                        <p>Nosso objetivo é transmitir a sétima arte ao público, representando todas as culturas de nossa sociedade, e democratizar seu acesso à todos.</p>

                    </CardMissaoVisao>

                    <CardMissaoVisao>
                        <h1>Visão</h1>
                        <p>Inspirar nosso público através da nossa dedicação e conscientização, criando uma forte base para o cinema nacional como um todo, e incentivar produtores independentes a terem mais espaço no Brasil e no mundo.</p>
                    </CardMissaoVisao>
                </WrapperGrupoImagem>

                <CardMaior>
                    <h1>Historico da empresa</h1>
                    <p>Fundada em 2023 em Mauá(SP), a Cinetec surgiu da ideia de seis amigos que desejavam disseminar a sétima arte de maneira simples e prática. Atualmente contando com duas salas de cinema, exibindo o que tem de melhor do cinema com comodidade, segurança e tecnologia.</p>
                </CardMaior>

            </main>

            <Footer />
        </Container>
    )
}