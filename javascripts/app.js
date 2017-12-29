// Rover Object Goes Here
// ======================
var marsRover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

//function turnLeft-direction
function turnLeft(rover){

  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;

    case "W":
    rover.direction = "S";
    break;

    case "S":
    rover.direction = "E";
    break;

    case "E":
    rover.direction = "N";
    break;
  }
  console.log("marsRover va hacia el " + rover.direction);
}
// console.log(marsRover);
//console.log(rover.direction);
//turnLeft(marsRover);
//console.log(marsRover);

//function turnRight-direction
function turnRight(rover){

  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;

    case "E":
    rover.direction = "S";
    break;

    case "S":
    rover.direction = "W";
    break;

    case "W":
    rover.direction = "N";
    break;
  }
  console.log("marsRover va hacia el " + rover.direction);
}
// console.log(marsRover);
//console.log(rover.direction);
//turnLeft(marsRover);
//console.log(marsRover);

//function moveForward-direction
function moveForward(rover){

  switch (rover.direction) {

    case "W":
      rover.x--;
      break;

    case "N":
      rover.y--;
      break;

    case "S":
      rover.y++;
      break;

    case "E":
      rover.x++;
      break;
  }
  console.log(" eje x " +rover.x + " eje y " +rover.y);
}
// console.log(marsRover);
//console.log(rover.direction);
//moveForward(marsRover);
//console.log(marsRover);

function moveBackward(rover){

  switch (rover.direction) {

    case "W":
      rover.x++;
      break;

    case "N":
      rover.y++;
      break;

    case "S":
      rover.y--;
      break;

    case "E":
      rover.x--;
      break;
  }
  console.log(" eje x " +rover.x + " eje y " +rover.y);
}
// console.log(marsRover);
//console.log(rover.direction);
//moveBackward(marsRover);
//console.log(marsRover);

// Commands orders
function commandsList(rover, orders) {

  for (var i = 0; i < orders.length; i++) {
    var orderCode = orders[i];

    switch (orderCode) {

      case 'l':
        turnLeft(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;

      case 'r':
        turnRight(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;

      case 'f':
        moveForward(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;

      case 'b':
        moveBackward(rover);
        rover.travelLog.push("x = " + rover.x  + " y = " + rover.y);
      break;

    }
  }
}
