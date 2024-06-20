import {OrderService} from "../order/order";
import * as os from "node:os";
import crypto from "node:crypto";


class Tavern {
    orderService: OrderService | null = null
    order(customer: crypto.UUID, products: crypto.UUID[]) {
        if(!this.orderService) {
            throw new Error('Service not initialized')
        }
        const price = this.orderService.createOrder(customer, products);

        console.log(`Bill the Customer: ${price}`)
    }
}

type TavernConfiguration = (os: Tavern) => void;

export function NewTavern(...cfgs: TavernConfiguration[]): Tavern {
    const t = new Tavern()
    for (const cfg of cfgs) {
        cfg(t)
    }
    return t;
}


export async function WithOrderService(os: OrderService): Promise<TavernConfiguration> {
    return (t: Tavern)=> {
        t.orderService = os
    }
}




