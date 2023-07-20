import React from 'react';
import '../index.css'; // Подключение стилей для компонента

const CustomCartItem = ({ item }) => {
    const { id, name, price, quantity, imageSrc, caption } = item;

    return (
        <div className="custom-cart-item">
            <div className="cart-item-image">
                <img src={imageSrc} alt={name} />
            </div>
            <div className="cart-item-info">
                <div>{name}</div>
                <div className='item-price'>{price}₽</div>
            </div>
        </div>
    );
};

export default CustomCartItem;
