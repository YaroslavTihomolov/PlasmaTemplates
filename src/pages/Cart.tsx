import React, {useEffect, useState} from 'react';
import {
    CartProvider, CartState,
    CartItemType,
    CartPage
} from "@salutejs/plasma-temple";
import {Container} from '@salutejs/plasma-ui/components/Grid';
import PostService from "../API/PostService";

function GenerateItems(props: any) {
    return Array.from(
        {length: props.items.length},
        (_, index) =>
            ({
                id: props[index].id,
                name: props[index].title,
                price: props[index].price,
                quantity: 1,
                quantityLimit: 99,
                imageSrc: props[index].linkImage,
            } as CartItemType),
    )
}

const Cart = (props: any) => {
    const [value, setValue] = useState()

    useEffect(() => {
        console.log(1)
        PostService.GetCart(1).then((response) => {
            console.log(response)
            setValue(response.data)
        })
    }, []);

    function action(changeState: string) {
        return function () {
        };
    }


    const items: CartItemType[] = [
        {
            id: '1',
            name: 'Молоко Parmalat ультрапастеризованное длинное название',
            price: 68,
            oldPrice: 99,
            quantity: 99,
            quantityLimit: 99,
            imageSrc: 'images/img.png',
            caption: {
                type: 'present',
                content: 'Общее количество: ' + 99,
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
        <div className='cart'>
            <Container>
                <CartProvider initialState={initialState} onChangeCart={action('onChangeCart')}>
                    <CartPage onMakeOrder={action('onMakeOrder')} header={{title: 'Корзина'}}>
                        Заполняя эту форму вы соглашаетесь с условиями политики сервиса
                    </CartPage>
                </CartProvider>
            </Container>
            <h3 className='cart-phrase'>
                Количество к оплате:
            </h3>
        </div>
    );
};

export default Cart;
