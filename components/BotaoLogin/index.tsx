import { type } from "os";
import { Container } from "./index.styles";
import { ComponentProps } from "react";

type BotaoProps = ComponentProps<typeof Container>

export function Botao({ ...rest }: BotaoProps) {
    return (
        <Container {...rest}>

        </Container>
    )
}