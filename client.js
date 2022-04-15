const { net } = require('net');

const connect = function () {
  const conn = net.createConnection({
   "host": "localhost",
    "port": "50541"
  });
  conn.on('connect', () => {
    conn.write('Name: AVA');
  })
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  //  setInterval(() => {
  //    conn.write('Move: up');
  //  }, 50);



  return conn;
}
  module.exports = {connect};