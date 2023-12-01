import { IProduct } from "./IProduct";

export interface ICartItem {
    id: number;
    quantity: number;
    product: IProduct | undefined;
  }