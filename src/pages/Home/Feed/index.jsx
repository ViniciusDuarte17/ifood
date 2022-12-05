import React from "react";
import { Headers } from "../../../components/Hearder";
import {useProtectedPage} from "../../../hooks/useProtectedPage";

export const FeedPage = () => {
  useProtectedPage();

  return (
    <div>
      <Headers texto={"Ifuture"}/>
    </div>
  )
}