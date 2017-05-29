var size = 100;
var density = 0.3;

var grid = new Grid();

function addOrNot(density){
  if (Math.random()>density)
    return false;
  return true;
}

function make_grid(){
  for (var i=0;i<=size;i++){
    for (var j=0;j<=size;j++){
      var randomStatus = addOrNot(density);
      grid.addCell(new Cell(i,j,randomStatus));
    }
  }
}

function canvasGrid(){
  var canvas= document.getElementById("myCanvas");
  var context= canvas.getContext("2d");
  context.clearRect(0, 0, 400, 400);
  for(var i =0;i<size;i++){
     for(var j=0;j<size;j++){
       if (grid.getCell(i,j).status){
          context.fillStyle= "Red";
          context.fillRect(i*4,j*4,4,4);
          console.log(i,j);
       }
     }
  }
}

function onrepeat(){
  grid.updateGrid();
  canvasGrid();
  requestAnimationFrame(onrepeat);
}


function init(){  
  make_grid();
  canvasGrid();
  onrepeat();
}

init();