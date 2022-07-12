//funcion que lee un string, separa los caracteres y devuelve un array de strings con los caracteres y visceversa.
// Pamela => ['P','a','m','e','l','a']
// ['P','a','m','e','l','a'] =>   Pamela  

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

export function parseStr(input: unknown): unknown{
    if(Array.isArray(input)){
        return input.join(''); //une los valores y retorna un string
    }else if (typeof input === 'string'){
        return input.split(''); //divide los caracteres y retorna un string[]
    }else if (typeof input === 'number'){
        return true; 
    }
}
const input = 'Pamela';
const rArray = parseStr(input);
rArray.reverse();   //con la sobrecarga de funciones ts automáticamente identifica que al enviar un 
                    // string, el retorno es necesariamente un array y lo trata como tal
console.log(input,'=>',rArray);

const input2 = ['p','a','m','e','l','a'];
let rString = parseStr(input2);
rString = rString.toUpperCase();  //con la sobrecarga de funciones ts automáticamente identifica que al enviar 
                        // un array,el retorno es necesariamente un string y lo trata como tal
console.log(input2,'=>',rString);