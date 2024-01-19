import axiosClient from "./axiosClient";
import { IProduct } from "../interfaces/IProduct";
import { IResponseData } from "../interfaces/IResponseData";
import { IPaging } from "../interfaces/IPaging";

export const getAllProduct = async (): Promise<IResponseData<IProduct[]>> => {
    return await axiosClient.get(`/products`);
}

export const getProductPagination = async (cateId?: number, pageIndex: number = 1): Promise<IResponseData<IPaging<IProduct>>> => {
    let url = `/products/paging?pageIndex=${pageIndex}`;
    if(cateId !== undefined)
    {
        url = url + `&categoryId=${cateId}`;
    }
    return await axiosClient.get(url);
};

export const getProductById = async (id: number): Promise<IResponseData<IProduct>> => {
    return await axiosClient.get(`/products/${id}`);
}

export const getSuggestionProduct = async (keyword: string): Promise<IResponseData<IPaging<IProduct>>> => {
    return await axiosClient.get(`/products/suggestion?keyword=${keyword}`);
}
