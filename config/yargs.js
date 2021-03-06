const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }
}

const argv = require('yargs')
    .command('listar', 'Imprime tablas de multiplicar', opts)
    .command('crear', 'Crea una tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    argv
}