//funcion que lee un string, separa los caracteres y devuelve un array de strings con los caracteres y visceversa.
// Pamela => ['P','a','m','e','l','a']
// ['P','a','m','e','l','a'] =>   Pamela  

function parseStr(input: string | string[]): string | string[]{
    if(Array.isArray(input)){
        return input.join(''); //une los valores y retorna un string
    }else{
        return input.split(''); //divide los caracteres y retorna un string[]
    }
}
const input = 'Pamela';
const rArray = parseStr(input);
console.log(input,'=>',rArray);

const input2 = ['P','a','m','e','l','a'];
const rString = parseStr(input2);
console.log(input2,'=>',rString);