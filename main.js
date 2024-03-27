const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Bot is online');
    client.user.setStatus('online');
});

client.login('MTIyMjYwMzgzMTUyMzY3NjMwMg.GKSeHp._uoY3PM8DVvr1KzMLgOsGg6WAS1ZTP2bSGsP-Q');
