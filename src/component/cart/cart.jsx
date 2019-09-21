import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../component/table/table";

export default () => {
    console.log("cart");
    let cartProducts = useSelector(state => state.productReducer.cartProducts);
    return (
        <Table tableHeaders={["name", "price", "image"]} tableData={cartProducts} />
    );
};