const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limit);
        /*             .then(tabla => tabla)
                    .catch(e => console.log(e)); */
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limit)
            .then(archivo => console.log('Archivo creado: ' + `${ archivo }`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//let base = '7';

//let argv2 = process.argv;

//console.log(argv);

/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

/*  */