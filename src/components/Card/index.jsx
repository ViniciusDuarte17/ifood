import { CardMedia } from '@mui/material';
import React from 'react';
import * as Styled from "./styled";

export const Card = ( {restaurant}) => {

    return (
        <Styled.Container>
            <CardMedia
                component="img"
                height="194"
                image={restaurant.logoUrl}
                alt="Logo restaurante"
            />
            <Styled.Restaurant>
                {restaurant.name}
            </Styled.Restaurant>
            <Styled.ContentTime>
                <div>
                    <span>{restaurant.deliveryTime - 10}-{restaurant.deliveryTime}min</span>
                </div>
                <div>
                    <span>Frete R${restaurant.shipping},00</span>
                </div>
            </Styled.ContentTime>
        </Styled.Container>
    )
}