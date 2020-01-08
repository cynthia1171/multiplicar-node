const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
  for(let i=1; i<=limite; i++) {
    console.log(`${base} * ${i} = ${base*i}`);
  }
}

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {

    if(!Number(base)) {
      reject(`El valor introducido ${base} no es un número`.red);
      return;
    } else if(!Number(limite)) {
      reject(`El valor introducido ${limite} no es un número`.red);
      return;
    }

    let data = '';

    for(let i=1; i<=limite; i++) {
      let result = base * i;
      data += `${base} * ${i} = ${result}\n`;
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla-${base}.txt con límite de ${limite}`.rainbow);
      }
    });

  })
}

// se exportan funciones para ser ocupadas en otros archivos
module.exports = {
  crearArchivo,
  listarTabla
}