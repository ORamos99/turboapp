// Definición de errores
export class CustomerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomerError';
    }
}

export class CustomerNotFoundError extends CustomerError {
    constructor() {
        super('The customer was not found in the repository');
    }
}

export class FailedToAddCustomerError extends CustomerError {
    constructor() {
        super('Failed to add the customer to the repository');
    }
}

export class UpdateCustomerError extends CustomerError {
    constructor() {
        super('Failed to update the customer in the repository');
    }
}

export class CustomerAlreadyExist extends  CustomerError {
    constructor() {
        super('Customer already exist in the repository');
    }
}
