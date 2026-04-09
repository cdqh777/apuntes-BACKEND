interface Persona { 
    nombre: string;
    nota: number;
}

const ps1: Persona[] = [
    {
        nombre: 'Juan',
        nota: 36
    },
    {
        nombre: 'Maria',
        nota: 71
    }
];

function funcion6(ps1: Persona[]) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = ps1.length;
            let exito = false;
            for (let i = 0; i < n; i++) {
                const {nota} = ps1[i];
                console.log(nota);
                if (nota >= 51) {
                    exito = true;
                    break;
                }
            }
            if (exito) {
                resolve('EXITO');
            } else {
                reject('No exito');
            }
        }, 2000); 
    });
}

funcion6(ps1)
    .then((mensaje) => {console.log('then:',mensaje)}) // "EXITO"
    .catch((mensaje) => {console.log(mensaje)}) // "No exito"
    .finally(() => {console.log("Proceso finalizado.")});