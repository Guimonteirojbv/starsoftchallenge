import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/products';
import cartReducer from './reducers/cart'; 
import localStorage from '@/middleware/localStorage';
import loadPersistedState from '@/middleware/loadPersistedState';




const initialCartState = loadPersistedState(); 


const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartReducer,
  },
  preloadedState: {
    cart: initialCartState
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorage)
});




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



export default store;