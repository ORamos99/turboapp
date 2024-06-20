import {randomUUID} from "node:crypto";
import { Item } from "../../item";
import * as crypto from "node:crypto";
import {MissingValuesError} from "./errors";

export class Product {
    item: Item;
    price: number;
    quantity: number

    constructor(
        item: Item,
        price: number,
        quantity: number
    ) {
        this.item = item;
        this.price = price;
        this.quantity = quantity;
    }

    getID(): crypto.UUID {
        return this.item.ID;
    }

    getItem(): Item {
        return this.item;
    }

    getPrice(): number {
        return this.price
    }
}


export function NewProduct(name: string, description: string, price: number): Product {
    if(name === "" || description === "") {
        throw new MissingValuesError()
    }

    const item = new Item(
        randomUUID(),
        name,
        description
    );
    return new Product(item, price, 0);
}