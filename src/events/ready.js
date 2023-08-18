const { Events } = require('discord.js');
const { log } = require('../utils/functions.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        try {

            log(`Logged in as ${client.user.tag}!`);
            
        } catch (error) {
            console.error(`Error while logging in as ${client.user.tag}`);
            console.error(error);
        }
    }
}