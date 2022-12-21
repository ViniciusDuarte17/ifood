import { Button, CardMedia } from '@mui/material';
import React, { useContext } from 'react';
import * as Styled from "./styled";

export const MyCard = ({ carts, removeCart }) => {
    const { name, description, photoUrl, price, amout } = carts;

    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.ContentImg>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={photoUrl}
                        alt={"logo " + name}
                    />
                </Styled.ContentImg>
                <Styled.RestaurentItem>
                    <Styled.RectangleNumber>
                        <Styled.TextStyle>
                            {amout}
                        </Styled.TextStyle>
                    </Styled.RectangleNumber>
                    <Styled.SpanName>{name}</Styled.SpanName>
                    <Styled.SpanDescription>{description}</Styled.SpanDescription>
                    <Styled.SpanPrice>R${price.toFixed(2).toString().replace('.', ',')}</Styled.SpanPrice>
                    <Styled.Rectangle >
                        <Styled.RectangleButton >
                            <Button onClick={() => removeCart(carts)}>Remover</Button>
                        </Styled.RectangleButton>
                    </Styled.Rectangle>
                </Styled.RestaurentItem>
            </Styled.Content>
        </Styled.Container>
    );
}