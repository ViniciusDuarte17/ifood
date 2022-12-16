import { CardMedia } from "@mui/material";
import React from "react";
import * as Styled from "./styled";

export const RestaurantDetail = (props) => {
  const {} = props;

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.ContentImg>
        <CardMedia
          component="img"
          height="194"
          image={"https://firebasestorage.googleapis.com/v0/b/missao-newton.appspot.com/o/futureFoodsRestaurants%2Fhabibs.jpg?alt=media&token=a30ea547-3a3b-4e80-b58e-b8dc976697de"}
          alt="Logo restaurante"
        />
        </Styled.ContentImg>
        <div>
            <p>Bullguer</p>
        </div>
      </Styled.Content>
    </Styled.Container>
  );
};
