import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { Headers } from "../../../components/Hearder";
import * as Styled from "./styled";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { goToBack } from "../../../router/coordinator";
import { RestaurantMain } from "./RestaurantMain";
import { RestaurantDetail } from "../../../components/RestaurantDetail";
import { getRestaurantDetail } from "../../../services/getRestaurantDetail";

export const RestaurantPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const params = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState([])

  useEffect( () => {
    getRestaurantDetail(params.id, setRestaurantDetail)
  }, [])
  

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
        <RestaurantMain id={params.id} />
        {
          restaurantDetail &&
          restaurantDetail.map((restaurant) => {
            return <RestaurantDetail key={restaurant.id} restaurant={restaurant}/>
          })
        }
      </Styled.ContentMain>
    </div>
  )
}