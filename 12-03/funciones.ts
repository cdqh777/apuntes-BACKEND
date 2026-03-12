/*
// funcion tradicional
function saludar(x: string) {
    return `Hola ${x}`;
    //return 1;
}
console.log(saludar("Juan"));

// funcion flecha
const saludar = (x: string): string => {
    return `Hola ${x}`;
}
console.log(saludar("Juan"));


// funcion flecha abreviada
const saludar = (x: string): string => `Hola ${x}`;
console.log(saludar("Juan"));

const obtPersona = () => ({
    nombre: 'Juan',
    edad: 25
})
console.log(obtPersona());

interface Persona {
    nombre: string;
    edad: number;
}

function obtPersona(): Persona{
    return {
        nombre: 'juan',
        edad: 23
    }
}
console.log(obtPersona());

*/
interface Persona {
    nombre: string;
    edad: number;
}

const obtPersona = (): Persona => {
    return {
        nombre: "juan",
        edad: 21
    };
}
console.log(obtPersona());

//generar un arreglo de 3 o mas objetos (nombre, edad) crear una funcion flecha, que busque un objeto, de tal modo que retorne el objeto e imprima; en caso de no existir retorne un objeto vacio