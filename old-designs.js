const pixelCanvas = $('#pixelCanvas');
const sizePicker = $('#sizePicker');

function makeGrid(){
  // Clear previous grid
  $('tbody').remove();
  // Select size input
  let m = $('#inputHeight').val();
  let n = $('#inputWidth').val();
  // Create grid
  for (let i = 0; i < m; i++)
    pixelCanvas.append('<tr></tr>');
  for (let j = 0; j < n; j++)
    $('tr').append('<td></td>');
  };

 // When size is submitted by the user, call makeGrid()
sizePicker.submit(function(event) {
  event.preventDefault();
  makeGrid();
  });

// When a square is clicked,
// change the color to the color selected in the color picker
pixelCanvas.click(function(event) {
  // Select color input
   let pixelColor = $('#colorPicker').val();
  $(event.target).closest('td').css('background-color', pixelColor);
  });
