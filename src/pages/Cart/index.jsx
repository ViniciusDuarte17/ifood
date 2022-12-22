import React, { useContext } from "react";
import * as Styled from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Headers } from "../../components/Hearder";
import { Address } from "./Address";
import { MyCard } from "./Card";
import { FormPayment } from "./FormPayment";
import { FooterCart } from "./FooterCart";

export const CartPage = () => {
  useProtectedPage();
  const { cart, restaurantAddress, setCart } = useContext(GlobalStateContext);
  const { number, street } = restaurantAddress && restaurantAddress

  const removeCart = (removeItem) => {
    const index = cart.findIndex((i) => i.id === removeItem.id)
    const newCart = [...cart]
    
    if (newCart[index].amout === 1) {
      newCart.splice(index, 1)
    } else {
      newCart[index].amout -= 1
    }
    setCart(newCart)
  }

  return (
    <>
      <Styled.ContainerCard >
        <Headers texto="Meu carrinho" />
        <Address street={street} number={number} />
        {cart.length !== 0 ? <Styled.InforAddres>
          <p>Bullguer Vila Madalena</p>
          <span> {cart[0].address} Madalena</span>
          <span>{cart[0].deliveryTime - 10} - {cart[0].deliveryTime} min</span>
        </Styled.InforAddres> : <h3>carrinho vazio</h3>}
        <div>
          {cart && cart.map((item) => {
            return <MyCard key={item.id} carts={item} removeCart={removeCart} />
          })}
        </div>
        <FormPayment cart={cart} />
      </Styled.ContainerCard>
      <FooterCart />
    </>
  )
}