import React from 'react';
import { IconSber } from '@salutejs/plasma-icons';
import {Button} from "@salutejs/plasma-ui";
import {useHistory} from "react-router-dom";

function Pay(){
    const router = useHistory()
    return (
        <div>
            <div>
                <IconSber size="s" color="inherit" />
                <h2>Заказ успешно оплачен</h2>
            </div>
            <Button onClick={() => router.replace("/restaurant/cart")}>Вернуться в корзину</Button>
        </div>
    )
}

export default Pay;