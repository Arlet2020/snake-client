const net = require('net');


/**
* Setup User Interface 
* Specifically, so that we can handle user input via stdin
*/
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();

//   // conn.on('connect', () => {
//   //   console.log("Move up");
//   //   conn.write("Whats up");
//   // }) 

//   // build a standar inpot object

// stdin.on("data" , handleUserInput) // event listener if a data called event exist...z
//   return stdin;
// }


// const handleUserInput = function (data) {
//   if ('\u0003' === data) { // 
//     process.exit();
//   }
// }



// /**
//  * Establishes connection with the game server
//  */
// const connect = function() {
//   const conn = net.createConnection({ 
//     host: 'localhost',
//     port: 50541
//   });
//   // interpret incoming data as text
//   conn.setEncoding('utf8'); 

//   return conn;
// }


const { connect } = require('./client');
const { setupInput } = require('./input');


//const { connect } = require('./client');
console.log('Connecting ...');
//connect();

setupInput(connect());

// object