const v: number[] = [1,2,3,4,5];
//anterior
/*
const primero = v[0];
const segundo = v[1];
const tercero = v[2];
console.log(primero,segundo,tercero);

//desestructuracion de arreglos
const [primero, segundo, tercero] = v;
console.log(primero,segundo,tercero);

const [,,tercero] = v;
console.log(tercero);

const [...todos] = v;
console.log(todos);

const [primero,...resto] = v;
console.log(primero,resto);

const funcion = () => {
    return [
        'ABC',
        (y:number) => y % 2 == 0
    ] as const;
}

const [primero,segundo] = funcion()
console.log(primero,segundo(1));
*/

const useState = (x: string) => {
    return [
        x,
        (y: string) => { console.log(`Hola ${y}`) }
    ] as const;
}

const [nom, setNombre] = useState('Juan');

console.log(nom);
setNombre('Maria');