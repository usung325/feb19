let arr = [];
let canvasX = 600;
let numTile = 40;
let rows = numTile;
let cols = numTile;

function setup() {
  createCanvas(canvasX, canvasX);
  console.log(arr);
}


function make2dArr(rows, cols){
  for (i = 0; i < rows; i++){
    arr[i] = [];
    for (j = 0; j < cols; j++){
      arr[i].push(floor(random(2)));
    }
  }
  return arr;
}


function draw() {
  background(220);
  let sideX = width / numTile;
  make2dArr(rows, cols);
  
  for (i=0; i<rows; i++){
    for (j = 0; j < cols; j++){
      if (arr[i][j] == 0){
        fill(255);
        square(i * sideX, j * sideX, sideX);
      }
      else{
        fill(0);
        square(i * sideX, j * sideX, sideX);
      }
    }
  }
  // console.log(arr);
  noLoop();
}