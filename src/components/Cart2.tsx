import React, {useEffect, useState} from 'react';
import {
    CardEntity,
    Cart,
    CartOrder,
    CartProvider,
    EmptyCart
} from '@salutejs/plasma-temple';
import {useHistory} from "react-router-dom";
import {Container} from "@salutejs/plasma-ui/components/Grid";
import CartLine from "./CartLine";
import PostService from "../API/PostService";
import {AnyObject} from "@salutejs/plasma-temple/dist/types";
import {Spinner} from "@salutejs/plasma-ui";

export function Cart2(props: { items: any, data: any[], setData: any }) {
    console.log(props.items)

    const [data, setData] = React.useState<any[]>((props.items == null) ? [] : props.items.listOrderDto);
    const route = useHistory()
    console.log(data)
    const [counterValues, setCounterValues] = useState<number[]>(Array(100).fill(0))
    const [checkSum, setCheckSum] = useState<number>(0)

    useEffect(() => {
        function countCheckSum() {
            let sum = 0
            console.log(data)
            data.map((item, index) => (
                console.log(data[index]),
                sum += data.length === 0 ? 0 : counterValues[index] * item.dishDto.price
            ))
            return sum
        }
        if (data.length !== 0) {
            setCheckSum(countCheckSum())
        }
    }, [data, counterValues])

    if (data.length !== 0  && counterValues.length === 100) {
        const countBuffer = data.map((item) => item.count);
        console.log(countBuffer)
        setCounterValues([...countBuffer]);
    }

    console.log(counterValues)

    React.useEffect(() => {
        if (props.items != null) {
            setData(props.items.listOrderDto);
        }
    }, [props.items]);

    if (props.items == null) {
        return (
            <div className="wrapper">
                <Spinner/>
            </div>
        )
    }

    /*const initialState: CartState = {
        items,
        currency: 'rub',
        quantity: 109,
        amount: 7412,
    };*/


    const orderData = {
        amount: checkSum,
    };

    type DishDto = {
        dishId: number,
        count: number
    }

    function generateDishDto() {
        return Array.from(
            {length: data.length},
            (_, index) =>
                ({
                    dishId: data[index].dishId,
                    count: counterValues[index],
                    numberTable: 1
                } as DishDto),
        )
    }

    return (
        <div className='cart-data'>
            <Container>
                <CartProvider>
                    <Cart onCheckout={() => {
                    }}
                          emptyCart={<EmptyCart imageSrc="/images/img.png" onGoToCatalog={() => {
                          }}/>}
                    />
                    {data.map((item, index) => (
                        <>
                            <CartLine item={item}
                                      counterValues={counterValues}
                                      index={index}
                                      setCounterValues={setCounterValues}
                            />
                        </>
                        ))}
                    {/*<CartLine item={items[0]}/>*/}
                    {/*<CartLine item={data[0]}/>*/}
                    <CartOrder
                        onCheckout={
                        () => {route.push("/restaurant/cart/pay");
                                    PostService.payCheck(generateDishDto(), 1, checkSum)}}
                        order={orderData}/>
                </CartProvider>
            </Container>
        </div>
    );
}