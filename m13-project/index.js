const express = require('express')
const app = express()
const  path = require('path')
//settings
app.set('port', 3000)

app.use(express.static(path.join(__dirname, 'public')))
console.log(__dirname)
//router
app.get('/', (req, res)=>{
    res.send('Bienvenidos')
})
app.listen(app.get('port'), ()=>{
    console.log(`Current application in port ${app.get('port')}`)
})
