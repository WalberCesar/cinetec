import { ComponentProps, InputHTMLAttributes } from "react";
import { Container } from "./index.styles";
import { UseFormRegister } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    register: UseFormRegister<any>
    nameInput: string
}

export function Input({ nameInput, register, ...rest }: InputProps) {
    return (
        <Container {...rest} {...register(`${nameInput}`)} />
    )
}