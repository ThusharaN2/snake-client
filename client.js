const  net  = require('net');
const {IP,PORT } = require('./constants')

const connect = function () {
  const conn = net.createConnection({
   "host": "localhost",
    "port": "50541"
  });

  conn.setEncoding("utf8");
  conn.on('connect', () => {
    conn.write('Name: AVA');
    console.log('Successfully connected to game server');
  
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
  //  setInterval(() => {
  //    conn.write('Move: up');
  //  }, 50);

}
  module.exports = {connect};