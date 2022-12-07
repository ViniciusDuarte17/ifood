import React from "react";
import * as Styled from "./styled";


export const Footer = (props) => {

    return (
        <Styled.ContainerFooter>
            {props.children}
        </Styled.ContainerFooter>
    )
}
