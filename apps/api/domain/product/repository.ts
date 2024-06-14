
import {UUID} from "node:crypto";
import {Product} from "./product";

interface Repository {
    GetAll(): Product[];
    GetByID(id: UUID): Product;
}