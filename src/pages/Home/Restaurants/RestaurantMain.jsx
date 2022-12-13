import React, { useContext } from "react";
import { CardMedia } from "@mui/material";
import * as Styled from "./styled";
import { GlobalStateContext } from "../../../Global/GlobalStateContext";

export const RestaurantMain = ({ id }) => {
    const { restaurants } = useContext(GlobalStateContext);

    const restaurant = restaurants
        .filter(rest => rest.id === id)
        .map(rest => rest)

    return (
        <>
            <Styled.RestaurantMain>
                <CardMedia
                    component="img"
                    height="194"
                    image={restaurant[0].logoUrl}
                    alt="Logo restaurante"
                />
                <Styled.Content>
                    <Styled.TextRed> Bullguer Vila Madalena </Styled.TextRed>
                    <Styled.SpanText> {restaurant[0].name} </Styled.SpanText>
                    <Styled.Description>
                        <Styled.SpanText> {restaurant[0].deliveryTime - 10} - {restaurant[0].deliveryTime} min </Styled.SpanText>
                        <Styled.SpanText> Frete R${restaurant[0].shipping},00 </Styled.SpanText>
                    </Styled.Description>
                    <Styled.SpanText> {restaurant[0].address} </Styled.SpanText>
                    <Styled.Principais>
                        <Styled.PrincipaisCopy>Principais</Styled.PrincipaisCopy>
                    </Styled.Principais>
                </Styled.Content>
            </Styled.RestaurantMain>
        </>
    )
}