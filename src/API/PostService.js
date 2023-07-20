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

    static async AddDishToCart(dish, tableId, count) {
        console.log(dish)
        console.log(tableId)
        return await axios.post(`http://localhost:8080/restaurant/order`, {
            dishId: dish.id,
            count: count,
            numberTable: tableId,
            price: dish.price * count,
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
