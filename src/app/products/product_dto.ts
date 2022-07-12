import {Product} from './product_model';

export interface CreateProductDto extends Omit<Product,'id'|'createdAt'|'updatedAt'|'categoryId'>{
    categoryId: string;
}
//crea el UpdateProductDto basado en CreateProductDto pero con 
// todos los campos opcionales 
export interface UpdateProductDto extends Partial<CreateProductDto>{}; 

export interface FindProductDto extends Readonly<Partial<Omit<Product,'tags'>>{
   readonly tags : ReadonlyArray<string>;
}; 
