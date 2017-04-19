// Set the canvas to a constant since this will never change
const monogramCanvas = document.getElementById('monogram-canvas');
const canvasContext = monogramCanvas.getContext('2d');

// Initial setup of canvas
canvasContext.textAlign = 'center';
canvasContext.textBaseline = 'middle';
canvasContext.fillStyle = 'black';

// Called when the 'Generate' button is clicked
function generateMonogram() {
  // Clear the canvas if dirty
  !cleanCanvas ? _clearCanvas() : setTimeout(Function.prototype, 10000);

  // Get the input text and draw it
  var inputText = _getInputText();
  _drawOnCanvas(inputText);
 }

// Called when the 'Reset' button is clicked
function resetMonogram() {
  _deleteInputText();
  _clearCanvas();
}

function downloadMonogram (elem) {
  if (!cleanCanvas) {
    elem.href = monogramCanvas.toDataURL();
    elem.download = 'monogram.png'
  }
}
