import React from "react";
import * as S from "./styled";
import LogoClock from "../../../../assets/clock@2x.png";

export const OrdersActive = () => {

    return (
        <S.ContainerOrders>
            <S.Orders>
                <span>Pedido em andamento</span>
            </S.Orders>
            <S.ContentMain>
                <S.ClockDiv>
                    <S.ImgClock src={LogoClock} alt="logo de tempo" />
                </S.ClockDiv>
                <S.AdreesRestaurant>
                    <span>Bullguer Vila Madalena</span>
                </S.AdreesRestaurant>
            </S.ContentMain>
            <S.SubSpan><span>SUBTOTAL R$67,00</span></S.SubSpan>
        </S.ContainerOrders>
    )
} 