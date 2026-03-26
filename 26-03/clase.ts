// Forma tradicional
/*
class Circulo{
    // Atributos
    public radio: number;
    // Metodos
    public constructor(radio: number){
        this.radio = radio;
    }
    public area(): number {
        return Math.PI * this.radio * this.radio;
    }
}


// Forma corta
class Figura {
    public constructor(public color: string) {}
}

class Circulo{
    // Metodos
    public constructor(public readonly radio: number){}

    public area(): number {
        return Math.PI * this.radio * this.radio;
    }
}
*/
//1. si declaro como privado radio, agregar gettters y setters de radio
//2. agregar la clase padre Figura (color: string)
class Figura {
    public constructor(public color: string) {}
}

class Circulo extends Figura {
    private _radio: number;

    public constructor(radio: number, color: string) {
        super(color);
        this._radio = radio;
    }

    public get radio(): number {
        return this._radio;
    }

    public set radio(valor: number) {
        if (valor > 0) {
            this._radio = valor;
        } else {
            console.log("El radio debe ser positivo");
        }
    }

    public area(): number {
        return Math.PI * this._radio * this._radio;
    }
}



//3. ambito de accion de los atributos publicos, proteccion y privado

const cir = new Circulo(1, "rojo");

console.log("Area:",cir.area());
console.log("Color:", cir.color);