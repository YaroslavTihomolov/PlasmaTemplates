import MenuCategory from "./pages/MenuCategory";
import React from "react";
import Cart1 from "./pages/Cart1";
import PostService from "./API/PostService";

type Action =
    | {
    type: "open_page";
    page: string;
}
    | {
    type: "add_to_cart";
    title: string;
    count: number;
};

export const reducer = (action: Action) => {
    switch (action.type) {
        case "open_page":
            switch (action.page) {
                case "меню":
                    return (<MenuCategory/>)
                case "корзина":
                    return (<Cart1/>)
                default:
                    return null
            }
        case "add_to_cart":
            return PostService.AddDishToCart(null, action.title, 1, action.count)


    }
}