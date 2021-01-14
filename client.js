const net = require('net')

const connect = function () {
  const conn = net.createConnection({
    host: `135.23.222.131`,
    port: 50542
  });
  // interpret incoming data as text
  //conn.on('Successfully connected to game server');

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: Snake");
  }) 


  conn.on('connect', () => {
    conn.write('Hello from client!');
  });


//  setTimeOut


  setTimeout(() => {
    console.log('This will still run.');
  }, 500);


  // let delay = 1000;

  // setTimeout(function () {
  //   console.log('hello');
  //   //My code to be executed after 1 second
  // }, delay);


  return conn;
}
module.exports = { connect };





// //const connect = function () {
// const conn = net.createConnection({
//   host: 'localhost',
//   port: 50541
// });
// // interpret incoming data as text
// conn.setEncoding('utf8');

// return conn;
// }