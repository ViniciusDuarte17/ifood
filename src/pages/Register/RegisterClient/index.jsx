import React from "react";
import { Headers } from "../../../components/Hearder";
import * as S from "./styled";
import { useUnprotectedPage } from "../../../hooks/useUnprotectedPage";
import { FieldRegister } from "./FieldRegister";
import { goToBack } from "../../../router/coordinator";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const RegisterCleint = () => {
  useUnprotectedPage()
  const navigate = useNavigate()
  return (
    <div >
      <Headers>
      <S.ButtonIcon
        onClick={() => goToBack(navigate)}
        >
          <ChevronLeftIcon
          fontSize="large"
          color="primary"/>
       
        </S.ButtonIcon>
      </Headers>
      <FieldRegister />
    </div>
  )
}