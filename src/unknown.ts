let unkVar : unknown;

unkVar = true;
unkVar = undefined;
unkVar = null;
unkVar = 'carmen';
unkVar = [];
unkVar = {};

if(typeof unkVar === 'string'){
    unkVar.toUpperCase();
}
unkVar = 'string variable';
console.log(unkVar);

if(typeof unkVar === 'boolean'){
    let isBool: boolean = unkVar;
    console.log(isBool);
}


//Unknown puede ser usado si es que el tipo de retorno es desconocido o puede ser que no sea el esperado
const parse = (str: string): unknown =>{
    return JSON.parse(str);
}



