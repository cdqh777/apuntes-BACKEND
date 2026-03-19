//16 de abril, traer frontend que hicimos en web 2
interface Persona{
    id?: number;
    nombre: string;
    apellido: string;
    edad: number
}

const persona = {
    id: 10,
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 20
}

//Desectructuracion de objetos
const {nombre:a, apellido:b, edad} = persona;
console.log(a,b,edad);

const mifuncion = (pers: Persona) => {
    const {id} = pers; 
    return {
        id, //id: id
        usuario: {
            nombre: 'Maria',
            apellido: 'Paz'
        }
    }
}

/*
const {id,usuario} = mifuncion(persona);
const {nombre} = usuario;
console.log(id,nombre);
*/

const {id,usuario:{nombre}} = mifuncion(persona);
console.log({id,nombre});