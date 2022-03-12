// requiring express
const express = require('express');
const bodyParser = require('body-parser');

let calculatorInputs = {
    inputOne: [],
    inputTwo: [],
  };

// make a server
const app = express();
const PORT = 5000;

// serve static files
app.use(express.static('server/public'));

//start the server
app.listen(PORT, function () {
    console.log('server running on port', PORT)
});

//bodyParser config!
app.use(bodyParser.urlencoded({ extended: true }));

// GET & POST Routes go here
app.post('/calculator', (req, res) => {
    console.log(`POST calculator`, req.body);
    
    res.sendStatus(201);
})

app.get('/calculator', (req, res) => {
    console.log('GET calculator');
    res.send(calculatorInputs);
  })