import React from "react";
import * as S from "./styled";
import LogoClock from "../../../../assets/clock@2x.png";

export const OrdersActive = ({ isOrder }) => {
    const { restaurantName, totalPrice } = isOrder && isOrder;
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
                    <S.RestaurantName>
                        <span>{restaurantName}</span>
                    </S.RestaurantName>
                </S.Content>
                <S.SubSpan>
                    <span>
                        SUBTOTAL R${totalPrice.toFixed(2).toString().replace('.', ',')}
                    </span>
                </S.SubSpan>
            </S.ContentMain>
        </S.ContainerOrders>
    )
} 