let arr = [];
let canvasX = 1100; //900
let canvasY = 1920;
let numTile = 220; //180
let rows = numTile; //numTile
let cols = numTile; //numTile
let new2dArr = [];




function setup() {
  createCanvas(canvasX, canvasX); //canvasX, canvasX
  console.log(arr);
  //initiate the array
  make2dArr(rows, cols);
}

function make2dArr(rows, cols){
  for (i = 0; i < rows; i++){
    arr[i] = [];
    new2dArr[i] = [];
    for (j = 0; j < cols; j++){
      arr[i].push(floor(random(2)));
    }
  }
  return arr && new2dArr;
}

function checkNeighbSum(x, y, prevArr){
  let sum = 0;
  for (i = -1; i < 7; i+= 2){ // i+= 1
    for (j = -1; j < 2; j+=2){
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
        
        sum = sum + prevArr[tempX][tempY];
        // console.log(prevArr[tempY][tempX], 'this is the ar val');
        // console.log(sum,i,j, 'logged');
        // console.log(' ');
      }
      
    }
  }
  return sum
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    let number = 800 % rows;
    let radius = 400;

    for (i = 30; i < number; i++){
      for (j = 30; j < number; j++){
        if ((Math.floor(Math.sqrt(i * i + j * j)) <= radius)){
          arr[i][j] = 1;
        }
      }
    }
  }
}

function draw() {
  background(0);
  
  let sideX = canvasX / numTile;
  
  for (i = 0; i < rows; i++){
    for (j = 0; j < cols; j++){
      if (arr[i][j] == 1){
        noStroke();
        fill(255);
        circle(i * sideX, j * sideX, sideX);
      }
      else{
        noStroke();
        fill(0);
        circle(i * sideX, j * sideX, sideX);
      }
    }
  }
  
  
  // rewrite thew new array
  
  for (x = 0; x < rows; x++){
    for (y = 0; y < cols; y++){
      currNeighNum = checkNeighbSum(x,y,arr);
      currNum = arr[x][y];

      // try 1, 2, 3, 4, 5, 6 for currNeighNum // 4 is original
      if (currNum == 0  && currNeighNum == 4){
        new2dArr[x][y] = 1;
      }
      else if (currNum == 1 && (currNeighNum > 7 || currNeighNum < 4)){
        new2dArr[x][y] = 0;
      }
      else {
        new2dArr[x][y] = currNum;
      }
      // new2dArr[x][y] = checkNeighbSum(x,y,arr);
      // console.log(new2dArr);
    }
  }
  
  arr = new2dArr;
  

  if (millis() % 2 == 0){
    make2dArr(rows, cols);
  }

  console.log(second())
  
  
  // console.log(arr);
  
  // noLoop();
}

