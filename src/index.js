const express = require('express');
const app = express();
const path = require('path');
//configuraciones
app.set('port',3000);
//app.set('view',path.join(__dirname,'view'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);// procesa el html 
app.set('views',path.join(__dirname, 'views'));

//middlewares
   

//rutas
app.use(require('./routes/index'));
//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//escuchando el servidor
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
    //console.log(path.join(__dirname,'public'));
})