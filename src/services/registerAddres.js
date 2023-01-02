import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeed } from "../router/coordinator";
import { headers, setHeader } from "../components/token";

export const registerAddres = (body, clean, navigate, setIsLoading) => {
   
    (window.localStorage.getItem('token') && !headers.headers.auth) && setHeader()
    axios
        .put(`${BASE_URL}/address`, body, headers)
        .then((response) => {
            setHeader(response.data.token)
            window.localStorage.setItem('token', response.data.token)
            alert("Enderenço criado!")
            setIsLoading(false)
            clean()
            goToFeed(navigate)
            window.location.reload(false)
        })
        .catch((err) => {
            console.log(err)
            alert(err.response.data.message);
            clean();
        });
} 