const { stdin } = require('process');
const { connect } = require('./client');
console.log('Connecting ...');
connect();

let connection;

const handleUserInput = function() {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}; 

if (key === 'Z'){
  connection.write('SSssSSss')
}

if (key === 'x') {
  connection.write('BOOYAAA!')
}

if (key === 'c') {
  connection.write('Eat my dust')
}

if (key === 'W') {
  connection.write('Move: up')
  } 

if (key === 'A') {
  connection.write('Move: left')
  } 

if (key ==='S') {
  connection.write('Move: down')
 } 

if (key === 'D') {
  connection.write('Move: right');
  }

  const setupInput = function (conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  };

module.exports = {setupInput};