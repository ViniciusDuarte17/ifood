import React from "react";
import * as Styled from "./styled";
import { Footer } from "../../../components/footer";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { goToCart, goToProfile } from "../../../router/coordinator";

export const ConfFooter = () => {
    const navigate = useNavigate();
    return(
        <>
          <Footer>
        <Styled.ContentIcons>
          <div>
            <Button>
              <HomeIcon color="primary" fontSize="large" />
            </Button>
          </div>
          <div>
            <Button onClick={() => goToCart(navigate)}>
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
        </>
    )
}