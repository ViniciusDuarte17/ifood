import styled from "styled-components";
import { Button } from "@mui/material";

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: solid 1px green; */
`

export const ButtonIcon = styled(Button)`
position: fixed !important;
right: 80%;
`

export const FormControl = styled.form`
    width: 80%;
`