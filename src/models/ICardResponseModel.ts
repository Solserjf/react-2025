import {ICard} from "./ICard.ts";

export interface ICardResponseModel {
    total: number;
    limit: number;
    skip: number;
    carts: ICard[];
}