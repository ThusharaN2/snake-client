const { net } = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();


  conn.on("connect", () => {
    console.log("you ded cuz you idled");
    });
    const conn = connect();
    setupInput(conn)
