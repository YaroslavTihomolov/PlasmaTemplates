import React, {useEffect} from 'react';
import PostService from "../API/PostService";
import CategoriesGallery from "../components/CategoriesGallery";

function MenuCategory() {
    const [items, setItems] = React.useState([]);

    useEffect(() => {
        PostService.GetMainMenu().then((response) => {
            setItems(response.data)
        });
    }, []);

    return (
        <div className='wrapper'>
            {/*<CartProvider initialState={getInitialState()} onChangeCart={action('onChangeCart')}>
                <CartPage onMakeOrder={action('onMakeOrder')} header={{ title: 'Корзина' }}>
                    Текст про стоимость доставки, которая зависит от адреса или “заполняя эту форму...”
                </CartPage>
            </CartProvider>*/}

            {/*<ProductExample/>*/}
            <CategoriesGallery items={items}/>
        </div>
    );
};

export default MenuCategory;

/*const getInitialState =(): {
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
                    /!** Цена товара *!/
                    price: 1_000,
                    /!** Старая цена товара *!/
                    oldPrice: 900,
                    /!** Скидка на товар. По умолчанию свойство в компоненте Cart не используется *!/
                    discount: '',
                    /!** Скидка на товар в процентах. По умолчанию свойство в компоненте Cart не используется *!/
                    percentDiscount: '',
                    /!** Используется как метка над именем товара при отображении в корзине *!/
                    label: "string",
                    /!**
                     * Используется как подпись позиции товара для указания дополнительной информации,
                     * например скидки, изменении цены
                     *!/
                    caption: ,
                    /!**
                     * Используется как дополнительная информация о товаре, обычно для
                     * указания веса, объема, размера
                     *!/
                    nameDetails: "string";
                    /!** Ссылка на изоражение товара *!/
                    imageSrc: 'https://pizza-sushi.com.ua/sites/default/files/styles/wm_style/public/content/blyudo/blyudo-preview-images/sushi-set-bingo-irpen-bucha-zakaz-dostavka-edy-pizzeria-rich-family_0.jpg?itok=7J2TwyA8/400';
                    /!** Флаг, указывающий на то, что товар идет в подарок *!/
                    present?: boolean;
                    /!** Максимальное количество товара, которое возможно добавить в корзину *!/
                    quantityLimit?: number;
                    /!**
                     * Флаг указывающий на недоступность товара для покупки,
                     * в данном случае товар можно только удалить из корзины
                     *!/
                    disabled?: boolean;
                }
            ],
            quantity: 0

        }
    }*/