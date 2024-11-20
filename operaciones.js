const {readFileSync,writeFileSync,existsSync} = require('fs')

const archivo = './citas.json'

const validarExiste = () => {
  if (existsSync(archivo)==false) {
    writeFileSync(archivo,'[]')
  } 
  return JSON.parse(readFileSync(archivo,'utf-8'))
}

const existentes = validarExiste()

const leer = () => {
  if (existentes.length == 0) {
    console.log('No hay registros aún')  
  } else {
    console.log(existentes)
  }
}

const registrar = (argumentos) => {
  if (argumentos.length != 6) {
    console.log('Ingrese todos los datos')
  } else {
    const datos = [{
      'nombre' : argumentos[1],
      'edad' : argumentos[2],
      'animal' : argumentos[3],
      'color' : argumentos[4],
      'enfermedad' : argumentos[5]
    }]
      writeFileSync(archivo,JSON.stringify(existentes.concat(datos),null,3))
      console.log(argumentos[1] + ' fue registrado')
  }
}

module.exports = {
  leer,
  registrar
}