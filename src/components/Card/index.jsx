import { CardMedia } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { goToRestaurantPage } from '../../router/coordinator';
import * as Styled from "./styled";

export const Card = ( {restaurant}) => {
    const navigate = useNavigate();
  
    return (
        <Styled.Container onClick={()=> goToRestaurantPage(navigate, restaurant.id)}>
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