var color = document.getElementById("colorBrush");
var size = document.getElementById("brushSize");
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

ctx.strokeStyle = color.value;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = size.value;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var isDrawing = false;
var lastX = 0;
var lastY = 0;

function draw(e) {
  
  if (isDrawing == false) 
  {
    return;
  }
  console.log(e);
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  [lastX, lastY] = [e.clientX, e.clientY];
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.clientX, e.clientY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
color.addEventListener('change', () => ctx.strokeStyle = color.value);
size.addEventListener('change', () => ctx.lineWidth= size.value);