import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import Table from "../../component/table/table";
import Variants from "../../component/variants/variants"
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getAllProductsAction, addToCartAction, getAllVerient } from "../../store/product/action";


export default function () {
    const products = useSelector(state => state.productReducer.products);
    const variants = useSelector(state => state.productReducer.variants);
    const cart = useSelector(state => state.productReducer.cartProducts);
    const dispatch = useDispatch();

    async function getProducts() {
        dispatch(await getAllProductsAction());
    }
    async function getVarient(id) {
        dispatch(await getAllVerient(id));
    }

    useEffect(() => {
        getProducts();
        return function () {
            console.log("unmounted")
        };
    }, [cart]);

    const header = ["Name", "Id", "brand", "department", "Image"];

    return (
        <div>
            <Button outlined="bordered">
                <NavLink to="/dashboard/cart" style={{ textDecoration: "none" }}>
                    SHOPING CART
                </NavLink>
            </Button>
            <Table
                tableHeaders={header}
                tableData={createData(products, dispatch)}
                getVarient={getVarient}
            // deleteRow={this.deleteRow}
            />
            <h1>Variants</h1>
            {variants.length > 0 && <Variants variants={variants} />}
        </div>
    )

}

const createData = (data, dispatch) => {
    return data.map(e => {
        return {
            ...e,
            ...{
                action: (
                    <button onClick={() => dispatch(addToCartAction(e))}>
                        {" "}
                        add to cart{" "}
                    </button>
                )
            }
        };
    });
}