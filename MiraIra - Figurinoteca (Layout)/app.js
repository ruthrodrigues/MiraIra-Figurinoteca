const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { isHome: true });
});

app.get('/figurinos', (req, res) => {
    res.render('figurinos', { isHome: false });
});

app.get('/bolsistas', (req, res) => {
    res.render('bolsistas', { isHome: false });
});

app.get('/perfil', (req, res) => {
    res.render('perfil', { isHome: false }); 
});

app.listen(8000, () => {
    console.log('Servidor rodando em http://localhost:8000');
});
