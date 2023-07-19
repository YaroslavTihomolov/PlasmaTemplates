import React from 'react';
import {Route, Switch} from "react-router-dom";
import MenuCategory from "../pages/MenuCategory";
import CategoryDishes from "../pages/CategoryDishes";
import {DishInfo} from "../pages/DishInfo";
import Cart from "../pages/Cart";
import SelfCart from "../pages/Cart";

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/restaurant">
                <MenuCategory/>
            </Route>
            <Route exact path="/restaurant/category/:id">
                <CategoryDishes/>
            </Route>
            <Route exact path="/restaurant/category/dish/:id">
                <DishInfo/>
            </Route>
            <Route exact path="/restaurant/cart">
                <SelfCart/>
            </Route>
        </Switch>
    );
};

export default AppRouter;