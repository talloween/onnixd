const Discord = require('discord.js');
const bot_user = new Discord.Client();


bot_user.once('ready', () => {
	console.log("Initiated.")
})


bot_user.login(pastetokeninformation)