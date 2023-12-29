import axiosClient from "./axiosClient";
import { IProduct } from "../interfaces/IProduct";
import { IResponseData } from "../interfaces/IResponseData";
import { IPaging } from "../interfaces/IPaging";

export const getAllProduct = async (): Promise<IResponseData<IProduct[]>> => {
    return await axiosClient.get(`/products`);
}

export const getProductPagination = async (pageIndex: number): Promise<IProduct[]> => {
    return await axiosClient.get(`/products?pageIndex=${pageIndex}&limit=1`);
};

export const getProductById = async (id: number): Promise<IResponseData<IProduct>> => {
    return await axiosClient.get(`/products/${id}`);
}

export const getSuggestionProduct = async (keyword: string): Promise<IResponseData<IPaging<IProduct>>> => {
    return await axiosClient.get(`/products/suggestion?keyword=${keyword}`);
}
