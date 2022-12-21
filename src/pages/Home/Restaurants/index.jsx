import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { Headers } from "../../../components/Hearder";
import * as Styled from "./styled";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { goToBack } from "../../../router/coordinator";
import { RestaurantMain } from "./RestaurantMain";
import { RestaurantDetail } from "../../../components/RestaurantDetail";
import { getRestaurantDetail } from "../../../services/getRestaurantDetail";
import { GlobalStateContext } from "../../../Global/GlobalStateContext";

export const RestaurantPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const params = useParams();
  const [restaurantDetail, setRestaurantDetail] = useState([])
  const { cart, setCart } = useContext(GlobalStateContext);

  useEffect(() => {
    getRestaurantDetail(params.id, setRestaurantDetail)
  }, [])

  const { shipping, deliveryTime, address } = restaurantDetail && restaurantDetail;

  const addItemToCart = (newItem, amout) => {
    const item = { ...newItem, amout, deliveryTime, shipping, address }
    const newCart = [...cart, item]
    setCart(newCart)
  }

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
        <RestaurantMain restaurantDetail={restaurantDetail} />
        {
          restaurantDetail.products &&
          restaurantDetail.products.map((restaurant) => {
            return <RestaurantDetail key={restaurant.id} restaurant={restaurant} addItemToCart={addItemToCart}
            />
          })
        }
      </Styled.ContentMain>
    </div>
  )
}