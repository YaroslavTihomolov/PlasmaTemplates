import React from 'react';
import {GalleryPage} from "@salutejs/plasma-temple";
import {useHistory} from "react-router-dom";
import {Spinner} from "@salutejs/plasma-ui";
import urljoin from 'url-join';


const CategoriesGallery = (props) => {
    const router = useHistory()

    if (props.items.length === 0) {
        return (
            <div className="wrapper">
                <Spinner/>
            </div>
        )
    }

    function action() {
        return function () {
        };
    }

    function getGalleryState() {
        const items = [];
        for (let i = 0; i < props.items.length; i++) {
            const item = {
                id: props.items[i].id.toString(),
                label: props.items[i].title,
                name: props.items[i].title,
                position: i + 1,
                image: {src: props.items[i].linkImage},
                poster: "",
                rating: '',
                genre: "fantasy"
            };

            items.push(item);
        }

        return {
            activeGalleryIndex: 0,
            gallery: {
                activeCardIndex: 0,
                items: items
            }
        };
    }

    const onCardClick = (index) => {
        const newPath = urljoin('/restaurant/category', index.id);
        router.replace({
            pathname: newPath,
            state: { data: index.name }
        });
    };

    return (
        <>
            <h1>Категории:</h1>
            <GalleryPage
                state={getGalleryState()}
                onCardClick={(index) => onCardClick(index)}
                changeState={action('change state')}
            />
        </>
    );
};

export default CategoriesGallery;