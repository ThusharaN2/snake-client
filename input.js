const {IP, PORT, up, down, left, right, sneaky, cocky, winning} = require('./constants')

const { stdin } = require('process');
const { connect } = require('./client');
console.log('Connecting ...');
connect();

let connection;

const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
 
if (key === sneaky){
  connection.write('SSssSSss')
}

if (key === cocky) {
  connection.write('BOOYAAA!')
}

if (key === winning) {
  connection.write('Eat my dust')
}

if (key === up) {
  connection.write('Move: up')
  } 

if (key === left) {
  connection.write('Move: left')
  } 

if (key === down) {
  connection.write('Move: down')
 } 

if (key === right) {
  connection.write('Move: right');
  }
};

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