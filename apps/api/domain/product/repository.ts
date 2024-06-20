
import crypto from "node:crypto";
import {Product} from "./product";

export interface Repository {
    GetAll(): Promise<Product[]>;
    GetByID(id: crypto.UUID): Promise<Product>;
    Add(product: Product): Promise<void>;
    Update(product: Product): Promise<void>;
    Delete(uuid: crypto.UUID): Promise<void>;
}