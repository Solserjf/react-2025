import {IUsersAddressCoordinates} from "./IUsersAddressCoordinates.ts";

export interface IUsersAddress {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: IUsersAddressCoordinates;
    country: string;
}