$(document).ready(handleReady);

function handleReady() { // This function will call other functions
  // depending on what button is clicked
  console.log("jquery is loaded!")
  $('#plusBtn').on(`click`, handleSubmit);
  $('#minusBtn').on(`click`, handleSubmit);
  $('#multiplyBtn').on(`click`, handleSubmit);
  $('#divideBtn').on(`click`, handleSubmit);
  $('#equalBtn').on(`click`, handleSubmit);
  $('#clearBtn').on(`click`, handleSubmit);
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
    $('#mathOne').val('');
    $('#mathTwo').val('');
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

  console.log('end of get function...');
}

function render(calculations) { //This function appends the calculator inputs to the dom
  //wash away old data
  $('#calculation').empty();
  //put new data on the DOM
  for (let input of calculations) {
    $('#calculation').append(`<li>${input.calculatorInputOne} ${input.calculatorInputTwo}</li>`);
  }
}

function addition() {

}
