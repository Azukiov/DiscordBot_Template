const { ButtonBuilder, ButtonStyle } = require('discord.js')

const exampleButton123456789 = new ButtonBuilder()
    .setStyle(ButtonStyle.Primary)
    .setLabel('Example Button')
    .setID('example_button')


module.exports = {
    "buttonsMenu": {
        "exampleButton1": exampleButton123456789,
    }
}