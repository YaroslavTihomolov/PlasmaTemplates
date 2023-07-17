import React from 'react';
import {useLocation} from "react-router-dom";
import ProductExample from "../components/ProductExample";

export function DishInfo(props) {
    const location = useLocation();
    const data = location.state?.data;
    return (
        <ProductExample props={data}/>
    )
}