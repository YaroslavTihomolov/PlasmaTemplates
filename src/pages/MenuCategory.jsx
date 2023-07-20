import React, {useEffect} from 'react';
import PostService from "../API/PostService";
import CategoriesGallery from "../components/CategoriesGallery";

function MenuCategory() {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        PostService.GetMainMenu().then((response) => {
            setItems(response.data)
        });
    }, []);

    return (
        <CategoriesGallery items={items}/>
    );
};

export default MenuCategory;
