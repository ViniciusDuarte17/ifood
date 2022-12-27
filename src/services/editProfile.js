import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { headers } from "../components/token"
import { goToProfile } from "../router/coordinator";


export const editProfile = (body, clean, navigate) => {
  axios
    .put(`${BASE_URL}/profile`, body, headers)
    .then(() => {
      alert("usuário editado com sucesso!");
      clean();
      goToProfile(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
