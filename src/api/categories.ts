import { ICategory } from "../interfaces/ICategory";
import { IPaging } from "../interfaces/IPaging";
import { IProduct } from "../interfaces/IProduct";
import { IResponseData } from "../interfaces/IResponseData";
import axiosClient from "./axiosClient";

export const getAllCategory = async (): Promise<IResponseData<ICategory[]>> => {
    return await axiosClient.get(`/categories`);
}

export const getProductByCategory = (id: Number, pageIndex: number = 1): Promise<IResponseData<IPaging<IProduct>>> => {
    return axiosClient.get(`/categories/${id}/products?pageIndex=${pageIndex}&pageSize=1`)
}