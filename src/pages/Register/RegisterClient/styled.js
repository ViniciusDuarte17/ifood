import styled from "styled-components";
import { Button } from "@mui/material";


export const ContainerFieldRegister = styled.div`
    width: 99.5vw;
    display: flex;
    flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95vw;
  justify-content: center;
  margin-left: 3%;
  margin-bottom: 5vh;
`;

export const FormInputClient = styled.form`
    margin-bottom: 40%;
    span{
        color: black;
        font-size: larger;
    }
`

export const PositionLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`

export const TexteStyled = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
    span{
        color: black;
        font-size: larger;
    }
    
`

export const ButtonIcon = styled(Button)`
   position: fixed !important;
   right: 80%;
`