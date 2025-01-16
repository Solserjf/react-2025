import {IProduct} from "./IProduct.ts";

export interface ICard {
	id: number;
	products: IProduct[];
	total: number;
	discountedTotal: number;
	userId: number;
	totalProducts: number;
	totalQuantity: number;
}
