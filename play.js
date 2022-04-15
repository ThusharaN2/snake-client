const net = require("net");

// establishes a connection with the game server
const conn = net.createConnection({
  "host": "192.168.0.15",
   "port": "50541"
});
  conn.on("connect", () => {
  console.log("you ded cuz you idled");
  });

  // interpret incoming data as text
  const {connect} = require(`./client`)
console.log("Connecting ...");
connect();