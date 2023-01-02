import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProfile } from "../../services/editProfile";
import { useForm } from "../../hooks/useForm";
import * as S from "./styled";
import { Button, CircularProgress, TextField } from "@mui/material";
import { MaskCpf } from "../../components/MaskCpf";

export const InputProfile = () => {
    const navigate = useNavigate();
    const { form, onChange, clean } = useForm({ name: "", email: "", cpf: "" });
    const [isLoading, setIsLoading] = useState(false);

    const onSubmitForm = (event) => {
        setIsLoading(true)
        event.preventDefault();
        editProfile(form, clean, navigate, setIsLoading);
    };
    return (
        <>
            <S.FormControl onSubmit={onSubmitForm}>
                <TextField
                    label="Nome"
                    name="name"
                    fullWidth
                    margin={"normal"}
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    margin={"normal"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <TextField
                    label="CPF"
                    name="cpf"
                    fullWidth
                    margin={"normal"}
                    value={ MaskCpf(form.cpf)}
                    onChange={onChange}
                    required
                />
                <Button
                    fullWidth
                    variant="contained"
                    color={"primary"}
                    margin={"normal"}
                    type={"submit"}
                    required
                >
                    {isLoading ? <CircularProgress color={"success"} size={28} /> : <span>Salvar</span>}
                </Button>
            </S.FormControl>
        </>

    )
}