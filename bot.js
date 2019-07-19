const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("601807947328389142")
setInterval(function() {
channel.send(`ayshe ayshe please kkkkkk`);
}, 30)
})

client.login(process.env.BOT_TOKEN);