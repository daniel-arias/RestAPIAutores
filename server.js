const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.listen(3000, () => {
    console.log('Start Server...');
})

const autororesDA = [
    {

    }
]

//middleware Autores
function GetAutoresValidator(req, res, next)
{

}

function PostAutoresValidator(req, res, next)
{
    const {body} = req;
    if (!body) {
        next(err);
    }
    autores.forEach(autor => {
        if(autor.nombre === body.nombre && autor.apellido === body.apellido)
        {
            next(err);
        }
    });
}