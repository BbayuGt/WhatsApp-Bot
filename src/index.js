require("@open-wa/wa-automate").create().then(client=>start(client));
const messageHandler = require("./lib/commands/handler");
exports.client = () => gclient;
let gclient;

function start(client) {
  gclient = client;
  /*
  Message handling hwre
  */
  client.onMessage(messageHandler);
}