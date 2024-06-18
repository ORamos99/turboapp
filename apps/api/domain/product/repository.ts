
import crypto, {UUID} from "node:crypto";
import {Product} from "./product";

interface Repository {
    GetAll(): Product[];
    GetByID(id: UUID): Product;
    Add(product: Product): void;
    Update(product: Product): void;
    Delete(uuid: crypto.UUID): void;
}