/*

*/
const argv = require('./config/yargs').argv;

const colors = require('colors');


const { getMulti, getListMulti } = require('./multiplicar/multiplicar');

let base = argv.base;
let limite = argv.limite;

let argv2 = process.argv;

let comando = argv._[0];


switch (comando) {
    case 'listar':
        // console.log('listar');
        getListMulti(base, limite)
            .then(lista => console.log(lista))
            .catch(err => console.log(err))
        break;

    case 'crear':
        getMulti(base, limite)
            .then(mensaje => console.log(colors.bgCyan('archivo creado :'), mensaje))
            .catch(err => console.log(err))
        break;

    default:
        console.log('Comnado no reconocido ');


}

console.log('Limite', argv.limite);

// console.log(argv.base);


// let parametro = argv[2];
// let base = parametro.split('=')[1]


// getMulti(base)
//     .then(mensaje => console.log(mensaje))
//     .catch(err => console.log(err))