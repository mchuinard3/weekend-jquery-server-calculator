$(document).ready(handleReady);

function handleReady() {
    console.log("jquery is loaded!")
    $(`#submit`).on(`click`, handleSubmit);
    $('#restart').on('click', '#restartButton', restartGame);
    $.ajax({
      url: '/random',
      method: 'GET',
    }).then(function (response) {
      console.log(response);
      randomNum = response.randomNumber;
    })
  
  }