import { Button, TextField } from "@mui/material";
import React from "react";
import * as Styled from "./styled";
import { useForm } from "../../../hooks/useForm";
import { registerAddres } from "../../../services/registerAddres";
import { useNavigate } from "react-router-dom";


export const FieldAddres = () => {

  const navigate = useNavigate()
  const { form, onChange, clean } = useForm({
    street: '',
    number: '',
    neighbourhood: '',
    city: '',
    state: '',
    complement: ''
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    registerAddres(form, clean, navigate)
  };

  return (
    <Styled.ContainerFieldAddres >
      <Styled.TexteSpan>
        <span>Meu enderenço</span>
      </Styled.TexteSpan>

      <Styled.InputAddresContainer>

        <Styled.FormInput onSubmit={onSubmitForm}>
          <TextField
            name="street"
            value={form.street}
            onChange={onChange}
            margin={"normal"}
            label={"Rua / Av."}
            placeholder={"Rua / Av."}
            fullWidth
            required
          />
          <TextField
            name="number"
            value={form.number}
            onChange={onChange}
            margin={"normal"}
            label={"Número"}
            placeholder={"Número"}
            fullWidth
            required
          />
          <TextField
            name="complement"
            value={form.complement}
            onChange={onChange}
            margin={"normal"}
            label={"Complemento"}
            placeholder={"Complemento"}
            fullWidth
            required
          />
          <TextField
            name="neighbourhood"
            value={form.neighbourhood}
            onChange={onChange}
            margin={"normal"}
            label={"Bairro"}
            placeholder={"Bairro"}
            fullWidth
            required
          />
          <TextField
            name="city"
            value={form.city}
            onChange={onChange}
            margin={"normal"}
            label={"Cidade"}
            placeholder={"Cidade"}
            fullWidth
            required
          />

          <TextField
            name="state"
            value={form.state}
            onChange={onChange}
            margin={"normal"}
            label={"Estado"}
            placeholder={"Estado"}
            fullWidth
            required
          />

          <Button
            fullWidth
            variant="contained"
            color={"primary"}
            margin={"normal"}
            type={"submit"}
          >
            salvar
          </Button>

        </Styled.FormInput>

      </Styled.InputAddresContainer>
    </Styled.ContainerFieldAddres>
  )
}