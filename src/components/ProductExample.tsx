import React from 'react';
import {Button} from "@salutejs/plasma-ui";
import {Header, Product, ProductEntity} from "@salutejs/plasma-temple";
import {IconCart} from "@salutejs/plasma-icons";

const App = (props:any) => {
    const product: ProductEntity<unknown> = {
        id: 1,
        name: "Product Name",
        nameDetails: "string",
        shortDescription: "string",
        description: {
            title: 'string',
            content: 'string',
        },
        price: 10,
        oldPrice: 20,
        currency: "rub",
        images: ['https://pizza-sushi.com.ua/sites/default/files/styles/wm_style/public/content/blyudo/blyudo-preview-images/sushi-set-bingo-irpen-bucha-zakaz-dostavka-edy-pizzeria-rich-family_0.jpg?itok=7J2TwyA8/400',
            'https://cdnn21.img.ria.ru/images/154954/20/1549542056_0:160:3072:1888_600x0_80_0_0_e0c4e5fc6b2de7b670e8b855a0ea0ff0.jpg'],
        shortDetails: [],
        details: {
            title: 'Food',
            values: [{
                name: "string",
                value: "10",
            }],
        },
    };

    const [variations, setVariations] = React.useState([
        {
            id: 'color',
            name: 'Цвет',
            variations: [' пластик', 'Черный', 'Белый', 'Серый'],
            activeIndex: 0,
        },
        {
            id: 'size',
            name: 'Размер',
            variations: ['S', 'M', 'L', 'XXL'],
            activeIndex: 0,
        },
    ]);

    const onChangeVariation = (id: unknown, activeIndex: number) => {
        const index = variations.findIndex((variation) => id === variation.id);

        if (index > -1) {
            setVariations([
                ...variations.slice(0, index),
                {...variations[index], activeIndex},
                ...variations.slice(index + 1),
            ]);
        }
    };

    function action(onActionButtonClick: string) {
        return function () {
        };
    }

    return (
        <>
            <Header back>
                <Button size="s" view="clear" contentLeft={<IconCart/>} text="Корзина"/>
            </Header>
            <Product
                actionButtonProps={{
                    actionButtonText: 'Добавить в корзину',
                    onClick: action('onActionButtonClick'),
                    autoFocus: true,
                }}
                variations={variations}
                onChangeVariation={onChangeVariation}
                recommendations={{title: 'Похожие товары', items: []}}
                onClickRecommendation={action('onClickRecommendations')}
                product={product}
            />
        </>
    );
};

export default App;