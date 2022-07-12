//funciones que nunca van a terminar
const withoutEnd = () =>{
    while (true){
        console.log ('never stop');
    }
} 

//Never tambien es identificado en funciones que potencialmente detengan tu programa
const failFunc = (message: string) => {
    throw new Error(message);
}

const testFunc = (input: unknown) =>{
    if(typeof input === 'string'){
        return 'es un string';
    }else if(Array.isArray(input)){
        return 'es un array';
    }
    return failFunc('not match');
}

console.log(testFunc('Hola'));
console.log(testFunc([5,7,8,9]));
console.log(testFunc(123)); //el programa se va a detener por la funcion que retorna error
console.log(testFunc('Hola despues'));

