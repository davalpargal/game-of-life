var assert = require ('assert');
var Game = require('../src/static/game-of-life');


describe('Game-of-life',function(){

	describe('addCell',function(){
		it('Add (2,3) cell to grid',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(2,3,true);
			grid.addCell(cell);
			assert.equal(cell,grid.cells.x2y3);
		});
	});

	describe('getCell',function(){
		it('retrieve (4,5) cell object from grid',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(4,5,true);
			grid.addCell(cell);
			assert.equal(grid.getCell(4,5),cell);
		});
	});

	describe('getAliveNeighbours', function(){
		it('give zero alive neighbours',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(1,1,true);
			grid.addCell(cell);
			assert.equal(0,grid.getAliveNeighbours(cell));
		});

		it('it should return 4 alive neighbours when 4 alive cells are added in its surrounding', function(){
      var grid = new Game.Grid();
			var cell = new Game.Cell(2,2,true);
			grid.addCell(cell);
			grid.addCell(new Game.Cell(2,3,true));
		  grid.addCell(new Game.Cell(3,2,true));
		  grid.addCell(new Game.Cell(2,1,true));
		  grid.addCell(new Game.Cell(1,2,true));
      assert.equal(4,grid.getAliveNeighbours(cell));
		});
	});

	describe('updateStatus',function(){
		it('it should update status of cell as alive with 3 living cells as neighbour',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(2,2,false);
			grid.addCell(cell);
			grid.addCell(new Game.Cell(2,3,true));
		  grid.addCell(new Game.Cell(3,2,true));
		  grid.addCell(new Game.Cell(2,1,true));
		  cell.updateStatus(grid.getAliveNeighbours(cell));
		  assert.equal(true,cell.status);
		});
		it('it should update status of cell as dead with 4 living cells as neighbour',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(2,2,true);
			grid.addCell(cell);
			grid.addCell(new Game.Cell(2,3,true));
		  grid.addCell(new Game.Cell(3,2,true));
		  grid.addCell(new Game.Cell(2,1,true));
		  grid.addCell(new Game.Cell(1,2,true));
      cell.updateStatus(grid.getAliveNeighbours(cell));
		  assert.equal(false,cell.status);
		});
		it('it should update status of cell as dead with 1 living cell as neighbour',function(){
			var grid = new Game.Grid();
			var cell = new Game.Cell(2,2,true);
			grid.addCell(cell);
			grid.addCell(new Game.Cell(2,3,true));
		  grid.addCell(new Game.Cell(3,2,false));
		  grid.addCell(new Game.Cell(2,1,false));
		  grid.addCell(new Game.Cell(1,2,false));
      cell.updateStatus(grid.getAliveNeighbours(cell));
		  assert.equal(false,cell.status);
		});
	});
  
  describe('updateGrid', function(){
  	it('Checks if the grid is updated',function(){
      //is tedious to do! :P Compare the string of final output of a random matrix and ur own expected string.
      //If other method - please let me know!
  	});
  });

});