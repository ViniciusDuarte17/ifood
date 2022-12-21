import styled from 'styled-components';

export const ContainerCard = styled.div`
    width: 100%;
    min-height: 100%;
    div{
        display: flex;
        flex-direction: column;
    }
    h3 {
        opacity: 0.89;
        font-family: Roboto;
        font-size: 1.25rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        padding-bottom: 5%;
    }
`
export const ContentAddress = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 5%;
    margin-top: 5%;
`

export const ContainerAddress = styled.div`
    width: 100%;
    margin: 4% 0 1%;
    padding-bottom: 8%;
    background-color: #eee;
`

export const AddressDelivery = styled.span`
    color: #b8b8b8;
    font-family: Roboto;
    font-size: 1.2rem;
`

export const AddressStreet = styled.span`
   color: #000000;
   font-family: Roboto;
   font-size: 1.2rem;
`

export const InforAddres = styled.div`
   display: flex;
   flex-direction: column;
   margin-left: 5%;
   p {
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    color: #e8222e;
    margin: 1.5% 1%;
   }

   span {
    font-family: Roboto;
    font-size: 1.2rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    margin: 1.5% 1%;
    color: #b8b8b8;
   }
`