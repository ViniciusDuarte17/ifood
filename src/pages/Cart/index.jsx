import React, { useContext } from "react";
import * as Styled from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { GlobalStateContext } from "../../Global/GlobalStateContext";

export const CartPage = () => {
  useProtectedPage();
  const { cart } = useContext(GlobalStateContext);

  console.log('tela de carrinho',cart)

  return (
    <Styled.ContainerCard >
    page do carrinho
    </Styled.ContainerCard>
  )
}