const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ftc')
		.setDescription('ftc resources'),
	async execute(interaction) {
		await interaction.reply('https://discord.gg/59cXgmzV');
	},
};