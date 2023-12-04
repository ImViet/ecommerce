import axios from "axios";
import axiosClient from "./axiosClient";
import { IProduct } from "../interfaces/IProduct";

export const getProduct = (): Promise<IProduct[]> => {
    return axiosClient.get(`products`,{
        cancelToken: axios.CancelToken.source().token
    });
};

export const getProductById = (id: number): Promise<IProduct> => {
    return axiosClient.get(`products/${id}`);
}