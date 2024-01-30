const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const sqlite3 = require('sqlite3');
const db = require('knex')({
        client:'sqlite3',
        connection:{
            filename:'./server/BD_M13.db'
        }
    }
);

app.get("/api", (req, res) => {
    res.json({ message: "Hola desde el servidor!" });
});

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

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});

module.exports = app;
