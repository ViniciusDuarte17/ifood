import React from "react";
import { useProtectedPage } from "../../../hooks/useProtectedPage";


export const RestaurantPage = () => {
  useProtectedPage();

  return (
    <div >
     feed page
    </div>
  )
}