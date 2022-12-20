import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../constants/BASE_URL";
import { headers } from "../components/token"


export const GlobalState = (props) => {
  const [restaurants, setRestaurants] = useState([])
  const [cart, setCart] = useState([])

  const getRestaurant = () => {
    axios
    .get(`${BASE_URL}/restaurants`, headers)
    .then((res) => {
      setRestaurants(res.data.restaurants)
    })
    .catch(err => console.log(err))
  }

  useEffect( () => {
    getRestaurant()
  }, [])

const data = {
   restaurants,
   cart,
   setCart
}

    return (
        <GlobalStateContext.Provider value={data} >
        {props.children}
      </GlobalStateContext.Provider>
    )
}


