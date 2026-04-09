/*crear la clase Repositorio:
Usuario = {
    id: nomber,
    nombre: string;
}
Atributos: vector usuarios
Metodos(promesas):
    - save(usuario): insertar en el vector
    - findOne(id): buscar un usuario
    - find(): retorna el vector de usuario
*/
interface Usuario {
    id: string;
    nombre: string;
}

const usuarios: Usuario[] = [
    { id: "1", nombre: "Juan" },
    { id: "2", nombre: "Ana" },
    { id: "3", nombre: "Luis" },
    { id: "4", nombre: "María" },
    { id: "5", nombre: "Carlos" }
];

class Repositorio {
    private usuarios: Usuario[] = [];

    save(usuario: Usuario): Promise<void> {
        return new Promise((resolve) => {
            this.usuarios.push(usuario);
            resolve();
        });
    }

    findOne(id: string): Promise<Usuario | undefined> {
        return new Promise(resolve => resolve(this.usuarios.find(u => u.id === id)));
    }

    find(): Promise<Usuario[]> {
        return new Promise(resolve => resolve(this.usuarios));
    }
}

function buscarUsuarioPorId(id: string, repositorio: Repositorio): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = repositorio.findOne(id);
            usuario
                .then((usuario) => {
                    if (usuario) {
                        resolve(`Usuario encontrado: ${usuario.nombre}`);
                    } else {
                        reject("Usuario no encontrado");
                    }
                })
                .catch(() => reject("Error en la búsqueda"));
        }, 2000);
    });
}

const repositorio = new Repositorio();
console.log(usuarios);
Promise.all(usuarios.map(usuario => repositorio.save(usuario)))
    .then(() => buscarUsuarioPorId("3", repositorio)) // buscar por ID
    .then((mensaje) => console.log(mensaje)) // usuario encontrado
    .catch((mensaje) => console.log(mensaje)) // usuario no encontrados
    .finally(() => console.log("Proceso finalizado"));