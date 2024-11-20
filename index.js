const {registrar,leer} = require('./operaciones.js')

const argumentos = process.argv.slice(2)

if (argumentos.length == 0) {
  console.log('Ingrese una función')
} else if (argumentos[0] == 'registrar') {
  registrar(argumentos);
} else if (argumentos[0] == 'leer') {
  leer();
} else {
  console.log('Ingrese una función valida')
}
