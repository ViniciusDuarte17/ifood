import React from 'react';
import * as Styled from './styled';

export const Headers = (props) => {
  return (
    <Styled.Container>
       <Styled.Title>{props.texto}</Styled.Title>
       {props.children}
    </Styled.Container>
  )
}
