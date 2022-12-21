import styled from 'styled-components';


export const ContainerPayment = styled.div`
    width: 100%;
    padding-bottom: 10%;
`

export const Payment = styled.div`
    display: flex;
    flex-direction: column;
    width: 92%;
    height: 40%;
    border: solid 1px #000;
    border-top: none;
    border-left: none;
    border-right: none;
    margin: auto;
    margin-top: 15%;
`

export const SubTotal = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 4%;
    padding: 1%;
`

export const SpanTextTotal = styled.span`
     font-family: Roboto;
     font-size: 1.125rem;
     font-weight: normal;
     font-stretch: normal;
     font-style: normal;
     line-height: normal;
     letter-spacing: -0.39px;
     color: #000;
`
export const SpanTextPrice = styled.span`
    font-family: Roboto;
    font-size: 1.125rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.43px;
    text-align: right;
    color: #e8222e;
`

export const SpanTextFrete = styled.span`
     display: flex;
     flex-direction: row-reverse;
     font-family: Roboto;
     font-size: 1.125rem;
     font-weight: normal;
     font-stretch: normal;
     font-style: normal;
     line-height: normal;
     letter-spacing: -0.39px;
     color: #000;
`

export const SpanTextPayment = styled.span`
     margin: 8% 3% 3%;
     font-family: Roboto;
     font-size: 1.25rem;
     font-weight: normal;
     font-stretch: normal;
     font-style: normal;
     line-height: normal;
     letter-spacing: -0.39px;
     color: #000;
`

export const FormPaymentToValue = styled.div`
    margin-left: 5%;
`

export const ConfirmPayment = styled.div`
  width: 90%;
  height: 2.8rem;
  margin-bottom: 2rem;
`

export const PaymentButton = styled.button`
    border: none;
    background: ${(props) => props.background};
    color: ${ (props) => props.color};
    cursor: pointer;
    height: 100%;
    font-family: Roboto;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
`