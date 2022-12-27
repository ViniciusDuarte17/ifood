import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import * as S from "../styled";
import { goToCart, goToFeed } from "../../../router/coordinator";


export const ConfFooter = () => {
    const navigate = useNavigate();
    return (
        <>
            <Footer>
                <S.ContentIcons>
                    <div>
                        <Button onClick={() => goToFeed(navigate)}>
                            <HomeIcon color="primary" fontSize="large" />
                        </Button>
                    </div>
                    <div>
                        <Button >
                            <ShoppingCartIcon onClick={() => goToCart(navigate)} color="primary" fontSize="large" />
                        </Button>
                    </div>
                    <div>
                        <Button>
                            <PersonIcon color="primary" fontSize="large" />
                        </Button>
                    </div>
                </S.ContentIcons>
            </Footer>
        </>
    )
}