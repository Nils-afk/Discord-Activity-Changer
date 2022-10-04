//Config and files
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const config = require("./config.json");
const keepAlive = require("./server")

//Code of Staus Change
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers
  ]
});
client.on('ready', async () => {
  const type = [ActivityType.Watching, ActivityType.Playing, ActivityType.Listening, ActivityType.Streaming];
  const status = ['dnd', 'idle', 'online', 'streaming'];
  const text = ['Roblox', 'Fortnite', 'Stumble Guys']; //Change this to a value
  setInterval(function() {
    client.user.setPresence({
      activities: [{ name: text[Math.floor(Math.random() * text.length)], type: type[Math.floor(Math.random() * type.length)] }]
    });
    client.user.setStatus(status[Math.floor(Math.random() * status.length)])
  }
    , 1000); //Time 1000 = 1 secound
})

//Website Bot
keepAlive()
client.login(process.env.token)

//Logs
console.log(`┏🤖 Successfully Logged in your Bot!`)
console.log(`┣🪙 Credits to Kalashi#0001 and NilsDev#1960!`) //Dont Change This or Purge this.
console.log(`┗🕊️ Node v16 Discord.js v14!`)

//Real Bot
client.login(process.env.token || config.token);