import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {
    AnyObject,
    CartPage,
    CartProvider, CartState,
    GalleryPage,
    GalleryPageState,
    ProductImage
} from "@salutejs/plasma-temple";
import {initialState} from "@salutejs/plasma-temple/dist/components/ScreensProvider/store/reducer";
import {CartItemCaptionType} from "@salutejs/plasma-temple/dist/components/Cart/types";
import ProductExample from "./ProductExample";

const App = () => {

    function action(changeState: string) {
        return function () {
        };
    }


    const getGalleryState = (): GalleryPageState<Record<string, any>> => {
        // Define and return your initial state object here
        return {
            activeGalleryIndex: 0,
            gallery: {
                activeCardIndex: 0,
                items: [
                    {
                        id: "1",
                        label: "Суши",
                        name: "Суши",
                        position: 1,
                        image: {
                            src: "https://pizza-sushi.com.ua/sites/default/files/styles/wm_style/public/content/blyudo/blyudo-preview-images/sushi-set-bingo-irpen-bucha-zakaz-dostavka-edy-pizzeria-rich-family_0.jpg?itok=7J2TwyA8/400"
                        },
                        poster: "",
                        rating: 4.5,
                        genre: "comedy"
                    },
                    {
                        id: "2",
                        label: "Супы",
                        name: "Супы",
                        position: 2,
                        image: {
                            src: "https://cdnn21.img.ria.ru/images/154954/20/1549542056_0:160:3072:1888_600x0_80_0_0_e0c4e5fc6b2de7b670e8b855a0ea0ff0.jpg"
                        },
                        poster: "",
                        rating: 5,
                        genre: "fantasy"
                    },
                    {
                        id: "3",
                        label: "Стейк",
                        name: "Стейк",
                        position: 3,
                        image: {
                            src: "https://ferma-m2.ru/images/shop/recipe_image/crop_apelsin.jpg"
                        },
                        poster: "",
                        rating: 5,
                        genre: "fantasy"
                    },
                    {
                        id: "4",
                        label: "Паста",
                        name: "Паста",
                        position: 4,
                        image: {
                            src: "https://e0.edimdoma.ru/data/posts/0002/1118/21118-ed4_wide.jpg?1652690573"
                        },
                        poster: "",
                        rating: 5,
                        genre: "fantasy"
                    },
                    {
                        id: "5",
                        label: "Пицца",
                        name: "Пицца",
                        position: 5,
                        image: {
                            src: "https://www.gastronom.ru/binfiles/images/20191113/bd570867.jpg"
                        },
                        poster: "",
                        rating: 5,
                        genre: "fantasy"
                    }
                ]
            }
        };
    };

    const getInitialState =(): {
        amount: number;
        quantity: number;
        currency: undefined;
        items: {
            quantity: any;
            nameDetails: any;
            price: any;
            oldPrice: any;
            quantityLimit: any;
            discount: any;
            caption: CartItemCaptionType;
            imageSrc: any;
            disabled: any;
            label: any;
            present: any;
            percentDiscount: any
        }[]
    } => {
        return {
            amount: 0,
            currency: undefined,
            items: [
                {
                    quantity: 5,
                    /** Цена товара */
                    price: 1_000,
                    /** Старая цена товара */
                    oldPrice: 900,
                    /** Скидка на товар. По умолчанию свойство в компоненте Cart не используется */
                    discount: '',
                    /** Скидка на товар в процентах. По умолчанию свойство в компоненте Cart не используется */
                    percentDiscount: '',
                    /** Используется как метка над именем товара при отображении в корзине */
                    label: "string";
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
                }
            ],
            quantity: 0

        }
    }

    return (
        <div>
            <CartProvider initialState={getInitialState()} onChangeCart={action('onChangeCart')}>
                <CartPage onMakeOrder={action('onMakeOrder')} header={{ title: 'Корзина' }}>
                    Текст про стоимость доставки, которая зависит от адреса или “заполняя эту форму...”
                </CartPage>
            </CartProvider>
            {/*<ProductExample/>*/}
            {/*<GalleryPage state={getGalleryState()} onCardClick={action('on card click')}
                         changeState={action('change state')}/>
            <ProductImage src='C:\Users\я\WebstormProjects\tsreact\src\img\Group 213 (1).svg'/>*/}
        </div>
    );
};

export default App;

/*<GalleryPage state={getGalleryState()} onCardClick={action('on card click')}
                         changeState={action('change state')}/>
            <ProductImage src='C:\Users\я\WebstormProjects\tsreact\src\img\Group 213 (1).svg'/>*/