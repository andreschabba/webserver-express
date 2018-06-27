const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//helpers
// hbs.registerHelper('getAnio', () => {
//     return new Date().getFullYear();
// });
// hbs.registerHelper('capitalizar', (texto) => {
//     let palabras = texto.split(' ');
//     palabras.forEach((palabra, idx) => {
//         palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
//     })
//     return palabras.join(' ');
// });

// app.get('/', (req, res) => {
//     //   res.send('Hello World')
//     let salida = {
//         nombre: 'Andres',
//         edad: 19,
//         url: req.url
//     };
//     res.send(salida);
// });

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Andres'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});