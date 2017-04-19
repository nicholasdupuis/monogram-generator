// Used to determine whether or not the canvas currently has text on it
var cleanCanvas = true;

// Draws text in the center of the canvas
function _drawOnCanvas(text) {
  var initials = text.toUpperCase().substring(0,3).split('');

  var centerX = monogramCanvas.width/2;
  var centerY = monogramCanvas.height/2;

  //draw left initial
  canvasContext.font = '48px monogramkk';
  canvasContext.fillText(initials[0], centerX - 50, centerY);

  //draw center initial
  canvasContext.font = '72px monogramkk';
  canvasContext.fillText(initials[2], centerX, centerY);

  //draw right initial
  canvasContext.font = '48px monogramkk';
  canvasContext.fillText(initials[1], centerX + 50, centerY);

  cleanCanvas = false;
}

// Clears out the canvas
function _clearCanvas() {
  canvasContext.clearRect(0, 0, monogramCanvas.width, monogramCanvas.height);
  cleanCanvas = true;
}

// Get user input
function _getInputText() {
  return document.getElementById('initial-input').value;
}

// Set the value of the initials input
function _setInputText(str) {
  document.getElementById('initial-input').value = str;
}

// Clears out the initials input
function _deleteInputText() {
  _setInputText('');
}
