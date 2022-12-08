import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToRegisterEnddres } from "../router/coordinator";

export const registerClient = (body, clean, navigate) => {

    axios
        .post(`${BASE_URL}/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clean()
            goToRegisterEnddres(navigate)
        })
        .catch((err) => console.log(err));
}