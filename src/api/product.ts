import axiosClient from "./axiosClient";
import { IProduct } from "../interfaces/IProduct";
import { IResponseData } from "../interfaces/IResponseData";

export const getAllProduct = async (): Promise<IResponseData<IProduct[]>> => {
    return await axiosClient.get(`/products`);
}

export const getProductPagination = (pageIndex: number): Promise<IProduct[]> => {
    return axiosClient.get(`products?offset=${pageIndex}&limit=10`);
};

export const getProductById = async (id: number): Promise<IResponseData<IProduct>> => {
    return await axiosClient.get(`/products/${id}`);
}
