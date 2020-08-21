const express = require('express');
const bodyParser = require('body-parser');
const server = express();


const autores = [//autor 1
    {
        id: 1,
        nombre: "Victor",
        apellido: "Frankl",
        fechaNacimiento: " 26/03/1905",
        libros: [
            {
                id: 1,
                titulo: "Un hombre en busca del sentido",
                descripcion: "vida en el holocaustro",
                anioPublicacion: 1946

            },
            {
                id: 2,
                titulo: "Fundamentos y aplicaciones de la logoterapia",
                descripcion: "logoterapi y vida personal",
                anioPublicacion: 1969
            },
            {
                id: 3,
                titulo: "a pesar de todo, decir si a la vida",
                descripcion: "superacion emocional",
                anioPublicacion: 1946
            },

        ]
    },
    //autor 2
    {
        id: 2,
        nombre: "Mario",
        apellido: "Vargas Llosa",
        fechaNacimiento: " 28/03/1936",
        libros: [
            {
                id: 1,
                titulo: "el heroe discreto",
                descripcion: "Salva su negocio de su extrorcion",
                anioPublicacion: 2013

            },
            {
                id: 2,
                titulo: "la ciudad y los perros",
                descripcion: "",
                anioPublicacion: 1963
            },
            {
                id: 3,
                titulo: "Madame Bovary",
                descripcion: "entre amor y dolores",
                anioPublicacion: 1856
            },

        ]
    }
]


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



/**
 * Devolver la lista de autores
 */
server.get('/autores', PostAutoresValidator,(req, res) => {
    res.json(autores);
});
/**
 * Devolver autor con el id especificado o error
 */
server.get('/autores' + '/:id', (req, res) => {
    const id = req.params.id;
    if (isNaN(id)) {
        res.status(400).json({ error: 'Autor no encontrado. ID invalido' });
    } else {
        const search = autores.find(autor => autor.id.toString() === id.toString());
        if (search) {
            res.json(search);
        } else {
            res.status(404).json({ error: 'ID no encontrado' });
        }
    }
});

//middleware Autores
function GetAutoresValidator(req, res, next) {

}

function PostAutoresId(req, res, next)
{
    const {id} = req.params;
    if (!id) {
        res.status(404)
        send('param id no fue enviado')
    }
    if(!autores.find(autor => autor.id === id))
    {
        res.status(404)
        send('Autor no encontrado')
    }
    next();
}

function PostAutoresValidator(req, res, next) {
    const { body } = req;
    if (!body) {
        res.status(409)
            .send('body vacio')
    }
    autores.forEach(autor => {
        if (autor.nombre === body.nombre && autor.apellido === body.apellido) {
            res.status(409)
                .send('Autor ya registrado')
        }
    });
    next();
}

