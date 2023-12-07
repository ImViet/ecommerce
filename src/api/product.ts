import axios from "axios";
import axiosClient from "./axiosClient";
import { IProduct } from "../interfaces/IProduct";

export const getAllProduct = (): Promise<IProduct[]> => {
    return axiosClient.get(`products`);
}

export const getProductPagination = (pageIndex: number): Promise<IProduct[]> => {
    return axiosClient.get(`products?offset=${pageIndex}&limit=10`,{
        cancelToken: axios.CancelToken.source().token
    });
};

export const getProductById = (id: number): Promise<IProduct> => {
    return axiosClient.get(`products/${id}`);
}