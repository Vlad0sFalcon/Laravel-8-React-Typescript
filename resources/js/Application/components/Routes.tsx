import React from "react";
import { Route, Switch } from "react-router-dom";
import ItemList from "./ItemList";
import ProductList from "./ProductList";

const Routes: React.FC = (props) => {
    return (
        <Switch>
            <Route component={ItemList} path="/" exact />
            <Route component={ProductList} path="/products" />
        </Switch>
    )
}

export default Routes;