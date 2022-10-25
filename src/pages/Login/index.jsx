import React from "react";
import { LoginForm } from "./LoginForm";
import * as Styled from "./styled";
import { Button } from "@mui/material";
import { goToRegisterClient } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginPage = () => {
  useUnprotectedPage()
  const navigate = useNavigate();

  return (
    <div >
      <LoginForm />

      <Styled.RegisterButonn>
      <Button
      color="secondary"
      fullWidth
      onClick={() => goToRegisterClient(navigate)}
      >
        <span>Não possui cadastro? Clique aqui.</span>
      </Button>
      </Styled.RegisterButonn>
    </div>
  )
}