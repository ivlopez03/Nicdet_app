import express from 'express';
const app = express();

app.listen('8000', function() {
    console.log("Hello world!")
});


//configuracion archivos estaticos




app.get('/', function(req, res) { 
    res.send('Hello world!');
});  