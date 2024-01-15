import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProduct";
import { IPaging } from "../../interfaces/IPaging";
import { IQueryProductModel } from "../../interfaces/Product/IQueryProductModel";
interface ProductState {
    products: IPaging<IProduct> | null
}
const initialState: ProductState = {
    products: null
}
export const ProductReducerSlice = createSlice({
    name:'Product',
    initialState,
    reducers: {
        getProduct: (state, action: PayloadAction<IQueryProductModel>): ProductState => {
            return {
                ...state
            }
        },
        setProduct: (state, action: PayloadAction<IPaging<IProduct>>): ProductState => {
            const payload = action.payload;
            const items = state.products?.items || [];
            return {
                ...state,
                products: {
                    currentPage: payload.currentPage,
                    totalItems: payload.totalItems,
                    totalPages: payload.totalPages,
                    items: [...items, ...payload.items]                    
                } 
            }
        },
        getProductByCate: (state, action: PayloadAction) => {
            
        }
    }
})

export const { getProduct, setProduct } = ProductReducerSlice.actions
export default ProductReducerSlice.reducer