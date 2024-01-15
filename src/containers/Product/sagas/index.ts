import { takeLatest } from "redux-saga/effects";
import { handleGetProductPagination } from "./handles";
import { getProduct } from "../reducer";

export default function* ProductSagas(){
    yield takeLatest(getProduct.type, handleGetProductPagination)
}