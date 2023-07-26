import React, {useState} from 'react';
import {Grid, CardEntity} from '@salutejs/plasma-temple';
import {
    Button, CardBody,
    CardContent,
    CardMedia,
    Spinner,
    TextBox,
    TextBoxBiggerTitle,
    TextBoxSubTitle
} from "@salutejs/plasma-ui";
import '../index.css'
import {useHistory} from "react-router-dom";
import PostService from "../API/PostService";
import {Counter} from "./Counter";
import {addNotification, NotificationsProvider} from "@salutejs/plasma-web";

function GenerateItems(props: any) {
    return Array.from(
        {length: props.items.length},
        (_, index) =>
            ({
                id: index,
                title: props.items[index].title,
                description: props.items[index].description,
                image: {src: props.items[index].linkImage},
                badge: {type: 'accent'},
                price: props.items[index].price,
                weight: props.items[index].weight
            } as CardEntity<number>),
    )
}

export function DishesList(props: any) {
    const router = useHistory()

    const handleClick = React.useCallback((name: string, count: number) => {
        addNotification({
            status: 'success',
            title: name + ' ' + count + 'x добавлен(ы) в корзину',
            children: '',
        }, 3000);
    }, []);

    const [array, setArray] = useState(Array(12).fill(1));
    if (props.items.length === 0) {
        return (
            <div className="wrapper">
                <Spinner/>
            </div>
        )
    }

    const items = GenerateItems(props)


    return (
        <div>
            <Grid columnXL={4} columnM={4} columnS={4}>
                {items.map((item, index) => (
                    <CardBody
                        onClick={() => router.push({pathname: `dish/${item.id}`, state: {data: props.items[item.id]}})}>
                        <CardMedia
                            src={Array.isArray(item.image.src) ? item.image.src[0] : item.image.src}
                            ratio="1 / 1"
                            className="card"
                        />
                        <CardContent cover>
                            <TextBox>
                                <TextBoxBiggerTitle>{item.title}</TextBoxBiggerTitle>
                                <TextBoxSubTitle>{item.weight + ' грамм'}</TextBoxSubTitle>
                            </TextBox>
                            <Counter props={[array, setArray, index]}/>
                            <NotificationsProvider>
                                <Button
                                    text={'Добавить в корзину - ' + item.price * array[index] + ' ₽'}
                                    view="primary"
                                    size="s"
                                    scaleOnInteraction={true}
                                    outlined={false}
                                    stretch
                                    style={{marginTop: '1em'}}
                                    tabIndex={-1}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        PostService.AddDishToCart(props.items[item.id], null, 1, array[index])
                                        handleClick(item.title, array[index])
                                    }
                                    }
                                />
                            </NotificationsProvider>
                        </CardContent>
                    </CardBody>
                ))}
            </Grid>
        </div>
    );
}