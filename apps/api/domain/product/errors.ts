export class ProductError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ProductError';
    }
}

export class MissingValuesError extends ProductError {
    constructor() {
        super('Name or description cannot be empty');
    }
}

export class ErrProductNotFound extends ProductError {
    constructor() {
        super("the product was not found");
    }
}

export class ErrProductAlreadyExists extends ProductError {
    constructor() {
        super("The product already exists");
    }
}