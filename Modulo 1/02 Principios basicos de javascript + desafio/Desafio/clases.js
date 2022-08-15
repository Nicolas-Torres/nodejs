class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = [],
        this.mascotas = []
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        const newBook = {
            nombre: nombre,
            autor: autor
        }
        this.libros.push(newBook)
    }

    getBookNames() {
        return this.libros.map((lib)=>{return lib.nombre})
    }
        
}

const persona = new Usuario('juan', 'perez')
console.log(persona)

persona.addMascota('tody')
persona.addBook('the hobbit', 'jjR tolkien')
persona.addBook('Steve Jobs', 'Walter Isaacson')

console.log(persona)
console.log(persona.getFullName())
console.log(persona.countMascotas())
console.log(persona.getBookNames())
