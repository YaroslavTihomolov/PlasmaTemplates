import axios from "axios";


export default class PostService {
    static async GetMainMenu() {
        const data = {key: "value"};
        return await axios.get("http://localhost:8080/restaurant", {params: data});
    }

    static async GetCategoryDishes(id) {
        const data = {key: "value"};
        console.log(id[1])
        return await axios.get(`http://localhost:8080/restaurant/category/${id[1]}`, {params: data});
    }

    static async AddDishToCart(dish, title, tableId, count) {
        console.log(dish)
        console.log(tableId)
        return await axios.post(`http://localhost:8080/restaurant/order`, {
            dishId: dish.id,
            title: title,
            count: count,
            numberTable: tableId,
            price: dish.price * count,
        });
    }

    static async ChangeDishCount(dishId, tableId, count) {
        console.log(dishId)
        console.log(tableId)
        return await axios.post(`http://localhost:8080/restaurant/order/change`, {
            dishId: dishId,
            count: count,
            numberTable: tableId,
        });
    }

    static async deleteDishCount(dishId, tableId) {
        console.log(dishId);
        console.log(tableId);
        try {
            const response = await axios.delete('http://localhost:8080/restaurant/cart', {
                data: {
                    dishId: dishId,
                    numberTable: tableId
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    static async payCheck(listOrderDto, tableId, cost) {
        console.log(listOrderDto)
        console.log(tableId)
        console.log(cost)
        return await axios.post(`http://localhost:8080/restaurant/cart/payment`, {
            listOrderDto: listOrderDto,
            numberTable: tableId,
            cost: cost
        });
    }

    static async GetCart(tableId) {
        const data = {key: "value"};
        console.log("tableId" + tableId)
        const value = await axios.get(`http://localhost:8080/restaurant/cart/1`, {params: data});
        console.log(value)
        return value
    }
}
