import {
    ADD_PRODUCT_TO_BASKET_SUCCESS,
    REMOVE_PRODUCT_FROM_BASKET_SUCCESS,
    USER_AUTH_SUCCESS,
    USER_CREATED_SUCCESS,
    LOGOUT_SUCCESS,
} from '../actions/action-types';

export function addProductToBasketSuccess(newProductEvent, key) {
    return {
        type: ADD_PRODUCT_TO_BASKET_SUCCESS,
        newProductEvent,
        key
    };
}

export function removeProductFromBasketSuccess(key, productEvent) {
    return {
        type: REMOVE_PRODUCT_FROM_BASKET_SUCCESS,
        key,
        productEvent,
    };
}

export function userFetchSuccess(user) {
    return {
        type: USER_AUTH_SUCCESS,
        user
    };
}

export function createUserSuccess(user) {
    return {
        type: USER_CREATED_SUCCESS,
        user
    };
}

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS,
    };
}
