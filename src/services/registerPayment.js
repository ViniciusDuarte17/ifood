import { alertClasses } from "@mui/material"
import axios from "axios"
import { headers, setHeader } from "../components/token"
import { BASE_URL } from "../constants/BASE_URL"



export const registerPayment = (restaurantId, body) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, headers)
    .then( (res) => {
        alert("Pedido confirmado com sucesso!")
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
}