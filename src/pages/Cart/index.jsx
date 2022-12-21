import React, { useContext } from "react";
import * as Styled from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { Headers } from "../../components/Hearder";
import { Address } from "./Address";
import { MyCard } from "./Card";
import { FormPayment } from "./FormPayment";


export const CartPage = () => {
  useProtectedPage();
  const { cart, address } = useContext(GlobalStateContext);
  const { number, street } = address && address

  return (
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
          return <MyCard key={item.id} cart={item} />
        })}
      </div>
      <FormPayment cart={cart}/>

    </Styled.ContainerCard>
  )
}