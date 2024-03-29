import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { goToFeed, goToRegisterEnddres } from "../router/coordinator";


export const registerLogin = (body, navigate, setIsLoading) => {

    axios
        .post(`${BASE_URL}/login`, body)
        .then((res) => {
            const hasAddress = res?.data.user.hasAddress
            localStorage.setItem("token", res.data.token);
            setIsLoading(false)
            hasAddress ? goToFeed(navigate) : goToRegisterEnddres(navigate)
            window.location.reload(false)
        })
        .catch((err) => {
            console.log(err.response.data.message);
        });
} 
