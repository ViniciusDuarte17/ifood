import axios from "axios"
import { headers } from "../components/token"
import { BASE_URL } from "../constants/BASE_URL"



export const getRestaurantDetail = (id, setRestaurantDetail) => {

    axios
    .get(`${BASE_URL}/restaurants/${id}`, headers)
    .then( (res) => {
        setRestaurantDetail(res.data.restaurant.products)
    }).catch( (err) => {
        console.log(err, "caiu no catch")
    })
}