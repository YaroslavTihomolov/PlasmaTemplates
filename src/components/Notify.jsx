import React from 'react';
import {Button} from "@salutejs/plasma-ui";
import {addNotification, NotificationsProvider} from '@salutejs/plasma-web';

export default class Notify {
    static showNotify = React.useCallback((name, count) => {
        addNotification({
            status: 'success',
            title: name + ' ' + count + 'x добавлен(ы) в корзину',
            children: '',
        }, 1000);
    }, []);
}
