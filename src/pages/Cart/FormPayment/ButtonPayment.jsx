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