import React from "react";
import * as S from "./styled";
import LogoClock from "../../../../assets/clock@2x.png";

export const OrdersActive = () => {

    return (
        <S.ContainerOrders>
           <S.ContentMain>
           <S.Orders>
                <span>Pedido em andamento</span>
            </S.Orders>
            <S.Content>
                <S.ClockDiv>
                    <S.ImgClock src={LogoClock} alt="logo de tempo" />
                </S.ClockDiv>
                <S.AdreesRestaurant>
                    <span>Bullguer Vila Madalena</span>
                </S.AdreesRestaurant>
            </S.Content>
            <S.SubSpan><span>SUBTOTAL R$67,00</span></S.SubSpan>
           </S.ContentMain>
        </S.ContainerOrders>
    )
} 