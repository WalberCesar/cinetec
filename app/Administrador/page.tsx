'use client'

import { Header } from "@/components/header";
import { FormularioAdm, Container, InputAdm, TextAreaSinopse, BotaoCadastrarAdm } from "./page.styles";
import { Footer } from "@/components/Footer";
import { Plus } from "phosphor-react";


export default function Administrador() {
    return (
        <Container>
            <Header />


            <main>
                <FormularioAdm >
                    <h1>Administrador</h1>
                    <div>
                        <p>Titulo do filme:</p>
                        <InputAdm />
                    </div>
                    <div>
                        <p>Gênero:</p>
                        <InputAdm />
                    </div>
                    <div>
                        <p>Duração:</p>
                        <InputAdm />
                    </div>
                    <div>
                        <p>Link do trailer:</p>
                        <InputAdm />
                    </div>
                    <div>
                        <p>Classificação:</p>
                        <InputAdm />
                    </div>
                    <div>
                        <p>Sinopse:</p>
                        <TextAreaSinopse />
                    </div>

                    <BotaoCadastrarAdm>
                        Adicionar
                        <Plus weight="bold" color="white" />
                    </BotaoCadastrarAdm>
                </FormularioAdm >
            </main>

            <Footer />
        </Container>
    )
}