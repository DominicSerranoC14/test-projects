// Add event listener to button to make ball bounce

//create reference to get ball element
var getBall = document.getElementById('ball');

//create reference to bounce button
var bounceBtn = document.getElementById('bounceBtn');
//add event listener to bounce button
bounceBtn.addEventListener('click', function() {
  // getBall.classList.toggle('ballBounce');
  getBall.className = 'ball';
  getBall.classList.toggle('ballBounce');

  //dynamically create reset button and create a reference to it
  var resetBtn = document.createElement('button');
  resetBtn.setAttribute('id', 'resetBtn');
  resetBtn.innerHTML = 'Reset Ball';
  //add event listener to reset button
  resetBtn.addEventListener('click', handleReset);
  //replace bounce ball button with reset button
  bounceBtn.parentNode.replaceChild(resetBtn, bounceBtn);
});

//define function to reset ball to original postion
function handleReset() {
  getBall.className = 'ball';
  getBall.classList.toggle('ballReset');

  //replace reset button with bounce button
  var resetBtn = document.getElementById('resetBtn');
  resetBtn.parentNode.replaceChild(bounceBtn, resetBtn);

}




//create reference to change color of ball
var changeColorBtn = document.getElementById('changeColorBtn');
//add event listener to button change the color of the ball randomly
changeColorBtn.addEventListener('click', handleRandomColor);
//create function to generate random color
function handleRandomColor() {
  var randomNumber = function() {
    return Math.floor(Math.random() * (255 - 1 + 1)) + 1;
  }
  var red = randomNumber();
  var green = randomNumber();
  var blue = randomNumber();
  var alpha = (Math.random() * (((10 - 1 + 1)) + 1) * .1);
  getBall.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};


//create reference to square button
var toSquareBtn = document.getElementById('changeToSquare');
//add event listener to toSquareBtn button
toSquareBtn.addEventListener('click', function() {
  getBall.className = 'square';
  getBall.classList.toggle('toSquare');
  // getBall.classList.remove('ball', 'toCircle');
});

//create reference to circle button
var toCircleBtn = document.getElementById('changeToCircle');
//add event listener to toCircleBtn button
toCircleBtn.addEventListener('click', function() {
  getBall.className = 'ball';
  getBall.classList.add('toCircle');
  // getBall.classList.remove('square', 'toSquare');
});
