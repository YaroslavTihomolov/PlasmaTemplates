import React from 'react';
import {Button} from "@salutejs/plasma-ui";
import {Header, Product, ProductEntity} from "@salutejs/plasma-temple";
import {IconCart} from "@salutejs/plasma-icons";
import {ProductCommon} from "@salutejs/plasma-temple/dist/components/Product/Product@common";

const ProductExample = (props:any) => {
    const product: ProductEntity<unknown> = {
        id: props.props.id,
        name: props.props.title,
        description: {
            title: 'Масса',
            content: props.props.weight + ' грамм',
        },
        price: props.props.price,
        currency: "rub",
        images: [],
        shortDetails: [],
        details: {
            title: 'Описание',
            values: [{
                name: props.props.description,
            }],
        },
    };

    const [variations, setVariations] = React.useState([
        {
            id: 'size',
            name: 'Размер',
            variations: ['20см', '25см', '30см', '40см'],
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
        <div className="product-wrapper">
            <Header back>
                <Button size="s" view="clear" contentLeft={<IconCart/>} text="Корзина" onClick={() => console.log(2)}/>
            </Header>
            <ProductCommon
                actionButtonProps={{
                    actionButtonText: 'Добавить в корзину',
                    onClick: action('onActionButtonClick'),
                    autoFocus: true,
                    className: 'small-button',
                }}
                variations={variations}
                onChangeVariation={onChangeVariation}
                recommendations={{title: 'Похожие товары', items: []}}
                onClickRecommendation={action('onClickRecommendations')}
                product={product}
                defaultImage={props.props.linkImage}
                className={'product-image'}
            />
        </div>
    );
};

export default ProductExample;