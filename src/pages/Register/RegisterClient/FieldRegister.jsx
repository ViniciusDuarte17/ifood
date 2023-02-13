import { Button, CircularProgress, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import { LogoFood } from "../../../components/LogoFood";
import * as Styled from "./styled";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { registerClient } from "../../../services/registerCliente";
import { MaskCpf } from "../../../components/MaskCpf";



export const FieldRegister = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [toshowPassword, setToShowPassword] = useState(false);
  const [confirmPassword, setConfimPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { form, onChange, clean } = useForm({
    name: '',
    email: '',
    cpf: '',
    password: ''
  })

  const onSubmitForm = (event) => {
    event.preventDefault();
    setIsLoading(true)
    registerClient(form, clean, navigate, setIsLoading);
  };

  return (
    <Styled.ContainerFieldRegister>

      <Styled.PositionLogo>
        <LogoFood />
      </Styled.PositionLogo>
      <Styled.TexteStyled>
        <span>Cadastrar</span>
      </Styled.TexteStyled>
      <Styled.InputContainer>

        <Styled.FormInputClient onSubmit={onSubmitForm}>
          <TextField
            name="name"
            value={form.name}
            onChange={onChange}
            margin={"normal"}
            fullWidth
            color={"primary"}
            label="Nome"
            placeholder="Nome e sobrenome"
            required
          />
          <TextField
            name="email"
            type={"email"}
            value={form.email}
            onChange={onChange}
            margin={"normal"}
            fullWidth
            color={"primary"}
            label="E-mail"
            placeholder="email@email.com"
            required
          />
          <TextField
            name="cpf"
            value={MaskCpf(form.cpf)}
            onChange={onChange}
            margin={"normal"}
            fullWidth
            color={"primary"}
            label="Cpf"
            placeholder="000.000.000-00"
            required
          />

          <FormControl  margin={"normal"} fullWidth >
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              name="password"
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              fullWidth
              onChange={onChange}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControl margin={"normal"} fullWidth >
            <InputLabel htmlFor="outlined-adornment-password">confirm password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={toshowPassword ? 'text' : 'password'}
              value={confirmPassword}
              fullWidth
              required
              onChange={(e) => setConfimPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setToShowPassword(!toshowPassword)}
                    edge="end"
                  >
                    {toshowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm password"
            />
          </FormControl>
          
          <Button
            fullWidth
            variant="contained"
            color={"primary"}
            margin={"normal"}
            type={"submit"}
          >
            {isLoading ? <CircularProgress color={"inherit"} size={28} /> : <span>Criar</span> }
          </Button>

        </Styled.FormInputClient>
      </Styled.InputContainer>
    </Styled.ContainerFieldRegister>
  )
}