let arr = [];
let canvasX = 600;
let numTile = 10;
let rows = numTile;
let cols = numTile;

function setup() {
  createCanvas(canvasX, canvasX);
  console.log(arr);
  //initiate the array
  make2dArr(rows, cols);
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


function checkNeighbSum(x, y, prevArr){
  let sum = 0;
  for (i = -1; i < 2; i++){
    for (j = -1; j < 2; j++){
      let tempX = (x + i);
      let tempY = (y + j);
      
      // console.log(tempX, 'this is X');
      // console.log(tempY, 'this is Y');
      
      if (tempX < 0 || tempY < 0 || tempX > rows-1 || tempY > cols-1 || (tempX == x && tempY == y)){
        
        sum = sum;
        // console.log(sum,i,j, 'avoid');
        // console.log(' ');
      }
      else{
        
        sum = sum + prevArr[tempY][tempX];
        // console.log(prevArr[tempY][tempX], 'this is the ar val');
        // console.log(sum,i,j, 'logged');
        // console.log(' ');
      }
      
    }
  }
  return sum
}



function draw() {
  background(220);
  
  let sideX = canvasX / numTile;
  
  for (x = 0; x < rows; x++){
    for (y = 0; y < cols; y++){
      console.log(checkNeighbSum(x,y,arr));
    }
  }
  
  
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