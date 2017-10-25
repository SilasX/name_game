function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function correct() {
  alert("Correct!");
}

function wrong() {
  alert("Wrong!");
}

function initializeChallenge() {
  // Clear contents of #guesslist
  $('#guesslist').html("");
  const correct_index = getRandomInt(0, names.length);
  const name = names[correct_index];
  const filepath = "images/B_" + name + ".JPG";
  const image_elem = '<img id="pic" src="' + filepath + '">';
  $('#pic').html(image_elem);
  //var guess_values = [];
  //$().append('<input type="radio" name="nameguess"> Name1<br>');
  const correct_line = '<input type="radio" name="nameguess" onClick="correct()">' +  name + '<br>';
  correct_name_position = getRandomInt(0, 4);
  // Append four radio-button choices to the 
  for (var i=0; i < 4; i++) {
    var wrong_index = getRandomInt(0, names.length);
    // move it one if it got the correct index, modulo the name length
    if (i === correct_name_position) {
      $('#guesslist').append(correct_line);
    } else {
      if (wrong_index === correct_index) {
        wrong_index = (wrong_index + 1) % names.length;
      }
      var wrong_line = '<input type="radio" name="nameguess" onClick="wrong()">' + names[wrong_index] + '<br>';
      $('#guesslist').append(wrong_line)
    }
  }
}

$(document).ready( function() {
  initializeChallenge();
})
