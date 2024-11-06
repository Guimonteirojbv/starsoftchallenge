
import { ProductType } from '@/app/type/itemType';
import { createSlice } from '@reduxjs/toolkit';



interface IInitialState {
  qntd: number;
  items: ProductType[];
}

const initialState: IInitialState = {
  qntd: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity += 1; 
      
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); 
      }

     
      state.qntd = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    removeFromCart: (state, action) => { 
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1); 
      }

  
      state.qntd = state.items.reduce((total, item) => total + item.quantity, 0);
    },
    removeQntd: (state, action) => { 
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      const item = state.items[itemIndex];
    
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } 
      }
    
      // Atualiza a quantidade total
      state.qntd = state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { addToCart, removeFromCart, removeQntd } = cartSlice.actions;
export default cartSlice.reducer;