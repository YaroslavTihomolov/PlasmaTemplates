import React from 'react';
import {Header, ProductEntity} from "@salutejs/plasma-temple";
import {ProductCommon} from "@salutejs/plasma-temple/dist/components/Product/Product@common";
import {useHistory, useLocation} from "react-router-dom";

const ProductExample = (props: any) => {
    const router = useHistory()

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
        <div className="wrapper">
            <Header back onBackClick={() => router.goBack()}/>
            <div className="content">
                <ProductCommon
                    actionButtonProps={{
                        actionButtonText: 'Добавить в корзину',
                        onClick: action('onActionButtonClick'),
                        autoFocus: true,
                        className: 'small-button',
                    }}
                    variations={variations}
                    onChangeVariation={onChangeVariation}
                    recommendations={{ title: 'Похожие товары', items: [] }}
                    onClickRecommendation={action('onClickRecommendations')}
                    product={product}
                />
                <div className="image-container">
                    <img src={props.props.linkImage} alt={''} width={600} style={{ borderRadius: '10px' }} />
                </div>
            </div>
        </div>

    );
};

export default ProductExample;