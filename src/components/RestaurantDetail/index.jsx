import { Button, CardMedia } from "@mui/material";
import React from "react";
import { useState } from "react";
import { SelectAmout } from "./SelectAmout";
import * as Styled from "./styled";

export const RestaurantDetail = ({ restaurant }) => {
  const { name, description, photoUrl, price } = restaurant;

  const [amout, setAmout] = useState(0)

  const handleChange = (e) => {
    setAmout(e.target.value)
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.ContentImg>
          <CardMedia
            component="img"
            height="100%"
            image={photoUrl}
            alt="Logo restaurante"
          />
        </Styled.ContentImg>
        <Styled.RestaurentItem>
          {amout !== 0 ? <Styled.RectangleNumber>
            <Styled.TextStyle>
              {amout}
            </Styled.TextStyle>
          </Styled.RectangleNumber> : null}
          <Styled.SpanName>{name}</Styled.SpanName>
          <Styled.SpanDescription>{description}</Styled.SpanDescription>
          <Styled.SpanPrice>R${price.toFixed(2).toString().replace('.', ',')}</Styled.SpanPrice>
          <Styled.Rectangle>
            {
              amout === 0 ? <SelectAmout amout={amout} handleChange={handleChange} />
                : <Styled.RectangleButton>
                  <Button onClick={() => setAmout(amout - 1)}>Remover</Button>
                </Styled.RectangleButton>
            }
          </Styled.Rectangle>
        </Styled.RestaurentItem>
      </Styled.Content>
    </Styled.Container>
  );
};