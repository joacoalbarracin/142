const express = require('express'); // Requerimos el módulo express
const path = require('path'); // Requerimos el módulo path
const app = express(); // Ejecutamos el módulo express
const mainRouter = require('./routes/mainRouter'); // Requerimos el módulo mainRouter
//const userRouter = require('./routes/userRouter'); // Requerimos el módulo userRouter
const methodOverride = require('method-override'); // Requerimos el módulo method-override
const session = require('express-session'); // Requerimos el módulo express-session
//const logs = require('./middlewares/logs') //Traemos el middleware del log
const cookie = require('cookie-parser')

app.use(express.urlencoded({extended: false})); // Para leer lo que llega en el req.body
app.use(express.json()); // Para leer lo que llega en el req.body
app.use(express.static('public')); // Para servir archivos estáticos
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE
app.use(cookie())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
})); // Para poder usar las sesiones
//app.use(logs)


app.set('views', path.join(__dirname,'../views')); // Para indicar la ruta de la carpeta de las vistas
app.set('view engine', 'ejs'); // Para indicar el motor de plantillas

app.listen(process.env.PORT ||3014, ()=>{ // Levanta servidor en el puerto 3088
    console.log( 'Servidor corriendo en puerto 3014'); // Para mostrar un mensaje en la consola
});

app.use(mainRouter); // Para indicar que use el módulo mainRouter
//app.use(userRouter); // Para indicar que use el módulo userRouter
