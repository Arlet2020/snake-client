const net = require('net');


let connection; 


const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // conn.on('connect', () => {
  //   console.log("Move up");
  //   conn.write("Whats up");
  // }) 

  // build a standar inpot object

  stdin.on("data", handleUserInput) // event listener if a data called event exist... captuer data ... call hand.... 


  return stdin;
}


///// "cool"


const handleUserInput = function (data) {
  if ('\u0003' === data) { // 
    process.exit();
  } else if ('w' === data) {
    connection.write('Move: up');
  } else if ('s' === data) {
    connection.write('Move: down');
  } else if ('d' === data) {
    connection.write('Move: right');
  } else if ('a' === data) {
    connection.write('Move: left');
  } else if ('b' === data) {
    connection.write('Say: hello');
  } else if ('m' === data) {
    connection.write('Say: mice');
  }
};


// const handleUserInput = function (data) {
//   if (data === '\u0003') { // \u0003 map to ctrl + c input 
//     process.exit();
//   } 
  
//     if (data === "w") {
//     connection.write("Move up");
//   } if (data === "a") {
//     connection.write("Move left");
//   } if (data === "s") {
//     connection.write("Move down");
//   } if (data === "d") {
//     connection.write("Move right");
//   }

// };

/// desatcitvar

// const handleUserInput = function (data) {
//   if ('\u0003' === data) { // 
//     process.exit();
//   }

//   if ( data === "w") {
//     connection.write("Move: up");
//     //console.log("up");
//   } 
  
//   if (data === "a") {
//     connection.write("Move left");
//   }

// };

/// desactivar


///Just like before, we can use the ES6 object shorthand notation to export an object with the key setupInput.

const object = { setupInput : setupInput }
// object.setupInput() 


module.exports = object;