import React from "react";
import * as S from "./styled";

export const Address = ({ street, number }) => {

    return (
        <S.ContainerAddress>
            <S.ContentAddress>
                <S.AddressDelivery>
                    Endereço de entrega
                </S.AddressDelivery>
                <S.AddressStreet>
                    {street}, {number}
                </S.AddressStreet>
            </S.ContentAddress>
        </S.ContainerAddress>
    )
}