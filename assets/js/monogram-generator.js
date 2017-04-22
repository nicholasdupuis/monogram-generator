// Called when the 'Generate' button is clicked
function generateMonogram() {
  // Clear the canvas if dirty
  if (!isCanvasClean()) {
    _clearCanvas();
  }

  // Get the input text and draw it
  var inputText = _getInputText();
  _drawOnCanvas(inputText);
 }

// Called when the 'Reset' button is clicked
function resetMonogram() {
  _deleteInputText();
  _clearCanvas();
}

// Called when download button is clicked
function downloadMonogram (elem) {
  if (!cleanCanvas) {
    elem.href = monogramCanvas.toDataURL();
    elem.download = 'monogram.png'
  }
}
