import axios from "axios";


export default class PostService {
    static async GetMainMenu() {
        const data = { key: "value" };
        return await axios.get("http://localhost:8080/restaurant", {params: data});
    }

    static async GetCategoryDishes(id) {
        const data = { key: "value" };
        console.log(id[1])
        return await axios.get(`http://localhost:8080/restaurant/category/${id[1]}`, {params: data});

    }
}
