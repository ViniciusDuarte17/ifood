import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    height: 18%;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin-top: 2%;
`

export const Content = styled.main`
    display: flex;
`

export const ContentImg = styled.div`
    width: 30%;
`

export const RestaurentItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`

export const SpanName = styled.span`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  padding: 0 8%;
  margin-top: 6%;
  color:#e8222e;
`

export const SpanDescription = styled.span`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  padding: 0 8%;
  color:#b8b8b8;
  margin-top: 3%;
`

export const SpanPrice = styled.span`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  padding: 0 8%;
  color:black;
  margin-top: 3%;
`

export const Rectangle = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 50%;
  margin-left: 50%;
  border-radius: 8px;
  border: solid 1px #000;
`
