import { Repository as CustomerRepository } from "../../domain/customer";


type OrderConfiguration = (os: OrderService) => Error | null;

class OrderService {
    customers: CustomerRepository
    products: Repository
}

async function NewOrderService(cfgs: OrderConfiguration[]): Promise<OrderService> {
    const os = new OrderService();

    for (const cfg of cfgs) {
        await cfg(os)
    }

    return os;
}


function WithCustomerRepository(cr: CustomerRepository): OrderConfiguration {
    return (os: OrderService) => {
        os.customers = cr;
    }
}
