function decoradorDeClase(target: Function) {
    console.log('Decorador de clase: ', target.name);
    // adiciona un atributo
    target.prototype.y = 0;
    // adicionar metodos
    target.prototype.setY = function (y: number) {
        target.prototype.y = y;
    }
    target.prototype.getY = function() {
        return this.y;
    }

    target.prototype.desplaza = function(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    };

    target.prototype.mostrar = function() {
        console.log(`Puntos: ${this.x}, ${this.y}`);
    };
}

@decoradorDeClase
class Punto {
    // Atributo
    public x: number = 0;

    // Métodos
    public setX(x: number) {
        this.x = x;
    }

    public getX() {
        return this.x;
    }
}

let p = new Punto();
p.setX(2);
console.log(p.getX());
(p as any).setY(4);
console.log((p as any).getY());
(p as any).desplaza(3, 7);
(p as any).mostrar();