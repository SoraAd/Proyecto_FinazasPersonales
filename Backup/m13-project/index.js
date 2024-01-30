var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Se carga el modulo de sqlite3
const sqlite3 = require('sqlite3');
const e = require("express");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('port', 3000)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const testAPIRouter = require("./routes/testAPI");

app.use('./routes/users', usersRouter);
app.use("./routes/testAPI", testAPIRouter);


app.get('/', (req, res)=>{
    res.send('Bienvenidos')
})
app.listen(app.get('port'), ()=>{
    console.log(`Current application in port ${app.get('port')}`)
})
//se carga el modulo de knex
//se inicializa el knex con sqlite3


const db = require('knex')({
        client:'sqlite3',
        connection:{
            filename:'BD_M13.db'
        }
    }
);

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

//RUTAS DEL USUARIO

//Rutas para films
app.get('/api/movimientos/',function (req, res){
    db.select('m.id','m.cantidad','m.categoria','m.fecha','m.descripcion','m.tipo')
        .from('Movimientos as m')
        .then( function (data){
            data = {movimientos:data}
            res.send(data)
        })
        .catch(function (error) {
            console.log(error)
        })

});

app.post('/api/movimientos/',function (req,res){
    let data_form = req.body;
    console.log(' app.je app.post().Params:',data_form)

    db.insert(data_form)
        .into('Movimientos')
        .then( function (data){
            res.json(data)
        }).catch(function (error){
        console.log(error)
    });

});

// Seleccion por id
app.get('/api/movimientos/:id',function (req,res){

    //where id=parametro_id
    //Como es un string lo convertimos a entero
    //porque el campo actors es entero, no es cadena
    let id =parseInt(req.params.id);
    db.select('m.id','m.cantidad','m.categoria','m.fecha','m.descripcion','m.type','f.director','f.img')
        .from('Movimientos as m')
        .where('m.id',id)
        .then( function (data){
            data = {movimientos:data}
            res.send(data);
        }).catch(function (error){
        console.log(error)
    });
});
// Delete por id
app.delete('/api/movimientos/:id',function (req,res){

    //where id=parametro_id
    //Como es un string lo convertimos a entero
    //porque el campo actors es entero, no es cadena
    let id =parseInt(req.params.id);
    console.log('Se borrarara el elemento con id'+ id);
    db.delete()
        .from('Movimientos')
        .where('id',id)
        .then(function (data){
            res.json(data);
            data = {movimientos:data}
        }).catch(function (error){
        console.log(error)
    })
});

// Se hace un endpoint con POST para un album con id concreto
app.post('/api/m/:id', function (req,res){
    let id = req.params.id;
    let movimientoData = req.body;
    db('Movimientos')//tabla a actualizar
        .update(movimientoData)
        .where('id',id)
        .then(function (data){
            res.send(data)
        })
        .catch(function (error){
            console.log('ERROR',error)
        })
})

//Pedir los datos completos de todas las films
//SELECT a.id,a.name,f.name as 'film',a.birth_date,a.nationality,a.years_active FROM actors a JOIN films f ON a."cast" = f.id;
app.get('/api/movimientos/all',function (req,res){

    db.select('m.id','m.cantidad','m.fecha',"m.descripcion","m.tipo",'c.id as categoria','c.nombre_categoria')
        .from ('Movimientos as m')
        .join('Categorias as c','c.id','m.categoria')
        .then(function (data){
            console.log(data);
            res.json(data);
        })
        .catch(function (error){
            console.log(error);
            res.send(error);
        })
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
