import { Button } from "@mui/material";
import React from "react";
import { Headers } from "../../../components/Hearder";
import { FieldAddres } from "./FieldAddres";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { goToBack } from "../../../router/coordinator";
import { useNavigate } from "react-router-dom";
import * as Styled from "./styled";
import { useProtectedPage } from "../../../hooks/useProtectedPage";

export const RegisrerAddres = () => {
  useProtectedPage();
  const navigate = useNavigate()

  return (
    <div >
      <Headers>
        <Styled.ButtonIcon
        onClick={() => goToBack(navigate)}
        >
          <ChevronLeftIcon
          fontSize="large"
          color="primary"/>
       
        </Styled.ButtonIcon>
      
      </Headers>
      <FieldAddres />
    </div>
  )
}