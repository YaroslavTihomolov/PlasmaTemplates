import React from 'react';
import {
    AnyObject,
    CartPage,
    CartProvider, CartState,
    ProductImage,
    CartButton,
    Header
} from "@salutejs/plasma-temple";

import { Button } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import {CartItemCaptionType} from "@salutejs/plasma-temple/dist/components/Cart/types";

const Cart = () => {

    function action(changeState: string) {
        return function () {
        };
    }

    interface Entity<ID = string> {
        name: string;
        id: ID;
    }

    type CartItemType<ID = unknown, T extends AnyObject = AnyObject> = Entity<ID> & T & {
        /** Количество товара в корзине */
        quantity: number;

        /** Цена товара */
        price: number;

        /** Старая цена товара */
        oldPrice?: number;

        /** Скидка на товар. По умолчанию свойство в компоненте Cart не используется */
        discount?: number;

        /** Скидка на товар в процентах. По умолчанию свойство в компоненте Cart не используется */
        percentDiscount?: number;

        /** Используется как метка над именем товара при отображении в корзине */
        label?: string;

        /**
         * Используется как подпись позиции товара для указания дополнительной информации,
         * например скидки, изменении цены
         */
        caption?: CartItemCaptionType;

        /**
         * Используется как дополнительная информация о товаре, обычно для
         * указания веса, объема, размера
         */
        nameDetails?: string;

        /** Ссылка на изоражение товара */
        imageSrc?: string;

        /** Флаг, указывающий на то, что товар идет в подарок */
        present?: boolean;

        /** Максимальное количество товара, которое возможно добавить в корзину */
        quantityLimit?: number;

        /**
         * Флаг указывающий на недоступность товара для покупки,
         * в данном случае товар можно только удалить из корзины
         */
        disabled?: boolean;
    };


    const items: CartItemType[] = [
        {
            id: '1',
            label: 'Продукты',
            name: 'Молоко Parmalat ультрапастеризованное длинное название',
            nameDetails: '1л',
            price: 68,
            oldPrice: 99,
            quantity: 99,
            quantityLimit: 99,
            imageSrc: 'images/img.png',
            caption: {
                type: 'sale',
                content: '31',
            },
        },
        {
            id: '2',
            name: 'CCC 3x3x3 Sail W',
            price: 68,
            quantity: 2,
            imageSrc: 'images/img.png',
        },
        {
            id: '3',
            name: 'Молоко Parmalat',
            nameDetails: '925мл',
            price: 68,
            quantity: 2,
        },
        {
            id: '4',
            label: 'Cubic',
            name: 'CCC 3x3x3 Sail W',
            price: 68,
            quantity: 2,
            imageSrc: 'images/img.png',
            present: true,
            caption: {
                type: 'present',
            },
        },
        {
            id: '5',
            name: 'Молоко Parmalat ультрапастеризованное',
            price: 68,
            quantity: 2,
            imageSrc: 'https://media.komus.ru/medias/sys_master/root/h40/hbe/11731957547038/268165-1-800Wx800H.jpg',
            quantityLimit: 1,
            caption: {
                type: 'warning',
                content: 'Товара недостаточно',
            },
        },
        {
            id: '6',
            name: 'CCC 3x3x3 Sail W',
            price: 68,
            quantity: 2,
            imageSrc: 'images/img.png',
            disabled: true,
            caption: {
                type: 'sold-out',
            },
        },
        {
            id: '7',
            name: 'CCC 4x4x4 Cubic W',
            price: 68,
            quantity: 2,
            imageSrc: 'images/img.png',
        },
    ];

    const initialState: CartState = {
        items,
        currency: 'rub',
        quantity: 109,
        amount: 7412,
    };


    return (
        <div className="wrapper">
            <div>

                <Container>
                    <Header
                        logo='https://i.ibb.co/TcXZDMq/Group-154.png'
                        logoAlt="Rina"
                        title="Rina"
                        subtitle="&ensp;Цифровой официант"
                    >
                        <Button>Меню</Button>

                    </Header>
                </Container>


                <Container>
                    <CartProvider initialState={initialState} onChangeCart={action('onChangeCart')}>
                        <CartPage onMakeOrder={action('onMakeOrder')} header={{ title: 'Корзина' }}>
                            Заполняя эту форму вы соглашаетесь с условиями политики сервиса
                        </CartPage>
                    </CartProvider>
                </Container>

                <ProductImage src='C:\Users\я\WebstormProjects\tsreact\src\img\Group 213 (1).svg'/>

            </div>
        </div>

    );
};

export default Cart;
