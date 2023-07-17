import React, {useEffect} from 'react';
import PostService from "../API/PostService";
import {DishesList} from "../components/DishesList";
import {useHistory} from "react-router-dom";
import {Button} from "@salutejs/plasma-ui";
import {IconCart} from "@salutejs/plasma-icons";
import {Header} from "@salutejs/plasma-temple";

function CategoryDishes() {
    const router = useHistory()
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        const regex = /\/(\d+)$/;
        PostService.GetCategoryDishes(router.location.pathname.match(regex)).then((response) => {
            setItems(response.data)
            console.log(response.data)
        });
    }, []);

    return (
        <div className="wrapper">
            <Header back>
                <Button size="s" view="clear" contentLeft={<IconCart onClick={() => console.log('1')} />} text="Корзина"/>
            </Header>
            <DishesList items={items}/>
        </div>
    );
}

export default CategoryDishes;