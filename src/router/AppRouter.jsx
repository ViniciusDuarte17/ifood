import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FeedPage } from "../pages/Home/Feed";
import { CartPage } from "../pages/Cart";
import {LoginPage} from "../pages/Login";
import {RegisterCleint} from "../pages/Register/RegisterClient";
import { RegisrerAddres } from "../pages/Register/RegisterAddres";
import { ProfilePage } from "../pages/Profile";
import { RestaurantPage } from "../pages/Home/Restaurants";

export const AppRouter = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FeedPage />} />
                <Route path='/restaurante/:id' element={ <RestaurantPage /> } />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterCleint />} />
                <Route path="/registro/enderenco" element={<RegisrerAddres />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}