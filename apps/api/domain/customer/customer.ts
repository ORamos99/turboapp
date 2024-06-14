import {Item} from "../../item";
import {Transaction} from "../../transaction";
import {Person} from "../../person";

export class Customer  {
    person: Person;
    products: Item[];
    transactions: Transaction[];
    constructor(
        person: Person,
        products: Item[],
        transactions: Transaction[]
    ) {
        this.person = person;
        this.products = products;
        this.transactions = transactions;
    }
}


function NewCustomer(name: string): Customer {
    if (name === "") {
        throw new FailedToAddCustomerError()
    }

    const person: Person = new Person(
        crypto.randomUUID(),
        name,


    )
    return new Customer(
        person,
        [],
        []
    )
}