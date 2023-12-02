import { ComponentProps } from "react";
import { Container } from "./index.styles";

type InputProps = ComponentProps<typeof Container>

export function Input({ ...rest }: InputProps) {
    return (
        <Container {...rest} />
    )
}