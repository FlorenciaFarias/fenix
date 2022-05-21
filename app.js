const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.listen(port, () => console.log(`Servidor funcionando ${port}!`));

const mainRoutes = require('./src/routes/mainRouter');
const userRoutes = require('./src/routes/userRouter');
const serviceRoutes = require('./src/routes/serviceRouter');

// view engine setup
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './src/views'));


//Rutas
app.use('/', mainRoutes);
app.use('/usuarios',userRoutes);
app.use('/servicios',serviceRoutes);
