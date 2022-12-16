import styled from "styled-components";
import { Button } from "@mui/material";

export const ButtonIcon = styled(Button)`
   position: fixed !important;
   right: 80%;
`

export const ContentMain = styled.main`
   display: flex;
   flex-direction: column;
   width: 100%;
`

export const RestaurantMain = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: auto;
   width: 90%;
`

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`

export const Description = styled.div`
   display: flex;
   width: 70%;
   justify-content: space-between;
   margin-top: 2%;
   margin-bottom: 2%;
`

export const TextRed = styled.p`
  font-family: Roboto;
  font-size: 1.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #e8222e;
`

export const SpanText = styled.span`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #b8b8b8;
`

export const Principais = styled.div`
   border: solid 2px black;
   border-top: none;
   border-right: none;
   border-left: none;
   margin-top: 5%;
`

export const PrincipaisCopy = styled.span`
  font-family: Roboto;
  font-size: 1.2rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  margin-left: 1%;
  color: #000000;
`