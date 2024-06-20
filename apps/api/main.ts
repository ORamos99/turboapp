import {NewProduct, Product,} from "./domain/product";
import {NewOrderService, WithMemoryCustomerRepository, WithMemoryProductRepository} from "./sevices/order/order";
import {NewTavern, WithOrderService} from "./sevices/tavern/tavern";
import crypto from "node:crypto";


async function main() {
    const products = productInventory();

    const os = await NewOrderService(
        await WithMemoryCustomerRepository(),
        await WithMemoryProductRepository(products)
    )

    if(!os) {
        throw new Error('Service error')
    }

    const tavern = NewTavern(await WithOrderService(os));

    const uid = await os.addCustomer("Denzell");

    const order: crypto.UUID[] = products.map( prod => prod.getID());

    tavern.order(uid, order);
}

function productInventory(): Product[] {
    const beer = NewProduct("Beer", "Healthy Beverage", 1.99);
    const peanuts = NewProduct("Peanuts", "Healthy Snacks", 0.99);
    const wine = NewProduct("Wine", "Healthy Snacks", 0.99);
    const products = [beer, peanuts, wine];

    return products
}