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

let userHistory = [];
let userAnswers = [];

// GET & POST Routes go here
app.post('/calculator', (req, res) => {
    console.log(`POST calculator`, req.body);

   

    //200 means OK
    //201 means CREATED
    res.sendStatus(201);
    calculate(req.body);
})

app.get('/calculator', function (req, res) {
    // /calculator route
    // get route to /calculator

    console.log('GET /calculator');
    // server must respond!
    res.send(userHistory);
});

app.get('/answers', function (req, res) {
    // /answers route
    // get route to /answers

    console.log('GET /answers');
    // server must respond!
    res.send(userAnswers);
});

function calculate(solution) { // This function pushes both the history of the user's calculations, as well as the
    // answer to their most recent calculation into two separate empty arrays, known as userHistory and userAnswers
    let input1 = (solution.calculatorInputOne);
    let button = (solution.button);
    let input2 = (solution.calculatorInputTwo);

    switch(button) {
        case '+':
            answer = (Number(input1) + Number(input2));
            userHistory.push(`${input1} + ${input2} = ${answer}`);
            userAnswers.push(answer);
            break;
        case '-':
            answer = (Number(input1) - Number(input2));
            userHistory.push(`${input1} - ${input2} = ${answer}`);
            userAnswers.push(answer);
            break;
        case '*':
            answer = (Number(input1) * Number(input2));
            userHistory.push(`${input1} * ${input2} = ${answer}`);
            userAnswers.push(answer);
            break;
        case '/':
            answer = (Number(input1) / Number(input2));
            userHistory.push(`${input1} / ${input2} = ${answer}`);
            userAnswers.push(answer);
            break;
    }
    
}