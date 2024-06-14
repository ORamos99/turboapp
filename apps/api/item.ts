import * as crypto from "node:crypto";


export class Item {
    ID: crypto.UUID;
    Name: string;
    Description: string;

    constructor(
        ID: crypto.UUID,
        Name: string,
        Description: string
    ) {
        this.ID = ID;
        this.Name = Name;
        this.Description = Description;
    }
}