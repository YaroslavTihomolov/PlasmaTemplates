import React from 'react';
import {
    Cart,
    CartItemType, CartOrder,
    CartProvider,
    CartState,
    EmptyCart
} from '@salutejs/plasma-temple';
import {useHistory} from "react-router-dom";
import {Container} from "@salutejs/plasma-ui/components/Grid";
import CartLine from "./CartLine";

export function Cart2(props: { items: any[] }) {
    console.log(props.items)

    const route = useHistory()

    const items = Array.from(
        {length: 2},
        (_, index) =>
            ({
                id: props.items[index].id,
                name: props.items[index].title,
                price: props.items[index].price,
                quantity: props.items[index].count,
                imageSrc: props.items[index].linkImage,
            } as CartItemType),
    )

    const initialState: CartState = {
        items,
        currency: 'rub',
        quantity: 109,
        amount: 7412,
    };

    const orderData = {
        amount: 10,
    };

    return (
        <div className='cart'>
            <Container>
                <CartProvider>
                    <Cart onCheckout={() => {
                    }}
                          emptyCart={<EmptyCart imageSrc="/images/img.png" onGoToCatalog={() => {
                          }}/>}
                    />
                    <CartLine item={items[0]}/>
                    <CartLine item={items[1]}/>

                    <CartOrder onCheckout={() => {
                    }} order={orderData}/>
                </CartProvider>
            </Container>
        </div>
    );
}