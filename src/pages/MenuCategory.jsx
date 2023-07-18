import React, {useEffect} from 'react';
import PostService from "../API/PostService";
import CategoriesGallery from "../components/CategoriesGallery";
import {CartButton, CartProvider, Header} from "@salutejs/plasma-temple";
import {Button} from "@salutejs/plasma-ui";
import {Container} from "@salutejs/plasma-ui/components/Grid";

function MenuCategory() {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        PostService.GetMainMenu().then((response) => {
            setItems(response.data)
        });
    }, []);

    return (
        <div className='wrapper'>
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
            <CategoriesGallery items={items}/>
        </div>
    );
};

export default MenuCategory;
