import {Item} from "../../item";
import {Transaction} from "../../transaction";
import {Person} from "../../person";
import crypto from "node:crypto";
import {CustomerError, FailedToAddCustomerError} from "./errors";
import {MissingValuesError} from "../product";

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

    getID(): crypto.UUID {
        if(this.person === null) {
            throw new CustomerError("Person is not defined")
        }
        return this.person.ID;
    }

    setID(id: crypto.UUID) {
        if(this.person === null) {
            return new Person(id, "")
        }

        this.person.ID = id;
    }

    getName(): string {
        if(this.person === null) {
            throw new CustomerError("Person is not defined");
        }
        return this.person.Name;
    }

    setName(name: string) {
        if(name == "") {
            throw new MissingValuesError();
        }
        this.person.Name = name
    }



}


export function NewCustomer(name: string): Customer {
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