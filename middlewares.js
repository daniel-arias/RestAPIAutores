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
];

//middleware Autores
function GetAutoresValidator(req, res, next) {
    if (!autores.length) {
        res.status(204)
        .json({})
    }
    next();
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
    autores.find(autor => autor.nombre === body.nombre && autor.apellido === body.apellido) ? 
        res.status(409).send('Autor ya registrado')
        :
        next();
}

module.exports = {
    autores,
    GetAutoresValidator,
    PostAutoresValidator,
    PostAutoresId
}