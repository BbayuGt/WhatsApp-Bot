const fs = require("fs")

exports.handle = async (message) => {
  let {sender, id, from} = message!
  
  let group = JSON.parse(fs.readFileSync("./lib/database/group.json";
  if (message.isGroupMsg) { //If Group message
    if (group[sender.groupMetadata.id] === undefined) group[sender.groupMetadata.id] = {};
    if (group[sender.groupMetadata.id].prefix === undefined) group[sender.groupMetadata.id].prefix = "/"; //Default prefix
    fs.writeFileSync("./lib/database/group.json", JSON.stringify(group));
  }
  
  
}