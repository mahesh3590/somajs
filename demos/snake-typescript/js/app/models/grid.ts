///<reference path='../models/config.ts'/>
///<reference path='../interfaces/grid.ts'/>

module snake {
	export class Grid implements IGrid {

		public width:number = 0;
		public height:number = 0;
		public cellWidth:number = 0;
		public cellHeight:number = 0;
		public numCols:number = 0;
		public numRows:number = 0;
		public numIndex:number = 0;

		constructor(config:snake.Config) {
			this.width = config.canvas.width;
			this.height = config.canvas.height;
			this.cellWidth = config.grid.width;
			this.cellHeight = config.grid.height;
			this.numCols = Math.ceil(this.width / this.cellWidth);
			this.numRows = Math.ceil(this.height / this.cellHeight);
			this.numIndex = this.numCols * this.numRows;
		}

		public isInBoundaries(col:number, row:number):bool {
			return !(col < 0 || col >= this.numCols || row < 0 || row >= this.numRows);
		}

		public getIndexFromCoords(x:number, y:number):number {
			var pos = this.getPositionFromCoords(x, y);
			return this.getIndexFromPosition(pos.col, pos.row);
		}

		public getIndexFromPosition(col:number, row:number):number {
			return row * (this.numRows) + col;
		}

		public getPositionFromCoords(x:number, y:number):any {
			return {
				col: Math.floor((x / this.width) * this.numCols),
				row: Math.floor((y / this.height) * this.numRows)
			};
		}

		public getPositionFromIndex(index:number):any {
			return {
				row: Math.floor(index / this.numCols),
				col: index % (this.numCols)
			};
		}

		public getCoordsFromPosition(col:number, row:number):any {
			return {
				x: col * this.cellWidth,
				y: row * this.cellHeight
			};
		}

		public getCoordsFromIndex(index:number):any {
			var pos = this.getPositionFromIndex(index);
			return this.getCoordsFromPosition(pos.col, pos.row);
		}

	}
}