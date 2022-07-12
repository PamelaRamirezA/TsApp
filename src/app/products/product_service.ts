import { Product } from "./product_model";
import {  CreateProductDto, UpdateProductDto, FindProductDto } from "./product_dto";

export const products : Product[] = [];

export const addProduct = (data: Product) =>{
    products.push(data)
}

export const updateProduct = (id: Product['id'], changes: UpdateProductDto) : Product =>{
    const index = products.findIndex(item => item.id === id);
    const prevData = products[index];

    //actualizando el producto
    products[index] = {
        ...prevData,
        ...changes
    }
    return products[index]; //retorna el producto con el indice obtenido, pero luego de la actualizacion
}

export const getProduct = (id: string) =>{
    
}

export const deleteProduct = (id: string) =>{
    
}

export const findProducts = (dto: FindProductDto): Product[] =>{
    return products;
}