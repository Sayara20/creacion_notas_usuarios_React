const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000);


//middlewere
app.use(cors());
app.use(express.json());

//routers

app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));
//app.get('/api/users', (req, res) => res.send('Users Rutas'))
//app.get('/api/notas', (req, res) => res.send('Notas Routes'))






module.exports = app;