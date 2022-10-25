import React from "react";
import { Headers } from "../../../components/Hearder";
import { useUnprotectedPage } from "../../../hooks/useUnprotectedPage";
import { FieldRegister } from "./FieldRegister";


export const RegisterCleint = () => {
  useUnprotectedPage()
  return (
    <div >
      <Headers />
      <FieldRegister />
    </div>
  )
}