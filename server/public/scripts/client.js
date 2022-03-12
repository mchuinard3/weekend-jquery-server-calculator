$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")
  $('#plusBtn').on(`click`, handleSubmit);
  $('#minusBtn').on(`click`, handleSubmit);
  $('#multiplyBtn').on(`click`, handleSubmit);
  $('#divideBtn').on(`click`, handleSubmit);
  $('#equalBtn').on(`click`, handleSubmit);
  $('#clearBtn').on(`click`, handleSubmit);
  getCalculatorInputs();


}

function handleSubmit() {
  let firstMathInput = $('#mathOne').val();
  let secondMathInput = $('#mathTwo').val();

  $.ajax({
    url: '/calculator',
    method: 'POST',
    data: {
      calculatorInputOne: firstMathInput,
      calculatorInputTwo: secondMathInput,
    }
  }).then(function (response) {
    console.log(response);

    $('#mathOne').val('');
    $('#mathTwo').val('');
    getCalculatorInputs();

  })


}

function getCalculatorInputs() {
  $.ajax({
    url: '/calculator',
    method: 'GET',
  }).then(function (response) {
    console.log(response);
    render(response);
  })
}

function 