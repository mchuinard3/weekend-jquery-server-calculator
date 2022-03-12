// requiring express
const express = require('express');
const bodyParser = require('body-parser');

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

let userArray = [];
let userAnswers = [];

// GET & POST Routes go here
app.post('/calculator', (req, res) => {
    console.log(`POST calculator`, req.body);
    
let input1 = (req.body.calculatorInputOne);
let button = (req.body.button);
let input2 = (req.body.calculatorInputTwo);


    userArray.push(req.body);
    
    //200 means OK
    //201 means CREATED
    res.sendStatus(201);
})

app.get('/calculator', function (req, res) {
    // /calculator route
    // get route to /calculator

    console.log('GET /calculator');
    // server must respond!
    res.send(userArray);
});