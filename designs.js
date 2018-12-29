const pixelCanvas = document.getElementById('pixelCanvas');
//const sizePicker = $('#sizePicker');

function clearGrid(){
  let x = document.getElementById('pixelCanvas').rows.length;
  for (let i = 0; i < x; i++)
    pixelCanvas.removeChild(pixelCanvas.childNodes[0]);
};

function makeGrid(){
  // Select size input
  let m = document.getElementById('inputHeight').value;
  let n = document.getElementById('inputWidth').value;
  // Create grid
  for (let i = 0; i < m; i++){
    let tableRow =  document.createElement('TR');
    tableRow.setAttribute('id', 'row' + i);
    pixelCanvas.append(tableRow);
    for (let j = 0; j < n; j++){
      let tableColumn = document.createElement('TD');
      tableColumn.setAttribute('class', 'box');
      let gridBox = document.getElementById('row'+i);
      gridBox.append(tableColumn);
      }
    }
  };

function changeColor(evt) {
    console.log('I was clicked: ' + evt.target);
    let newColor = document.getElementById('colorPicker').value;
    evt.target.style.backgroundColor = newColor;
};

 // When size is submitted by the user, call makeGrid()
function submitSize(){
  event.preventDefault();
  clearGrid();
  makeGrid();
  };
document.getElementById('sizePicker').onsubmit = submitSize;
pixelCanvas.addEventListener('click', changeColor);

// When a square is clicked,
// change the color to the color selected in the color picker
/*
pixelCanvas.click(function(event) {
  // Select color input
  });
*/
