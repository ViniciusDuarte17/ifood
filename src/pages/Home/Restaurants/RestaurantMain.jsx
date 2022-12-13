import React from "react";
import { CardMedia } from "@mui/material";
import * as Styled from "./styled";

export const RestaurantMain = (props) => {
    // const {  } = props

    return (
        <>
            <Styled.RestaurantMain>
                <CardMedia
                    component="img"
                    height="194"
                    image={"https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de"}
                    alt="Logo restaurante"
                />
                <Styled.Content>
                    <Styled.TextRed> Bullguer Vila Madalena </Styled.TextRed>
                    <Styled.SpanText> Burger </Styled.SpanText>
                    <Styled.Description>
                        <Styled.SpanText>  50 - 60 min </Styled.SpanText>
                        <Styled.SpanText> Frete R$6,00 </Styled.SpanText>
                    </Styled.Description>
                    <div>
                        <Styled.SpanText> R. Fradique Coutinho, 1136 - Vila Madalena </Styled.SpanText>
                    </div>
                </Styled.Content>
            </Styled.RestaurantMain>
        </>
    )
}