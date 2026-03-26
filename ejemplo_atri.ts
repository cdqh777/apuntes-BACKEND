class Persona1 {
    public nombre: string;
    protected edad: number;
    private ru: string;

    constructor(nombre: string, edad: number, ru: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ru = ru;
    }

    public mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, RU: ${this.ru}`);
    }
}

class Estudiante extends Persona1 {
    public curso: string;

    constructor(nombre: string, edad: number, ru: string, curso: string) {
        super(nombre, edad, ru);
        this.curso = curso;
    }

    public mostrarEstudiante(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Curso: ${this.curso}`);
    }
}

const est = new Estudiante("Carlos Daniel Quispe Huanca", 20, "1878263", "DESARROLLO WEB BACKEND(TAW-251)");

est.mostrarEstudiante();