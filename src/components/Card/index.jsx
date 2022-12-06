import { CardMedia } from '@mui/material';
import React from 'react';
import * as Styled from "./styled";

export const Card = () => {

    return (
        <Styled.Container>
            <CardMedia
                component="img"
                height="194"
                image="https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Foutback.png?alt=media&token=6c3af525-e6f5-4f96-b5d5-a0ad6702a838"
                alt="Logo restaurante"
            />
            <Styled.Restaurant>
                Restaurante
            </Styled.Restaurant>
            <Styled.ContentTime>
                <div>
                    <span>50-60min</span>
                </div>
                <div>
                    <span>FreteR$6,00</span>
                </div>
            </Styled.ContentTime>
        </Styled.Container>
    )
}