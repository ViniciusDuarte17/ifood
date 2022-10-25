import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";


export const ProfilePage = () => {
  useProtectedPage();

  return (
    <div >
     PROFILE PAGE
    </div>
  )
}