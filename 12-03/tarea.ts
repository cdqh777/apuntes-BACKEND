//generar un arreglo de 3 o mas objetos (nombre, edad) crear una funcion flecha, que busque un objeto, de tal modo que retorne el objeto e imprima; en caso de no existir retorne un objeto vacio
interface Persona {
    nombre: string;
    edad: number;
}

const personas: Persona[] = [{
        nombre: "Juan",
        edad: 21
    },
    {
        nombre: "Ana",
        edad: 28
    },
    {
        nombre: "Carlos", edad: 35
    }
];

const buscarPersona = (nombre: string): Persona => {
    const persona = personas.find(p => p.nombre === nombre);
    return persona ? persona : {
        nombre: "",
        edad: 0
    };
}

console.log(buscarPersona("Jose"));
