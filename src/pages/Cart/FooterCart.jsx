import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { goToFeed, goToProfile } from "../../router/coordinator";
import * as S from "./styled";

export const FooterCart = () => {
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
                            <ShoppingCartIcon color="primary" fontSize="large" />
                        </Button>
                    </div>
                    <div>
                        <Button onClick={() => goToProfile(navigate)}>
                            <PersonIcon color="primary" fontSize="large" />
                        </Button>
                    </div>
                </S.ContentIcons>
            </Footer>
        </>
    )
}