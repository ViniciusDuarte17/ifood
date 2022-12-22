import React from "react";
import * as S from "./styled";

export const ButtonPayment = (props) => {

    return (
         <S.PaymentButton
            variant= {props.variant}
            background={props.background}
            color={props.color}
            onClick={ props.paymentInformation}
        >
            Confirmar
        </S.PaymentButton> 
    )
}

// {cart.length === 0 ? <S.PaymentButton
//     variant="contained"
//     disabled
//     background={'rgba(232, 34, 46, 0.5)'}
//     color={'#000'}
// >
//     Confirmar
// </S.PaymentButton> : <S.PaymentButton
//     variant="contained"
//     background={'#e8222e'}
//     color={'#000'}
// >
//     Confirmar
// </S.PaymentButton>}