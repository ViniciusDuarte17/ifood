import React from "react";
import * as S from "./styled";

export const FormPayment = ({cart}) => {
    console.log('===>', cart)

    return (
        <>
            <S.Payment>
                <S.SpanTextFrete>Frete R$0,00</S.SpanTextFrete>
                <S.SubTotal>
                    <S.SpanTextTotal>SUBTOTAL</S.SpanTextTotal>
                    <S.SpanTextPrice>R$0,00</S.SpanTextPrice>
                </S.SubTotal>
                <S.SpanTextPayment>Forma de pagamento</S.SpanTextPayment>
            </S.Payment>
        </>
    )
}