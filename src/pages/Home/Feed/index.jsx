import * as Styled from "./styled";
import React, { useContext } from "react";
import { Headers } from "../../../components/Hearder";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment } from "@mui/material";
import { Slied } from "../../../components/Slied";
import { SwiperSlide } from "swiper/react";
import { Card } from "../../../components/Card";
import { ConfFooter } from "./ConfFooter";
import { GlobalStateContext } from "../../../Global/GlobalStateContext";
import { useState } from "react";


export const FeedPage = () => {
  useProtectedPage();
  const settings = {
    spaceBetween: 6,
    slidesPerView: 3
  }

  const [query, setQuery] = useState("");

  const updateQuery = (event) => {
    setQuery(event.target.value);
  };

  const { restaurants } = useContext(GlobalStateContext);

  const getCategory = restaurants.map((restaurant) => {
    return (
      <SwiperSlide>
        <Styled.Text> <Button color="secondary">{restaurant.category}</Button> </Styled.Text>
      </SwiperSlide>
    );
  })

  return (
    <Styled.ContainerFeed>
      <Headers texto={"Ifuture"} />
      <Styled.ContentTextField>
        <TextField
          fullWidth
          placeholder="Restaurante"
          value={query}
          onChange={updateQuery}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
      </Styled.ContentTextField>
      <Styled.Filter>
        <Slied settings={settings}>
          {getCategory}
        </Slied>
      </Styled.Filter>
      <Styled.ContentCard>
        {
          restaurants.length > 0 ?
            restaurants
              .filter(restaurant => restaurant.name.toLowerCase().includes(query.toLowerCase()))
              .map(restaurant => <Card key={restaurant.id} restaurant={restaurant} />)
            : <h1>Carregando</h1>
        }
      </Styled.ContentCard>
      <ConfFooter />
    </Styled.ContainerFeed>
  )
}