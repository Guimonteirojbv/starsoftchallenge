import { RootState } from "@/Redux/store";

export const selectTotal = (state: RootState) => {
    return state.cart.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };