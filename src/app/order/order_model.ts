import { Product } from "../products/product_model";
import { User } from "../users/user_model";
import { BaseModel } from "../base_model";

export interface Order extends BaseModel{
    products: Product[];
    user: User;
}