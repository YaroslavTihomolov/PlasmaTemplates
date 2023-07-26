import React, {useState} from 'react';
import {Header, ProductEntity} from "@salutejs/plasma-temple";
import {ProductCommon} from "@salutejs/plasma-temple/dist/components/Product/Product@common";
import {useHistory} from "react-router-dom";
import {Button} from "@salutejs/plasma-ui";
import {IconCart} from "@salutejs/plasma-icons";
import {Counter} from "./Counter";
import PostService from "../API/PostService";
import {addNotification, NotificationsProvider} from "@salutejs/plasma-web";

const ProductExample = (props: any) => {
    const router = useHistory()
    const [array, setArray] = useState(Array(1).fill(1));

    const handleClick = React.useCallback((name: string, count: number) => {
        addNotification({
            status: 'success',
            title: name + ' ' + count + 'x добавлен(ы) в корзину',
            children: '',
        }, 3000);
    }, []);

    const product: ProductEntity<unknown> = {
        id: props.props.id,
        name: props.props.title,
        description: {
            title: 'Масса',
            content: props.props.weight + ' грамм',
        },
        price: props.props.price * array[0],
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
            <Header back onBackClick={() => router.goBack()}>
                <Button size="s" view="clear" contentLeft={<IconCart/>} text="Корзина" onClick={() => router.replace("/restaurant/cart")}/>
            </Header>
            <div className="content">
                <div className="product-container">
                    <NotificationsProvider>
                        <ProductCommon
                            actionButtonProps={{
                                actionButtonText: 'Добавить в корзину',
                                onClick: () => {
                                    PostService.AddDishToCart(props.props, 1, array[0])
                                    handleClick(props.props.title, array[0])
                                },
                                autoFocus: true,
                                className: 'small-button',
                            }}
                            variations={variations}
                            onChangeVariation={onChangeVariation}
                            recommendations={{ title: 'Похожие товары', items: [] }}
                            onClickRecommendation={action('onClickRecommendations')}
                            product={product}
                        />
                    </NotificationsProvider>
                </div>
                <div className='counter'>
                    <Counter props={[array, setArray, 0]}/>
                </div>
                <div className="image-container">
                    <img src={props.props.linkImage} alt={''} width={600} style={{ borderRadius: '10px' }} />
                </div>
            </div>
        </div>

    );
};

export default ProductExample;