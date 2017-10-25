document.addEventListener('DOMContentLoaded', function() {
  const list = ['a', 'b', 'c'];
}, false);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function correct() {
  alert("Correct!");
}

$(document).ready( function() {
  // names from names.js
  const correct_index = getRandomInt(0, names.length);
  const name = names[correct_index];
  const filepath = "images/B_" + name + ".JPG";
  const image_elem = '<img width="200px" id="pic" src="' + filepath + '">';
  console.log(image_elem);
  $('#pic').html(image_elem);
  //var guess_values = [];
  //$().append('<input type="radio" name="nameguess"> Name1<br>');
  correct_line = '<input type="radio" name="nameguess" onClick="correct()">' +  name + '<br>'
      //$('#guesslist').append(guess_line)
  $('#guesslist').append(correct_line)
})
