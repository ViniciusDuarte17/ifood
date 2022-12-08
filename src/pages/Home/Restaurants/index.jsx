import React from "react";
import { useParams } from "react-router-dom";
import { useProtectedPage } from "../../../hooks/useProtectedPage";


export const RestaurantPage = () => {
  useProtectedPage();
  const params = useParams()
  console.log(params.id)

  return (
    <div >
     detalhe do restaurante
    </div>
  )
}