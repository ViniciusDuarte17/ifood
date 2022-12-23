import { alertClasses } from "@mui/material"
import axios from "axios"
import { headers, setHeader } from "../components/token"
import { BASE_URL } from "../constants/BASE_URL"
import { goToFeed } from "../router/coordinator"



export const registerPayment = (restaurantId, body, navigate) => {
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, headers)
    .then( (res) => {
        alert("Pedido confirmado com sucesso!")
        goToFeed(navigate)
        window.location.reload(false)
    })
    .catch((error) => {
        alert(error.response.data.message)
    })
}