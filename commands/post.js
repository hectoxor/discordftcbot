const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('post')
		.setDescription('post'),
	async execute(interaction) {
		//const channel = await client.channels.fetch(1023309443913502753);

        await channel.interaction.reply('hi')

	},
};