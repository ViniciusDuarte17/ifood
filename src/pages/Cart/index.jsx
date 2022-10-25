import React from "react";
import * as Styled from "./styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const CartPage = () => {
  useProtectedPage();

  return (
    <Styled.ContainerCard >
    page do carrinho
    </Styled.ContainerCard>
  )
}