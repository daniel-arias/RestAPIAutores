const express = require('express');
const bodyParser = require('body-parser');
const server = express();

// const middlewares = 
const 
{
    autores, 
    GetAutoresValidator,
    PostAutoresValidator,
    PostAutoresId
} = require('./middlewares');


server.listen(3000, () => {
    console.log('Start Server...');
});

//Flow Middlewares
server.use(bodyParser.json());


server.get('/autores/:id/libros',(req,res)=>{
    const libros = middlewares.autores.find((item)=> {
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
server.get('/autores', GetAutoresValidator, (req, res) => {
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

server.post('/autores', PostAutoresValidator , (req, resp) =>
{
    const {body } = req;
    autores.push(body);
});

server.delete('/autores/:id', (req, res) => {
    const id = req.params.id;
    const autor = autores.find(autor => autor.id.toString() === id.toString());
    const index = autores.indexOf(autor);
    autores.splice(index, 1);
});