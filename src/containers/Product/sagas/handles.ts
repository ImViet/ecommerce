import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects"
import { getProductPagination } from "../../../api/product";
import { setProduct } from "../reducer";
import { IPaging } from "../../../interfaces/IPaging";
import { IProduct } from "../../../interfaces/IProduct";
import { IResponseData } from "../../../interfaces/IResponseData";
import { IQueryProductModel } from "../../../interfaces/Product/IQueryProductModel";


export function* handleGetProductPagination(action: PayloadAction<IQueryProductModel>){
    const queryModel = action.payload;
    try {
        const response: IResponseData<IPaging<IProduct>> = yield call(getProductPagination, queryModel.pageIndex);
        yield put(setProduct(response.data))
    } catch (error) {
        
    }
}