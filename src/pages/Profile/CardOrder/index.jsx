import * as React from "react";
import * as S from "./styled";

export function CardOrder({ history }) {

    const listOrders = history?.orders.map((item) => {
        const newData = item.createdAt
        const data = new Date(newData)
        const novaData = data.toLocaleString()
        return (
            <S.HorderList key={item.createdAt}>
                <h4>{item.restaurantName}</h4>
                <span> {novaData}</span>
                <p>SUBTOTAL: {item.totalPrice.toFixed(2).toString().replace('.', ',')}</p>
            </S.HorderList>
        );
    });

    return <S.ContainerHorder>{listOrders && listOrders}</S.ContainerHorder>;
}