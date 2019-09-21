import * as actionTypes from "./actionTypes";

const initalState = {
    products: [],
    cartProducts: [],
    variants: []
}

export default function (state = initalState, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCTS:
            state = {
                ...state,
                products: action.products
            };
            break;

        case actionTypes.ADD_TO_CART:
            state = {
                ...state,
                cartProducts: [...state.cartProducts, action.product]
            };
            break;

        case actionTypes.SEARCH_PRODUCTS:
            state = {
                ...state,
                products: action.products
            }
            break;

        case actionTypes.GET_ALL_VARIENTS:
            state = {
                ...state,
                variants: action.variants
            }
            break;

        default:
            return state;
    }

    return state
}