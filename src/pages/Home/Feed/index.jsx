import * as Styled from "./styled";
import React from "react";
import { Headers } from "../../../components/Hearder";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";
import { Slied } from "../../../components/Slied";
import { SwiperSlide } from "swiper/react";


export const FeedPage = () => {
  useProtectedPage();

  const settings = {
    spaceBetween: 5,
    slidesPerView: 4
  }

  return (
    <>
      <Headers texto={"Ifuture"} />
      <TextField
        placeholder="Restaurante"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Styled.Filter>
        <Slied settings={settings}>
          <SwiperSlide>
            <Styled.Text>lanche</Styled.Text>
          </SwiperSlide>
        </Slied>
      </Styled.Filter>
    </>
  )
}