/*

*/

const fs = require('fs');
//const fs = require('express');  // no son propios de node
//const fs = require('./fs'); // son archivos propios de nuetro pc
const colors = require('colors');



let listarTabla = async(base, limite) => {


    console.log('===================================================='.green);
    console.log(`=====Tabla de ${base} con limite ${limite}==========`.bgBlue);
    console.log('===================================================='.gray);

    let data2 = '';

    for (let i = 1; i <= limite; i++) {
        data2 += `${base} * ${i}= ${base*i}\n`;
    }

    return data2;
}



let CrearArchivo = async(base, limite) => {

    if (!Number(base)) {
        throw new Error(`la base ${base} no es un numero`)
        return;
    }

    //   return 'aqui es entro 1';


    console.log('===================================================='.green);
    console.log(`=====Tabla de ${base} con limite ${limite}==========`.bgBlue);
    console.log('===================================================='.gray);

    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i}= ${base*i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) {
            throw new Error('aqui entro');
            return;
        } else {
            return `tabla-${base}.txt`;
        }

    });
    return `tabla-${base}.txt`
}


let getMulti = async(base, limite) => {
    let archivo = await CrearArchivo(base, limite)
    return archivo;
}

let getListMulti = async(base, limite) => {
    let lista = await listarTabla(base, limite)
    return lista;
}


module.exports = {
    getMulti,
    getListMulti
}