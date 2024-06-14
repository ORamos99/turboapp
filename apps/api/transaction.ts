import * as crypto from "node:crypto";


export class Transaction {
    amount: number;
    from: crypto.UUID;
    to: crypto.UUID;
    createdAt: Date;
    constructor(
        amount: number,
        from: crypto.UUID,
        to: crypto.UUID,
        createdAt: Date
    ) {
        this.amount = amount;
        this.from = from;
        this.to = to;
        this.createdAt = createdAt
    }
 }