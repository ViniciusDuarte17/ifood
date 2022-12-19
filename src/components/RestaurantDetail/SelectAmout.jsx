import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";


export const SelectAmout = ({ amout, handleChange, restaurant, addItemToCart }) => {
    let MenuItems = [];
    
    for (let index = amout; index < 11; index++) {
        MenuItems.push(<MenuItem key={index} value={index}  onClick={ () => addItemToCart(restaurant, index )}>{index}</MenuItem>)
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Adicionar</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={amout}
                label="Adicionar"
                placeholder="Adicionar"
                onChange={handleChange}
            >
                {MenuItems}
            </Select>
        </FormControl>
    )
}