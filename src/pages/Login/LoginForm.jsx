import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import React, { useState } from "react";
import { LogoFood } from "../../components/LogoFood";
import * as Styled from "./styled";
import { useForm } from "../../hooks/useForm";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { registerLogin } from "../../services/registerLogin";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false); 
    const { form, onChange } = useForm({email: '', password: ''})


    const onSubmitForm = (event) => {
        event.preventDefault();
        registerLogin(form, navigate)
      };

  return (
    <Styled.ContainerLogin >

     <Styled.LoginPositionLogo>
     <LogoFood />
     </Styled.LoginPositionLogo>

     <Styled.TexteStyledLogin>
       <span> Entrar </span>
     </Styled.TexteStyledLogin>    

     <Styled.InputLoginContainer>

        <Styled.FormInputLogin onSubmit={onSubmitForm}>

        <TextField
          label={"E-mail"}
          type={"email"}
          value={form.email}
          onChange={onChange}
          name={"email"}
          margin="normal"
          fullWidth
          required
        />
       <FormControl margin="normal" fullWidth >
            <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              name="password"
              placeholder="Minimo 6 caracteres"
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

        <Button
         fullWidth
         variant="contained"
         color={"primary"}
         margin={"normal"}
         type={"submit"}
        >
           <span>Entrar</span>
        </Button>

        </Styled.FormInputLogin>

     </Styled.InputLoginContainer>

    </Styled.ContainerLogin>
  )
}