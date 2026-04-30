function decoradorDeMetodo(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('Decorador de método:', propertyKey);
  
    const metodoOG = descriptor.value;
  
    descriptor.value = function(...args: any[]) {
      console.log('Argumentos originales:', args);
      const argsModificados = args.map((arg: number) => arg + 1);
      console.log('Argumentos modificados:', argsModificados);
      return metodoOG.apply(this, argsModificados);
    };
  }
  
  class Punto1 {
    public x: number = 0;
    public y: number = 0;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  
    @decoradorDeMetodo
    public desplaza(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    }
  
    public mostrar() {
      console.log(this.x, this.y);
    }
  }
  
  let p1 = new Punto1(2, 3);
  p1.desplaza(4, 5);
  p1.mostrar();

//   agregar el decorador de propiedad y de parametros