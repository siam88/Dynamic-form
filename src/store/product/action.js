import * as actionTypes from "./actionTypes";
import axios from "axios";
import React, { useState, useEffect } from "react";

export const getAllProductsAction = async () => {
    let products = await axios
        .get("http://localhost:3000/api/product")
        .then(res => res.data)
        .catch(err => console.log(err.message));

    return { type: actionTypes.GET_ALL_PRODUCTS, products: products }
}
export const addToCartAction = product => {
    return {
        type: actionTypes.ADD_TO_CART,
        product: product
    };
};
export const getAllVerient = async id => {
    let variants = await axios
        .get("http://localhost:3000/api/variant/" + id)
        .then(res => res.data)
        .catch(err => console.log(err.message));
    return { type: actionTypes.GET_ALL_VARIENTS, variants: variants.variants };
};
