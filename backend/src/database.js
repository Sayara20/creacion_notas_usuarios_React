const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/mernstack'; crea la base de datos

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI :
    'mongobd://localhost/databasetest';
//console.log(process.env.MONGODB_URI);


mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true



});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB is connected');
});