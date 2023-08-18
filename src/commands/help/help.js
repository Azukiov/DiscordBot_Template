const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows the help menu'),

    async execute(client, interaction) {
          
    }
}