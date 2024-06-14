// Definición de errores
class CustomerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CustomerError';
    }
}

class CustomerNotFoundError extends CustomerError {
    constructor() {
        super('The customer was not found in the repository');
    }
}

class FailedToAddCustomerError extends CustomerError {
    constructor() {
        super('Failed to add the customer to the repository');
    }
}

class UpdateCustomerError extends CustomerError {
    constructor() {
        super('Failed to update the customer in the repository');
    }
}
