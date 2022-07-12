import {addProduct, findProducts, products} from './products/product_service';
import { faker } from '@faker-js/faker';

for(let index=0;index <2; index++){

    addProduct({
        id: faker.datatype.uuid(),
        description: faker.commerce.productDescription(),
        image: faker.image.imageUrl(),
        color: faker.commerce.color(),
        size: faker.helpers.arrayElement(['S','M','L','XL']),
        price: parseInt(faker.commerce.price(),10),
        isNew: faker.datatype.boolean(),
        tags: faker.helpers.arrayElements(),
        title: faker.commerce.productName(),
        createdAt: faker.date.recent(),
        updatedAt:  faker.date.recent(),
        stock: faker.datatype.number({min: 10, max: 100}),
        category:{
            id: faker.datatype.uuid(),
            name:faker.commerce.department(),
            createdAt: faker.date.recent(),
            updatedAt: faker.date.recent(),
        }
    });
}

console.log(products);

findProducts({
    stock:10,
    color:'red'
});