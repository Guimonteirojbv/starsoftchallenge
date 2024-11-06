import { Middleware } from "@reduxjs/toolkit";

const localStorage:Middleware = (store) => (next) => (action) => {
    const result = next(action);

    const cartState = store.getState().cart;
    window.localStorage.setItem('cart', JSON.stringify(cartState));
  
    return result;
}

export default localStorage