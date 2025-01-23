import {IProduct} from "./IProduct.ts";

export interface IProductsResponseModelType {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}