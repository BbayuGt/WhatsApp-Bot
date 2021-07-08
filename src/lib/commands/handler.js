/*
  This file is used for message handling.
*/
const fs = require("fs")
const defaultPrefix = "/"; // Default prefix
const client = require("../../index").client();

function getPrefix(message) {
  let data = JSON.parse(fs.readFileSync("./lib/database/groups.json"))
  if (!message.isGroupMsg) return defaultPrefix;
  else return data[message.sender.groupMetadata.id].prefix;
}

function match(message, command) {
  if (message.body.startsWith(getPrefix(message)+command)) return true;
  return false;
}

/*
  Bot modules
*/
const help = require("./help");

module.exports = async (message) => {
  let {from, sender, id, body} = message;
  if (await match(message, "help")) {
    
  }
}