import { Button, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import * as S from "./styled";

export const FormPayment = ({ cart }) => {
    const [formPaymentValue, setFormPaymentValue] = useState('');

    const handleChange = (event) => {
        setFormPaymentValue(event.target.value);
    };
    // console.log('===>', cart)

    return (
        <S.ContainerPayment>
            <S.Payment>
                <S.SpanTextFrete>Frete R$0,00</S.SpanTextFrete>
                <S.SubTotal>
                    <S.SpanTextTotal>SUBTOTAL</S.SpanTextTotal>
                    <S.SpanTextPrice>R$0,00</S.SpanTextPrice>
                </S.SubTotal>
                <S.SpanTextPayment>Forma de pagamento</S.SpanTextPayment>
            </S.Payment>
            <S.FormPaymentToValue>
                <RadioGroup
                    value={formPaymentValue}
                    onChange={handleChange}
                >
                    <FormControlLabel value="Dinheiro" control={<Radio />} label="Dinheiro" />
                    <FormControlLabel value="Cartão de crédito" control={<Radio />} label="Cartão de crédito" />
                </RadioGroup>
                <S.ConfirmPayment>
                    {cart.length === 0 ? <S.PaymentButton
                        variant="contained"
                        disabled
                        background={'rgba(232, 34, 46, 0.5)'}
                        color={'#000'}
                    >
                        Confirmar
                    </S.PaymentButton> : <S.PaymentButton
                        variant="contained"
                        background={'#e8222e'}
                        color={'#000'}
                    >
                        Confirmar
                    </S.PaymentButton>}
                </S.ConfirmPayment>
            </S.FormPaymentToValue>
        </S.ContainerPayment>
    )
}