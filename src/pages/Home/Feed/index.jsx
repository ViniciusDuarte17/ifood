import * as Styled from "./styled";
import React from "react";
import { Headers } from "../../../components/Hearder";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { Button, InputAdornment } from "@mui/material";
import { Slied } from "../../../components/Slied";
import { SwiperSlide } from "swiper/react";
import { Card } from "../../../components/Card";
import { Footer } from "../../../components/footer";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from "react-router-dom";
import { goToCart, goToProfile } from "../../../router/coordinator";


export const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();

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
        <Card />
        <Card />
        <Card />
        <Card />
      </Styled.ContentCard>
      <Footer>
        <Styled.ContentIcons>
          <div>
            <Button>
              <HomeIcon color="primary" fontSize="large" />
            </Button>
          </div>
          <div>
            <Button onClick={()=> goToCart(navigate)}>
              <ShoppingCartIcon color="primary" fontSize="large" />
            </Button>
          </div>
          <div>
            <Button onClick={() => goToProfile(navigate)}>
              <PersonIcon color="primary" fontSize="large" />
            </Button>
          </div>
        </Styled.ContentIcons>
      </Footer>
    </Styled.ContainerFeed>
  )
}