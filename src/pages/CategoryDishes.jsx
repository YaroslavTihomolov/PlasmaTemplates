import React, {useEffect} from 'react';
import PostService from "../API/PostService";
import {DishesList} from "../components/DishesList";
import {useHistory, useLocation} from "react-router-dom";
import {Button, TextBox} from "@salutejs/plasma-ui";
import {IconCart} from "@salutejs/plasma-icons";
import {Header} from "@salutejs/plasma-temple";
import {Container} from "@salutejs/plasma-ui/components/Grid";

function CategoryDishes() {
    const router = useHistory()
    const [items, setItems] = React.useState([]);
    const location = useLocation();
    console.log(location)

    useEffect(() => {
        const regex = /\/(\d+)$/;
        PostService.GetCategoryDishes(router.location.pathname.match(regex)).then((response) => {
            setItems(response.data)
            console.log(response)
        });
    }, []);

    return (
        <div className="wrapper">
            <Container>
                <Header
                    logo='https://i.ibb.co/TcXZDMq/Group-154.png'
                    logoAlt="Rina"
                    title="Rina"
                    subtitle="&ensp;Цифровой официант"
                    minimize={false}
                >
                </Header>
            </Container>
            <Header back onBackClick={() => router.goBack()}>
                <Button size="s" view="clear" contentLeft={<IconCart/>} text="Корзина" onClick={() => router.replace("/restaurant/cart")}/>
            </Header>
            <h1>{location.state.data}</h1>
            <DishesList items={items}/>
        </div>
    );
}

export default CategoryDishes;