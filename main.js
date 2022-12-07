var mouseEvent = "";
var lastPositionOfX, lastPositionOfY;
var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;



canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
widthOfLine = 2;

if (width < 992) {
  document.getElementById("myCanvas").width = newWidth;
  document.getElementById("myCanvas").height = newHeight;
  document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e) {
  console.log("myTouchStart");
  last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
  last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
  console.log("myTouchStart");
}
canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) {
  console.log("myTouchMove");
  currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
  currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = widthOfLine;

  console.log("Last position of x and y coordinates = ");
  console.log("x=" + lastPositionOfX + "y =" + lastPositionOfY);
  ctx.moveTo(lastPositionOfX, lastPositionOfY);

  console.log("Current position of x and y coordinates=");
  console.log(
    "x=" + currentPositionOfTouchX + "y = " + currentPositionOfTouchY
  );
  ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
  ctx.stroke();

  lastPositionOfX = currentPositionOfTouchX;
  lastPositionOfY = currentPositionOfTouchY;
}

var widthOfLine = 5;
var color = "blue";
varentPositionOfMouseX = 0;
currentPositionOfMouseY = 0;

lastPositionOfX = 0;
lastPositionOfY = 0;

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
  // color = document.getElementById("color").value;
  //widthOfLine = document.getElementById("widthOfLine").value;
  mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
  mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
  currentPositionOfMouseX = e.clientX - canvas.offsetLeft;
  currentPositionOfMouseY = e.clientY - canvas.offsetTop;

  if (mouseEvent == "mousedown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = widthOfLine;

    console.log("last position of x and y coordinates = ");
    console.log("x = " + lastPositionOfX + "y=" + lastPositionOfY);
    ctx.moveTo(lastPositionOfX, lastPositionOfY);

    console.log("Current position of x and y coordinates = ");
    console.log("x = " + currentPositionOfMouseX + "y=" + currentPositionOfMouseY);
    ctx.lineTo(currentPositionOfMouseX, currentPositionOfMouseY);
    ctx.stroke();
  }

  lastPositionOfX = currentPositionOfMouseX;
  lastPositionOfY = currentPositionOfMouseY;
}

