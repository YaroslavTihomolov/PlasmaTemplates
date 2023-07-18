import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import ProductExample from "../components/ProductExample";
import PostService from "../API/PostService";

export function DishInfo(props) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const location = useLocation();
    const data = location.state?.data;
    return (
        <ProductExample props={data}/>
    )
}