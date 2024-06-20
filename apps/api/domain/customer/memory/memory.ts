import crypto from "node:crypto";
import {Customer} from "../customer";
import {Repository} from "../repository";
import {CustomerAlreadyExist, CustomerNotFoundError} from "../errors";


class MemoryRepository implements Repository {
    private customers: Map<crypto.UUID, Customer> = new Map();

    async Get(id: crypto.UUID): Promise<Customer> {
        const customer = this.customers.get(id)
        if(!customer) {
            throw new CustomerNotFoundError()
        }
        return customer;
    }

    async Add(customer: Customer): Promise<void> {
        if(this.customers.has(customer.getID())) {
            throw new CustomerAlreadyExist()
        }
        this.customers.set(customer.getID(), customer);
    }

    async Update(customer: Customer): Promise<void> {
        if(!this.customers.has(customer.getID())) {
            throw new CustomerNotFoundError()
        }

        this.customers.set(customer.getID(), customer);
    }

}

export function createMemoryCustomerRepository(): MemoryRepository {
    return new MemoryRepository();
}