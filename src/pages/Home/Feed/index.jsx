import * as Styled from "./styled";
import React from "react";
import { Headers } from "../../../components/Hearder";
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { InputAdornment } from "@mui/material";


export const FeedPage = () => {
  useProtectedPage();

  return (
    <>
      <Headers texto={"Ifuture"} />
      <TextField
        placeholder="Restaurante"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
      <Styled.Filter>
        <span>
          Burger
        </span>
      </Styled.Filter>
    </>
  )
}