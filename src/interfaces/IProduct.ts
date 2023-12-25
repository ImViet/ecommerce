import { IProductImage } from "./IProductImage";

export interface IProduct{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    images: IProductImage[];
}