$(document).ready(handleReady);

function handleReady() { // This function will call other functions
  // depending on what button is clicked
  console.log("jquery is loaded!")
  $('.operator').on(`click`, userOperator);
  $('#equalBtn').on(`click`, handleSubmit);
  $('#clearBtn').on(`click`, clearInputs);
  getCalculatorInputs();
}

function handleSubmit() { // This function is sending the numbers that
  // the user puts into the calculator to the server
  let calculatorInputOne = $('#mathOne').val();
  let calculatorInputTwo = $('#mathTwo').val();

  console.log(calculatorInputOne, calculatorInputTwo);

  $.ajax({
    url: '/calculator',
    method: 'POST',
    data: {
      calculatorInputOne: calculatorInputOne,
      button: button,
      calculatorInputTwo: calculatorInputTwo
      
    }
  }).then(function (response) {
    console.log(response);
    getCalculatorInputs();
    // $('#mathOne').val('');
    // $('#mathTwo').val(''); // removed these input field clears
    // to comply with assignment instructions
  })
}

function getCalculatorInputs() { // This function contains a get 
  // request 
  console.log('Getting Calculator Inputs...');
  $.ajax({
    url: '/calculator',
    method: 'GET',
  }).then(function (response) {
    
    //response is res.send(stuff), in this case calculator inputs
    console.log(response);
    //append the quotes in the response to the DOM
    render(response);
  }).catch(function (error) {
    console.log(error);
    alert('error in get!');
  })

  $.ajax({
    url: '/answers',
    method: 'GET',
  }).then(function (response) {
    
    //response is res.send(stuff), in this case calculator inputs
    console.log(response);
    displayAnswer(response);
  })

  console.log('end of get function...');
}

function render(calculations) { //This function appends the calculator inputs to the dom
  //wash away old data
  $('#calculation').empty();
  //put new data on the DOM
  for (let input of calculations) {
    $('#calculation').append(`<li>${input}</li>`);
  }
}
let button;

function userOperator() {
  button = $(this).text();
}

function displayAnswer(userAnswers) {
  $('#answerList').empty();
  $('#answerList').append(userAnswers[userAnswers.length-1]);
}

function clearInputs() {
  $('input').val('');
}
