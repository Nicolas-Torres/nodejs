class Persona {
    // Global
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludo() {
        console.log(`Hola ${this.nombre}`)
    }
}



let hola = new Persona('lucia', 20)
hola.saludo()