import { ProductType } from "@/app/type/itemType";
import { createSlice,createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


interface ProductsState {
    products: ProductType[]
    loading: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    page: number;
    
}

const initialState: ProductsState=  {
    products: [],
    loading: false,
    status: 'idle',
    error: null,
    page: 1,
    
}

export const fetchData = createAsyncThunk('data/fetchData', async (page: number) => {
    const response = await fetch(`https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=${20}`);
    return response.json();
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<ProductType[]>) => {
          state.products = action.payload;
        },
        addProducts: (state, action: PayloadAction<ProductType[]>) => {
          
          state.products.push(...action.payload);
        
        },
        incrementPage: (state) => {
          state.page += 1;
        },
    }
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(fetchData.pending, (state) => {
    //         state.status = 'loading'
    //     })
    //     .addCase(fetchData.fulfilled, (state, action) => {
    //         state.status = 'succeeded';
    //         state.page = state.page + 1 
    //         if(Array.isArray(action.payload.data)) {
    //             state.products.push(...action.payload.data);
    //         }
    //         else {
    //             console.error('erro')
    //         }
    //     })
    //     .addCase(fetchData.rejected, (state, action) => {
    //         state.status = 'failed';
    //         if(action.error.message)
    //         state.error = action.error.message
    //     })
        
    // }
})

export const { setProducts, addProducts, incrementPage } = productsSlice.actions;
export default productsSlice.reducer