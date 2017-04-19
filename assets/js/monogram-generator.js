// Set the canvas to a constant since this will never change
const monogramCanvas = document.getElementById('monogram-canvas');
const canvasContext = monogramCanvas.getContext('2d');

// Initial setup of canvas
canvasContext.font = '30px Arial';
canvasContext.textAlign = 'center';
canvasContext.fillStyle = 'red';

// Used to determine whether or not the canvas currently has text on it
var cleanCanvas = true;

// Draws text in the center of the canvas
function _drawOnCanvas (text) {
  canvasContext.fillText(text, monogramCanvas.width/2, monogramCanvas.height/2);
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
