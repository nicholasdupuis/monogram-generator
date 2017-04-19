// Set the canvas to a constant since this will never change
const monogramCanvas = document.getElementById('monogram-canvas');
const canvasContext = monogramCanvas.getContext('2d');

// Initial setup of canvas
canvasContext.textAlign = 'center';
canvasContext.fillStyle = 'red';

// Used to determine whether or not the canvas currently has text on it
var cleanCanvas = true;

// Draws text in the center of the canvas
function _drawOnCanvas (text) {
  var initials = text.substring(0,3).split('');

  var centerX = monogramCanvas.width/2;
  var centerY = monogramCanvas.height/2;

  //draw left initial
  canvasContext.font = '24px serif';
  canvasContext.fillText(initials[0], centerX - 30, centerY);

  //draw center initial
  canvasContext.font = '36px serif';
  canvasContext.fillText(initials[2], centerX, centerY);

  //draw right initial
  canvasContext.font = '24px serif';
  canvasContext.fillText(initials[1], centerX + 30, centerY);

  cleanCanvas = false;
}

// Clears out the canvas
function _clearCanvas () {
  canvasContext.clearRect(0, 0, monogramCanvas.width, monogramCanvas.height);
  cleanCanvas = true;
}

// Called when the 'Generate' button is clicked
function generateMonogram() {
  // Get the input value text
  var inputText = document.getElementById('initial-input').value;

  !cleanCanvas ? _clearCanvas() : console.log('no op');

  if (cleanCanvas) {
    _drawOnCanvas(inputText);
  } else {
    _clearCanvas();
    _drawOnCanvas(inputText);
  }
 }

// Called when the 'Reset' button is clicked
function resetMonogram() {
  // Clear text box
  document.getElementById('initial-input').value = '';

  _clearCanvas();
}

// Downloads the canvas to user's device
function downloadCanvas(link, filename) {
    link.href = monogramCanvas.toDataURL();
    link.download = filename;
}

/**
 * Download the canvas as an image to the user's device.
 * Credit goes to https://jsfiddle.net/AbdiasSoftware/7PRNN/
 */
 document.getElementById('download-button').addEventListener('click', function() {
   if (!cleanCanvas) {
     downloadCanvas(this, 'test.png');
   }
 }, false);
