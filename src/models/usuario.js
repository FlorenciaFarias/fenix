const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const model = {
    all: () => {

        let archivo = resolve(__dirname, '../data', 'usuarios.json');
        let data = readFileSync(archivo);

        return JSON.parse(data);
    },
    one:function(id){

        let archivo = resolve(__dirname, '../data', 'usuarios.json');
        let data = readFileSync(archivo);
        let usuarios = JSON.parse(data);

        return usuarios.find(usuario => usuario.id === id);
      },
    create: (data) => {

        let archivo = resolve(__dirname, '../data', 'usuarios.json');
        let dataArch = readFileSync(archivo);
        let usuarios = JSON.parse(dataArch);
        let ultimoUsuario = usuarios[usuarios.length - 1];

        return Object({
            id: usuarios.length == 0 ? 1 : ultimoUsuario.id + 1,
            nombre: data.nombre,
            apellido: data.apellido,
            email: data.email,
            tel: data.tel,
            dni: data.dni,
            calle: data.calle,
            altura: data.altura,
            localidad: data.localidad,
            provincia: data.provincia,
            cp: data.cp,
            password: data.password,
            repetir_password: data.repetir_password,
            avatar: data.avatar,
            rol: data.email.includes('@fenix.com')
        });

    },
    write: (data) => {
        let archivo = resolve(__dirname,'../data','usuarios.json');
        let dataArch = JSON.stringify(data, null, 2);

        return writeFileSync(archivo, dataArch);
    }
}

module.exports = model;