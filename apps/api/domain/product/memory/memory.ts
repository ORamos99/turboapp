import crypto from "node:crypto";
import {Repository} from "../repository";
import {Product} from "../product";
import {ErrProductAlreadyExists, ErrProductNotFound} from "../errors";


class MemoryRepository implements Repository {
    private products: Map<crypto.UUID, Product> = new Map();

    async Add(product: Product): Promise<void> {
        if(this.products.get(product.getID())) {
            throw new ErrProductAlreadyExists()
        }

        this.products.set(product.getID(), product);
    }

    async Delete(uuid: crypto.UUID): Promise<void> {
        if(!this.products.delete(uuid)) {
            throw new ErrProductNotFound()
        }
    }

    async GetAll(): Promise<Product[]> {
        return Array.from(this.products.values())
    }

    async GetByID(id: crypto.UUID): Promise<Product> {
        const product = this.products.get(id);

        if(!product) {
            throw new ErrProductNotFound()
        }

        return product;
    }

    async Update(product: Product): Promise<void> {
        if(!this.products.has(product.getID())) {
            throw new ErrProductAlreadyExists()
        }

        this.products.set(product.getID(), product);
    }
}

export function createMemoryProductRepository(): MemoryRepository {
    return new MemoryRepository();
}