import React from "react";
import { CardMedia } from "@mui/material";
import * as Styled from "./styled";


export const RestaurantMain = ({ restaurantDetail }) => {
    const { name, logoUrl, shipping, deliveryTime, address } = restaurantDetail && restaurantDetail;

    return (
        <>
            <Styled.RestaurantMain>
                <CardMedia
                    component="img"
                    height="194"
                    image={logoUrl}
                    alt="Logo restaurante"
                />
                <Styled.Content>
                    <Styled.TextRed> Bullguer Vila Madalena </Styled.TextRed>
                    <Styled.SpanText> {name} </Styled.SpanText>
                    <Styled.Description>
                        <Styled.SpanText> {deliveryTime - 10} - {deliveryTime} min </Styled.SpanText>
                        <Styled.SpanText> Frete R${shipping},00 </Styled.SpanText>
                    </Styled.Description>
                    <Styled.SpanText> {address} </Styled.SpanText>
                    <Styled.Principais>
                        <Styled.PrincipaisCopy>Principais</Styled.PrincipaisCopy>
                    </Styled.Principais>
                </Styled.Content>
            </Styled.RestaurantMain>
        </>
    )
}