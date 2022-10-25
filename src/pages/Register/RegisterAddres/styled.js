import styled from "styled-components";
import { Button } from "@mui/material";


export const ContainerFieldAddres = styled.div`
    width: 99.5vw;
    display: flex;
    flex-direction: column;
`

export const InputAddresContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3%;
  width: 95vw;
  justify-content: center;
  margin-bottom: 5vh;
`;

export const FormInput = styled.form`
    margin-bottom: 18%;
`

export const ButtonIcon = styled(Button)`
   position: fixed !important;
   right: 80%;
`

export const TexteSpan = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5%;
    span{
        color: black;
        font-size: larger;
    }
`