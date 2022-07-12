import { Category } from "../categories/category_model"; 
import { BaseModel } from "../base_model";

export type Sizes = 'S'|'M'|'L'|'XL';
export interface Product extends BaseModel{
    title: string;
    image: string;
    description: string;
    stock: number;
    size?: Sizes;
    color: string;
    price: number;
    category: Category;
    isNew: boolean;
    tags: string[];
}