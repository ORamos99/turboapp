export { Customer, NewCustomer } from './customer';
export { Repository } from './repository';
export {
    CustomerError,
    UpdateCustomerError,
    FailedToAddCustomerError,
    CustomerNotFoundError,
    CustomerAlreadyExist
} from "./errors"
export { createMemoryCustomerRepository } from './memory/memory'