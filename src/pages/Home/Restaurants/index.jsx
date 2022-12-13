import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { Headers } from "../../../components/Hearder";
import * as Styled from "./styled";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { goToBack } from "../../../router/coordinator";
import { RestaurantMain } from "./RestaurantMain";



export const RestaurantPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const params = useParams()
  // console.log(params.id)

  return (
    <div>
      <Headers texto={"Restaurante"}>
        <Styled.ButtonIcon onClick={() => goToBack(navigate)}>
          <ChevronLeftIcon
            fontSize="large"
            color="secondary" />
        </Styled.ButtonIcon>
      </Headers>
      <Styled.ContentMain>
        <RestaurantMain />
      </Styled.ContentMain>
    </div>
  )
}