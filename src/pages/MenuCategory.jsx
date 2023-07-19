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
        <div className='wrapper'>
            <CategoriesGallery items={items}/>
        </div>
    );
};

export default MenuCategory;
