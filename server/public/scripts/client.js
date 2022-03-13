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
  // the user puts into the calculator to the server, then getting a response back from the server
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

function getCalculatorInputs() { // This function contains two get requests with two corresponding
  // responses from the server 
  console.log('Getting Calculator Inputs...');
  $.ajax({
    url: '/calculator',
    method: 'GET',
  }).then(function (response) {
    
    //response is res.send(stuff), in this case calculator inputs
    console.log(response);
    //append the calculator inputs in the response to the DOM
    render(response);
  }).catch(function (error) {
    console.log(error);
    alert('error in get!');
  })

  $.ajax({
    url: '/answers',
    method: 'GET',
  }).then(function (response) {
    
    //response is res.send(stuff), in this case the user's answers
    console.log(response);
    displayAnswer(response);
  })

  console.log('end of get function...');
}

function render(calculations) { // This function appends the calculator inputs to the dom
  //wash away old data:
  $('#calculation').empty();
  //put new data on the DOM
  for (let input of calculations) {
    $('#calculation').append(`<li>${input}</li>`);
  }
}
let button;

function userOperator() { // This function makes it so the correct mathematical operation is
  // performed depending on what button is clicked by the user
  button = $(this).text();
}

function displayAnswer(userAnswers) { // This function allows the user's answers from their calculation 
  // to be displayed on the DOM
  $('#answerList').empty();
  $('#answerList').append(userAnswers[userAnswers.length-1]);
}

function clearInputs() { // This function makes it so that when the clear button is clicked
  // on by the user, their calculator inputs will be cleared
  $('input').val('');
}
