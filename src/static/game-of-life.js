var Grid = function (){
  this.cells={};
};

var Cell = function(x,y,status){
  this.x = x;
  this.y = y;
  this.status = status;
};

Grid.prototype = {
  cellRepresentation : function(x,y){
    return "x" + x + "y" + y;
  },
  addCell : function(cell){
    this.cells[this.cellRepresentation(cell.x,cell.y)] = cell;
  },
  getCell : function(x,y){
    return this.cells[this.cellRepresentation(x,y)];
  },
  getAliveNeighbours : function(cell){
    var x = cell.x;
    var y = cell.y;
    var aliveCount = 0;
    for(var i = -1; i < 2; i++){
      for(var j = -1; j < 2; j++){
        if(x-i === x && y-j === y)
          continue;
        var neighbour = this.cells[this.cellRepresentation(x-i,y-j)];
        if(neighbour && neighbour.status)
          aliveCount++;
      }
    }
    return aliveCount;
  },
  updateGrid : function(){
    var copyCells= {};
    for (cell in this.cells)
    {
      copyCells[cell]=new Cell(this.cells[cell].x,this.cells[cell].y,this.cells[cell].status);
    }
    for (var cell in copyCells){
        copyCells[cell].updateStatus(this.getAliveNeighbours(this.cells[cell]));
    }
    this.cells=copyCells;
    console.log(this.cells);
  }

};

Cell.prototype = {
  updateStatus : function (aliveneighbours){
    var finalStatus = false;
    switch (aliveneighbours){
      case 2:
        finalStatus = this.status;
        break;
      case 3:
        finalStatus = true;
        break;
      default: 
        finalStatus = false;
    }
    this.status=finalStatus;
  }
};


module.exports = {
  Grid : Grid,
  Cell : Cell,
}