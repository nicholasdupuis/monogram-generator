// Set the canvas to a constant since this will never change
const monogramCanvas = document.getElementById('monogram-canvas');
const canvasContext = monogramCanvas.getContext('2d');

// Initial setup of canvas
canvasContext.textAlign = 'center';
canvasContext.fillStyle = 'red';

// Called when the 'Generate' button is clicked
function generateMonogram() {
  // Get the input value text
  var inputText = _getInputText();

  // Clear the canvas if dirty
  !cleanCanvas ? _clearCanvas() : setTimeout(Function.prototype, 10000);

  if (cleanCanvas) {
    _drawOnCanvas(inputText);
  } else {
    _clearCanvas();
    _drawOnCanvas(inputText);
  }
 }

// Called when the 'Reset' button is clicked
function resetMonogram() {
  _deleteInputText();
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
     downloadCanvas(this, 'monogram.png');
   }
 }, false);
