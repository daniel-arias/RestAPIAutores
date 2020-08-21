const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.listen(3000, () => {
    console.log('Start Server...');
});

const autores =[
    {
        id: 1,
        nombre: 'Jorge Luis',
        apellido: 'Borges',
        fechaDeNacimiento: '24/08/1889',
        libros: [
            {
                id:1,
                titulo: 'ficciones',
                descripcion: 'Se trata de uno de sus mas...',
                anioPublicacion: 1944
            },{
                id:2,
                titulo: 'El Aleph',
                descripcion: 'Otra recopilacion de cuentos...',
                anioPublicacion: 1949
            },
        ]
    },{
        id: 2,
        nombre: 'Gabriel',
        apellido: 'Garcia',
        fechaDeNacimiento: '24/08/1889',
        libros: [
            {
                id:1,
                titulo: '100 años de soledad',
                descripcion: 'Se trata de uno de sus mas...',
                anioPublicacion: 1944
            },{
                id:2,
                titulo: 'La mala hora',
                descripcion: 'Otra recopilacion de cuentos...',
                anioPublicacion: 1949
            },
        ]
    },
]



server.get('/autores/:id/libros',(req,res)=>{
    const libros = autores.find((item)=> {
        if(item.id==req.params.id){
            return item;
        }
    });

    if(!libros){
        res.status(404);
        res.json({"message":"Autor no encontrado"});
    } else{
        res.json(libros.libros);
    }
})
