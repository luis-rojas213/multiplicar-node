const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('=================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
    /* return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida ${ base } no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite introducido ${ limite } no es un número.`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {
            resolve(console.log(`${ base } * ${ i } = ${ base * i }`));
        }

        //resolve(tabla); 
    });*/
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El límite introducido ${ limite } no es un número.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`table-${ base }.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}