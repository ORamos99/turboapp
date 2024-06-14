import * as crypto from "node:crypto";


export class Person {
    ID: crypto.UUID;
    Name: string;
    Age?: number
    constructor(
        ID: crypto.UUID,
        Name: string,
        Age?: number
    ) {
        this.ID = ID;
        this.Name = Name;
        this.Age = Age
    }
}