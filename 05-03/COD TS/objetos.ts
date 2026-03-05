//let persona: {nombre: string, apellido: string} = {
    //nombre: 'juan',
    //apellido: 'perez'
    //apellido: 123
//}

interface Direccion{
    ciudad: string;
    calle: string;
    numero: number;
}

interface Persona {
    nombre: string;
    apellido: string;
    direccion: Direccion;
}

let persona: Persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    direccion: {
        ciudad: 'La Paz',
        calle: 'Calle A',
        numero: 23
    }
}

//console.log(persona);
//console.table(persona);
//console.table({persona});

let p1 = {...persona};
p1.nombre = 'Maria';
p1.direccion.ciudad = 'Potosi';
console.log(persona);
console.log(p1);
