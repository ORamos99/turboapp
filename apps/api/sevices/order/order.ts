import {
    CustomerError,
    CustomerNotFoundError,
    NewCustomer,
    Repository as CustomerRepository,
    createMemoryCustomerRepository
} from "../../domain/customer";
import {ErrProductNotFound, Product, Repository as ProductRepository} from "../../domain/product";
import crypto from "node:crypto";
import {createMemoryProductRepository} from "../../domain/product/memory/memory";


type OrderConfiguration = (os: OrderService) => void;

export class OrderService {
    customers: CustomerRepository | null = null;
    products: ProductRepository | null = null;


    async createOrder(customerId: crypto.UUID, productsIds: crypto.UUID[]): Promise<number> {
        if(!this.customers || !this.products) {
            throw new Error("Repositories not initialized")
        }
        const customer = this.customers.Get(customerId);

        if(!customer) {
            throw new CustomerNotFoundError()
        }

        const products: Product[] = [];
        let price: number = 0;

        for (const id of productsIds) {
            const product =  await this.products.GetByID(id);
            if(!product) {
                throw new ErrProductNotFound()
            }

            products.push(product)
            price += product.getPrice();
        }

        return price;

    }

    async addCustomer(name: string): Promise<crypto.UUID> {
        if(!this.customers) {
            throw new CustomerError("Repository not initialized")
        }
        const customer = NewCustomer(name);
        await this.customers.Add(customer);
        return customer.getID();
    }
}

export async function NewOrderService(...cfgs: OrderConfiguration[]): Promise<OrderService> {
    const os = new OrderService();

    for (const cfg of cfgs) {
        cfg(os)
    }

    return os;
}


export async function WithCustomerRepository(cr: CustomerRepository): Promise<OrderConfiguration> {
    return (os: OrderService) => {
        os.customers = cr;
    }
}

export async function WithMemoryCustomerRepository(): Promise<OrderConfiguration> {
    // Create the memory repo, if we needed parameters, such as connection strings they could be inputted here
    const cr = createMemoryCustomerRepository()
    return WithCustomerRepository(cr)
}

export async function WithMemoryProductRepository(products: Product[]): Promise<OrderConfiguration> {
    return (os: OrderService) => {
        // Create the memory repo, if we needed parameters, such as connection strings they could be inputted here
        const pr = createMemoryProductRepository()

        for (const p of products) {
            pr.Add(p)
        }
        os.products = pr
    }
}




