import axiosClient from "./axiosClient";
import { IProduct } from "../interfaces/IProduct";
import { IResponseData } from "../interfaces/IResponseData";
import { IPaging } from "../interfaces/IPaging";

export const getAllProduct = async (): Promise<IResponseData<IProduct[]>> => {
    return await axiosClient.get(`/products`);
}

export const getProductPagination = async (pageIndex: number = 1): Promise<IResponseData<IPaging<IProduct>>> => {
    return await axiosClient.get(`/products/paging?pageIndex=${pageIndex}`);
};

export const getProductById = async (id: number): Promise<IResponseData<IProduct>> => {
    return await axiosClient.get(`/products/${id}`);
}

export const getSuggestionProduct = async (keyword: string): Promise<IResponseData<IPaging<IProduct>>> => {
    return await axiosClient.get(`/products/suggestion?keyword=${keyword}`);
}
