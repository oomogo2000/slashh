
const token  = 'ODkwOTY0OTU3NjgyODc2NDU2.YU3dxw.Oxks844BcNXpfW9A12H53PfXFzQ';
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

/*const funtions = fs.readdirSync('../src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('../src/events').filter(file => file.endsWith('.js'));
const commandsFolders = fs.readdirSync('../src/commands')*/
const functions = fs.readdirSync('./functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const commandsFolders = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

(async() => {
	for (file of functions) {
		require(`./functions/${file}`)(client);
	}
	client.handleEvents = (eventFiles, '.src/events');
	client.handleCommands = (commandsFolders, '.src/commands');
 	client.login(token);
})();