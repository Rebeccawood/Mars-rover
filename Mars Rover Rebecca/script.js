// Rover Object Goes Here
// ======================
var rover = {
      direction: "N",
      position: [X,Y],
      travelLog:[]
};

function createMatrix(columns, rows) {
	var matrix = [];
	for (var i = 0; i < columns; i++) {
		matrix[i] = new Array(rows);
	}
	return matrix;
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  
  switch (rover.direction) {
		case 'N':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'N';
			break;
	}
	console.log(rover);
}

function turnRight(rover){
  console.log("turnRight was called!");
  
  	switch (rover.direction) {
		case 'N':
			rover.direction = 'E';
			break;

		case 'E':
			rover.direction = 'S';
			break;

		case 'S':
			rover.direction = 'W';
			break;

		case 'W':
			rover.direction = 'N';
			break;
	}
	console.log(rover);
}

function moveForward(rover){
  console.log("moveForward was called")
  
  switch (rover.direction) {
		case 'N':
			rover.position[0] = rover.position[0] - 1;
			break;

		case 'E':
			rover.position[1] = rover.position[1] + 1;
			break;

		case 'S':
			rover.position[0] = rover.position[0] + 1;
			break;

		case 'W':
			rover.position[1] = rover.position[1] - 1;
			break;
	}
}

function commands(command)
for (var i = 0; i < command.length; i++) {
		switch (command[i]) {

			case 'f':
				moveForward();
				break;

			case 'r':
				turnRight()
				break;

			case 'l':
				turnLeft()
				break;
		}
}

commands('rrfflffb');
