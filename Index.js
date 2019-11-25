/* Setup

   1. Create a .env file (click add file then remane it to .env)

   2. Put "token=" (without quotes) into the .env file followed by your Discord Bot token (No spaces!)

*/



const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Here is where you need to code
  if(message.content == "t") {
    message.channel.send("@everyone [T] Training! Come to the Training Center for a chane at a Promotion!! https://www.roblox.com/games/4368863292/Mano-County-Training-Center");
  }
});

client.login(process.env.token);
