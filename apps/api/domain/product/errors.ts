class ProductError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ProductError';
    }
}

class MissingValuesError extends ProductError {
    constructor() {
        super('Name or description cannot be empty');
    }
}

class ErrProductNotFound extends ProductError {
    constructor() {
        super("the product was not found");
    }
}

class ErrProductAlreadyExists extends ProductError {
    constructor() {
        super("The product already exists");
    }
}