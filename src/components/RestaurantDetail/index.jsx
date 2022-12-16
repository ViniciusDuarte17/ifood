import { Button, CardMedia } from "@mui/material";
import React from "react";
import { useState } from "react";
import { SelectAmout } from "./SelectAmout";
import * as Styled from "./styled";

export const RestaurantDetail = (props) => {
  const { } = props;

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
            height="125"
            image={"https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de"}
            alt="Logo restaurante"
          />
        </Styled.ContentImg>
        <Styled.RestaurentItem>
          {amout !== 0 ? <Styled.RectangleNumber>
            <Styled.TextStyle>
              {amout}
            </Styled.TextStyle>
          </Styled.RectangleNumber> : null}
          <Styled.SpanName>Bullguer</Styled.SpanName>
          <Styled.SpanDescription>Pão,carne.queijo,piclesemolho.</Styled.SpanDescription>
          <Styled.SpanPrice>R$23,00</Styled.SpanPrice>
          <Styled.Rectangle>
          {
           amout === 0 ? <SelectAmout amout={amout} handleChange={handleChange}/>
           : <Button onClick={() => setAmout(amout - 1)}>Remover</Button>
          }
          </Styled.Rectangle>
        </Styled.RestaurentItem>
      </Styled.Content>
    </Styled.Container>
  );
};
