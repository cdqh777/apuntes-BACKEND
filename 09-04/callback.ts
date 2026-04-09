interface Persona{
    nombre: string;
    nota: number
}

const ps: Persona[] = [
    {
        nombre: 'Juan',
        nota: 36
    },
    
    {
        nombre: 'Maria',
        nota: 71
    }
]

function funcionper(ps:Persona[], callback1: any, callback2: any) {
    setTimeout(()=>{
        let n = ps.length;
        for (let i = 0; i < n; i ++) {
            const {nota} = ps[i];
            console.log(nota);
            if (nota >= 51) {
                callback1();
                return
            }
        }
        callback2();
    }, 2000);
}
const exito = () => console.log("EXITO")
const noexito = () => console.log("NO EXITO")
funcionper(ps, exito, noexito);