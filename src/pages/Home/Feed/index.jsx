import * as Styled from "./styled";
import React from "react";
import { Headers } from "../../../components/Hearder";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import { Slied } from "../../../components/Slied";
import { SwiperSlide } from "swiper/react";
import { Card } from "../../../components/Card";
import { CongFooter } from "./ConfFooter";


export const FeedPage = () => {
  useProtectedPage();

  const settings = {
    spaceBetween: 5,
    slidesPerView: 4
  }

  return (
    <Styled.ContainerFeed>
      <Headers texto={"Ifuture"} />
      <Styled.ContentTextField>
        <TextField
          fullWidth
          placeholder="Restaurante"
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
          <SwiperSlide>
            <Styled.Text>lanche</Styled.Text>
          </SwiperSlide>
        </Slied>
      </Styled.Filter>
      <Styled.ContentCard>
        <Card />
      </Styled.ContentCard>
      <CongFooter />
    </Styled.ContainerFeed>
  )
}