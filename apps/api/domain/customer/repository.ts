import * as crypto from "node:crypto";
import {Customer} from "./customer";

interface Repository {
    Get(id: crypto.UUID): Customer;
    Add(customer: Customer): Promise<void>;
    Update(customer: Customer): Promise<void>;
}