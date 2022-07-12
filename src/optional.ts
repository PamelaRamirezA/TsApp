export const createProduct = (
    id: string | number,
    isNew?: boolean,
    stock?: number,
) => {
    return {
            id,
            isNew: isNew ?? true,
            stock: stock ?? 12,
    }
}

const p1 = createProduct(1);
console.log(p1);
const p2 = createProduct(2,false);
console.log(p2);
const p3 = createProduct(3,false,25);
console.log(p3);
const p4 = createProduct(3,undefined,19);
console.log(p4);