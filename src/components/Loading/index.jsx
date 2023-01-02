import { LoadingContainer } from "./styled";
import {CircularProgress} from "@mui/material";


export const Loading = ({size}) => {
    return(
        <LoadingContainer>
          <CircularProgress color={"primary"} size={size}/>
        </LoadingContainer>
    )
}