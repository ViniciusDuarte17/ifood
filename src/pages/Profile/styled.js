import styled from "styled-components";


export const PerfilSpan = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5%;
    p {
    font-family: Roboto;
    font-size: 1rem;
    padding: 0.3rem;
    }
`;

export const ButtonUi = styled.button`
    margin-top: -3.6rem;
    border: none;
    background-color: white;
`;

export const EditAnddres = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 4.75rem;
    margin: 1rem 0;
    background-color: #eee;
    span {
        font-family: Roboto;
        font-size: 1rem;
        color: #b8b8b8;
        padding-left: 3.5%; 
    }

    div {
        display: flex;
        justify-content: space-between;
        padding:0 2.5% 2.5% 2.5%;
        p {
        font-family: Roboto;
        font-size: 1rem;
        padding-left: 1%; 
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        margin-top: 2%;
    }
    button {
        border: none;
    }
 }
  
`;

export const HistoricoPedido = styled.div`
  border: 1px solid black;
  border-top: none;
  border-left: none;
  border-right: none;
  margin: 2%;
  span {
    padding-left : 2%;
    font-family: Roboto;
    font-size: 1rem;
  }
`;

export const ProfileOrder = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 99%;
    margin-top: 4%;
`
export const ContentIcons = styled.div`
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 0 5%;
`