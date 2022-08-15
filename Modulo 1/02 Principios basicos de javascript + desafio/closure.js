//! Closure o clausura: permite acceder al ámbito de una función exterior desde una función interior

function gritarNombre(nombre) {
    const signosDeExclamacion = '!!'
    return function() {
        console.log(`${nombre}${signosDeExclamacion}`)
    }
}

const gritar = gritarNombre('Juan')
console.log(gritar)

gritar()